declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable<Subject> {
      productAddonSelect(containText: string): Chainable<void>;
      productAddonToogle(containText: string): Chainable<void>;
      chainableCommand(option: string): Chainable<void>;
    }
  }
}

/**
 * Goes to google site
 */
Cypress.Commands.add("productAddonSelect", (containText: string) => {
  cy.contains(".product-addon-select", containText).click();
});
Cypress.Commands.add("productAddonToogle", (containText: string) => {
  cy.contains(".product-addon-toggler", containText).click();
});

Cypress.Commands.add(
  "chainableCommand",
  { prevSubject: "element" },
  (subject, option) => {
    console.log("subject", subject);
    console.log("option", option);
    cy.wrap(subject).click();
    // cy.wrap(subject).debug();
  }
);

/**
 * Navigates to page with pageName
 */
export {};
