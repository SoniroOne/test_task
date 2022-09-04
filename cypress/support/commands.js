Cypress.Commands.add('verifyThatElementHasSpecificText', (selector, text) => {
    cy.get(selector).should('exist').and('have.text', text);
  });
  
  Cypress.Commands.add('clickOutside', (selector = 'body') => {
    return cy.get(selector).click(0, 0, { force: true });
  });
  