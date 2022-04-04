describe('Home', () => {
  it('Render home', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.contains('Home');
  });
});
