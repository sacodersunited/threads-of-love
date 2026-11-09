const assert = require("node:assert/strict")
const fs = require("node:fs")
const path = require("node:path")
const test = require("node:test")
const vm = require("node:vm")
const savedImages = require("../src/data/volunteer-images.json")

function loadSource(env = {}, cloudinary) {
  const hooks = {}
  vm.runInNewContext(
    fs.readFileSync(path.join(__dirname, "../gatsby-node.js"), "utf8"),
    {
      exports: hooks,
      process: { env },
      require: (name) => {
        if (name === "cloudinary") return { v2: cloudinary }
        return savedImages
      },
    }
  )
  return hooks.sourceNodes
}

function context() {
  const nodes = []
  return {
    nodes,
    actions: { createNode: (node) => nodes.push(node) },
    createNodeId: (id) => id,
    createContentDigest: (data) => JSON.stringify(data),
    reporter: {
      info: () => {},
      panicOnBuild: (message) => {
        throw new Error(message)
      },
    },
  }
}

test("credential-free builds preserve every published volunteer photo with stable IDs", async () => {
  const first = context()
  const second = context()
  await loadSource()(first)
  await loadSource()(second)
  assert.equal(first.nodes.length, 34)
  assert.equal(new Set(first.nodes.map((node) => node.id)).size, 34)
  assert.deepEqual(
    first.nodes.map((node) => node.secure_url),
    savedImages.map((image) => image.secure_url)
  )
  assert.deepEqual(
    first.nodes.map((node) => node.id),
    second.nodes.map((node) => node.id)
  )
})

test("configured builds load all gallery pages without putting credentials in Gatsby nodes", async () => {
  const calls = []
  const cloudinary = {
    config: () => {},
    api: {
      resources_by_tag: async (tag, options) => {
        calls.push({ tag, options })
        return options.next_cursor
          ? { resources: [{ secure_url: "https://example.com/second.jpg" }] }
          : {
              resources: [
                {
                  secure_url: "https://example.com/first.jpg",
                  tags: ["volunteer"],
                },
              ],
              next_cursor: "page-2",
            }
      },
    },
  }
  const ctx = context()
  await loadSource(
    {
      CLOUDINARY_CLOUD_NAME: "test",
      CLOUDINARY_API_KEY: "key",
      CLOUDINARY_API_SECRET: "test-secret",
    },
    cloudinary
  )(ctx)
  assert.equal(ctx.nodes.length, 2)
  assert.equal(calls[0].tag, "volunteer")
  assert.equal(calls[1].options.next_cursor, "page-2")
  assert.equal(JSON.stringify(ctx.nodes).includes("test-secret"), false)
})

test("partial credentials fail clearly instead of silently publishing stale data", async () => {
  const ctx = context()
  await assert.rejects(
    loadSource({ CLOUDINARY_API_KEY: "key" })(ctx),
    /Set all three Cloudinary/
  )
  assert.equal(ctx.nodes.length, 0)
})
