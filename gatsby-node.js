const volunteerImages = require("./src/data/volunteer-images.json")

exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type CloudinaryMedia implements Node {
      secure_url: String!
      tags: [String!]!
    }
  `)
}

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
  reporter,
}) => {
  const credentials = [
    process.env.CLOUDINARY_CLOUD_NAME,
    process.env.CLOUDINARY_API_KEY,
    process.env.CLOUDINARY_API_SECRET,
  ]
  let images = volunteerImages

  if (credentials.every(Boolean)) {
    const { v2: cloudinary } = require("cloudinary")
    cloudinary.config({
      cloud_name: credentials[0],
      api_key: credentials[1],
      api_secret: credentials[2],
      secure: true,
    })

    images = []
    let nextCursor
    do {
      const result = await cloudinary.api.resources_by_tag("volunteer", {
        resource_type: "image",
        max_results: 500,
        tags: true,
        next_cursor: nextCursor,
      })
      images.push(...result.resources)
      nextCursor = result.next_cursor
    } while (nextCursor)
  } else if (credentials.some(Boolean)) {
    reporter.panicOnBuild(
      "Set all three Cloudinary environment variables, or unset them to use the saved volunteer gallery."
    )
    return
  } else {
    reporter.info(
      "Using the saved public volunteer gallery (Cloudinary credentials are unset)."
    )
  }

  for (const image of images) {
    const data = {
      secure_url: image.secure_url,
      tags: image.tags || ["volunteer"],
    }
    actions.createNode({
      ...data,
      id: createNodeId(`cloudinary-${image.secure_url}`),
      parent: null,
      children: [],
      internal: {
        type: "CloudinaryMedia",
        contentDigest: createContentDigest(data),
      },
    })
  }
}
