///<reference types="Cypress" />

describe('Search data in page', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'));
  });


  it('Should appears differents cards it depends of type in', () => {

    cy.get('[data-cy="header-form"] .form__wrapper__input')
      .type('Grey beach')
      .should('have.value', 'Grey beach')
      .type('{enter}');

    cy.get('[data-cy="Home"] .card').as('Home');
    cy.get('@Home')
      .contains('Grey beach')
      .should('have.class', 'card__titleBlock__title');
    
    cy.get('[data-cy="Home"] .columnsCards').as('columnsCards');
    cy.get('@columnsCards')
      .find('article')
      .should('have.class', 'card')

    cy.get('[data-cy="header-form"] .form__wrapper__input')
      .type('{selectall}{backspace}')
      .type('{enter}');
  });

  it('Should´nt appears anything at Home view', () => {

    cy.get('[data-cy="header-form"] .form__wrapper__input')
      .type('NJKANSDKJNASKJDN')
      .type('{enter}');

    cy.get('[data-cy=Home]')
      .children()
      .should('have.length', 0);
    
  });
});
