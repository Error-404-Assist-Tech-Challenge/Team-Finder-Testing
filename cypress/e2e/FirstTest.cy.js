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
  
  it('Sign up testing', () => {
    // Check the welcome message
    cy.get('h1').should('contain.text', 'Welcome to Team Finder');

    // Click the sign up button
    cy.get('button:last').click();

    // Enter user details
    cy.get('input').eq(0).type('Admin Test'); // First input
    cy.get('input').eq(1).type('teste_mail@example.com'); // Second input
    cy.get('input').eq(2).type('Password123!'); // Third input
    cy.get('input').eq(3).type('Error404 Corporation'); // Fourth input
    cy.get('input').eq(4).type('Error404 Headquarters'); // Fifth input

    cy.get('button').eq(1).click();

});
})