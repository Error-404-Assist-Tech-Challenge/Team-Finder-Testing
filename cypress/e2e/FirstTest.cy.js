describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://team-finder-404.web.app');
  })

  it('Log in testing', () => {
    // Check the welcome message
    cy.get('h1').should('contain.text', 'Welcome to Team Finder');

    // Click the first button
    cy.get('button:first').click();

    // Enter email and password
    cy.get('input:first').type('dudadud@yahoo.com');
    cy.get('input:last').type('Password123!');

    // Click the login button
    cy.get('button:first').click();

    // Click the second button
    cy.get('button').eq(1).click();
  })
})