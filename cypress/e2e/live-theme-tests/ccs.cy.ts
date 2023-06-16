describe("Test For Custom Card Sleeves", () => {
  beforeEach(() => {
    cy.visit(
      "https://www.yourplaymat.com//products/custom-playmat?_ab=0&_fd=0&_sc=1&preview_theme_id=150380216636"
    );
  });
  it("should add the products", () => {
    const addons = ["Premium Editing", "Stitched Edging"];
    cy.get(".email-later").click();
    cy.productAddonSelect("Stitched Edging");
    cy.productAddonToogle("Premium Editing");
    cy.get(".add-to-cart").click();
    cy.get(".cart-title").should("contain", "Custom Playmat");
    cy.get(".slide-cart-subtotal .text-money", { timeout: 12000 }).should(
      "be.visible"
    ).should('contain','47.50');
    cy.get(".cart-variant-item").each(($ele, index) => {
      cy.wrap($ele).should("contain", addons[index]);
    });
  });
});
