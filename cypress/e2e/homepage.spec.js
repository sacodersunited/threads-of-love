/// <reference types="cypress" />
/// <reference types="@applitools/eyes-cypress" />

describe("TOL tests", () => {
  // beforeEach(() => {
  //   cy.eyesOpen({
  //     appName: "TOL",
  //     testName: "TOL pages on top 3 browsers",
  //     browser: [
  //       { width: 1920, height: 1080, name: "safari" },
  //       { width: 1920, height: 1080, name: "chrome" },
  //       { width: 1920, height: 1080, name: "ie11" },
  //     ],
  //   })
  // })

  // afterEach(() => {
  //   cy.eyesClose()
  // })

  it("test homepage", () => {
    cy.viewport(1920, 1080)
    cy.visit("http://localhost:8000/")
    cy.scrollTo("bottom")
    cy.scrollTo("top")
    cy.wait(1500)
    // cy.eyesCheckWindow()

    cy.visit("http://localhost:8000/our-work")
    // cy.eyesCheckWindow()

    cy.visit("http://localhost:8000/about")
    cy.wait(1000)
    // cy.eyesCheckWindow()

    cy.visit("http://localhost:8000/get-involved")
    cy.wait(1000)
    // cy.eyesCheckWindow()

    cy.visit("http://localhost:8000/volunteers")
    cy.wait(1000)
    // cy.eyesCheckWindow()

    cy.visit("http://localhost:8000/calendar")
    cy.wait(1000)
    // cy.eyesCheckWindow()

    cy.visit("http://localhost:8000/donate")
    cy.wait(1000)
    // cy.eyesCheckWindow()
  })
})
