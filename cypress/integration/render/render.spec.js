///<reference types="Cypress" />

describe('Render principal view', () => {
  it('Render home', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.contains('header');
  });
});
