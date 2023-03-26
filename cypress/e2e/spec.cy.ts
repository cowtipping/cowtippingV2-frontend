describe("Live links", () => {
  const urls = [
    "http://www.letchat.co.uk",
    "https://github.com/cowtipping/Git-Gud-LetChat-Frontend",
    "https://cowtipping.co.uk/clickwaste/",
    "https://github.com/cowtipping/clicker",
    "https://cowtipping.co.uk/whothatpoke",
    "https://github.com/cowtipping/whos-that-pokemon",
    "https://cowtipping.co.uk/genshinbooks",
    "https://github.com/cowtipping/genshin-book-farm",
    "https://cowtipping.co.uk/",
    "https://github.com/cowtipping/cowtippingV2-frontend",
  ];

  it("should match the correct URLs", () => {
    cy.visit("/");
    cy.get(".link-to-project").each(($el, index) => {
      cy.wrap($el).should("have.attr", "href").and("eq", urls[index]);
    });
  });
});

describe("Navbar links", () => {
  it("should go to the correct anchors when clicked", () => {
    cy.visit("/");

    cy.contains(/home/i).click();
    cy.url().should("eq", "http://localhost:3000/#home");
    cy.go("back");

    cy.contains(/about/i).click();
    cy.url().should("eq", "http://localhost:3000/#about");
    cy.go("back");

    cy.contains(/projects/i).click();
    cy.url().should("eq", "http://localhost:3000/#projects");
    cy.go("back");

    cy.contains(/contact/i).click();
    cy.url().should("eq", "http://localhost:3000/#contact");
    cy.go("back");
  });
});

describe("Contact form", () => {
  it("should send a message", () => {
    cy.visit("/");
    cy.contains(/contact/i).click();
    cy.get("input[name='name']").type("Test message from Cypress");
    cy.get("input[name='email']").type("turbogerbil@gmail.com");
    cy.get("textarea[name='message']").type("Hello from Cypress!");
    cy.get("button[type='submit']").click();
    cy.get("button[type='submit']").should("be.disabled");
  });
});

export {};
