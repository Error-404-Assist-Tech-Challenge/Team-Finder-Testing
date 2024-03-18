describe('template spec', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    console.error('Uncaught exception:', err.message);
    return false;
  });
  
  beforeEach(() => {
    cy.visit('https://team-finder-404.web.app');
    cy.viewport(1920, 1080)
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

  it('Routes testing', () => {
    // Check the welcome message
    cy.get('h1').should('contain.text', 'Welcome to Team Finder');

    // Click the first button
    cy.get('button:first').click();

    // Enter email and password
    cy.get('input:first').type('dudadud@yahoo.com');
    cy.get('input:last').type('Password123!');

    cy.get('button:first').click();

    cy.get('button').eq(1).click();
    cy.get('button:first').click();
    cy.url().should('include', '/myskills');
    cy.wait(700);

    cy.get('button').eq(1).click();
    cy.url().should('include', '/myprojects');
    cy.wait(700);

    cy.get('button').eq(2).click();
    cy.url().should('include', '/organizationemployees');
    cy.wait(700);

    cy.get('button').eq(3).click();
    cy.url().should('include', '/organizationdepartments');
    cy.wait(700);

    cy.get('button').eq(4).click();
    cy.url().should('include', '/organizationskills');
    cy.wait(700);

    cy.get('button').eq(5).click();
    cy.url().should('include', '/mydepartment');
    cy.wait(700);

    cy.get('button').eq(6).click();
    cy.url().should('include', '/projects');
    cy.wait(700);

    cy.get('button').eq(7).click();
    cy.url().should('include', '/departmentprojects');
    cy.wait(700);

  });

  it('Notifications Testing', () => {
    // Check the welcome message
    cy.get('h1').should('contain.text', 'Welcome to Team Finder');

    // Click the first button
    cy.get('button:first').click();

    // Enter email and password
    cy.get('input:first').type('dudadud@yahoo.com');
    cy.get('input:last').type('Password123!');

    cy.get('button:first').click();
    cy.get('button').eq(1).click();

    cy.get('button').eq(8).click();

  });
  it('Add Skill Testing', () => {
    // Check the welcome message
    cy.get('h1').should('contain.text', 'Welcome to Team Finder');

    // Click the first button
    cy.get('button:first').click();

    // Enter email and password
    cy.get('input:first').type('dudadud@yahoo.com');
    cy.get('input:last').type('Password123!');

    cy.get('button:first').click();
    cy.get('button').eq(1).click();

    cy.get('button').eq(9).click();
    
    cy.get('input').eq(0).type('Minecraft'); // First input
    cy.contains('Minecraft').click();

    cy.get('button').eq(1).click({force:true}); 
    // cy.get('Minecraft').click(); // First input
  });

})