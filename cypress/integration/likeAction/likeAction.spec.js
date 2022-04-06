///<reference types="Cypress" />

describe('Simulate like and unlike of Card', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'));
  });
  
  it('Should change unlike to like', () => {
    cy.get('[data-cy="header-form"] .form__wrapper__input')
      .type('Grey beach')
      .should('have.value', 'Grey beach')
      .type('{enter}');

    cy.get('[data-cy="Home"] .card .card__likes__button').as('likeButton');

    cy.get('@likeButton')
      .first()
      .should('have.class', 'card__likes__button--unliked')
      .click();

    cy.get('@likeButton')  
      .should('have.class', 'card__likes__button--liked');
  });

});

