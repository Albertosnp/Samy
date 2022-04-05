///<reference types="Cypress" />

describe('Render principal view', () => {
  it('Render home', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.get('[data-cy="header-form"] .form__wrapper__input')
      .invoke('attr', 'placeholder')
      .should('contain', 'You´re looking for something?')
  });
});
