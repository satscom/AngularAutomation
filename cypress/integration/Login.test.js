const { createYield } = require("typescript");

describe('Sould clear the register form ', () => {

    it('should clear the form', () => {
          
        cy.visit("http://localhost:4200/register");
        cy.contains("CMT Hackathon");
        cy.get('input[name=firstName]').type('test');
        cy.get('input[name=lastName]').type('user');
        cy.get('input[name=userName]').type('userflexl1');
        cy.get('input[name=email]').type('userflexl1@user.com');
        cy.get('input[name=password]').type('flexl1');
        cy.get('button[type=button]').click();
    })

});


describe('Register User Page', () => {

    it('should register a user', () => {
          
        cy.visit("http://localhost:4200/register");
        cy.contains("CMT Hackathon");
        cy.get('input[name=firstName]').type('test');
        cy.get('input[name=lastName]').type('user');
        cy.get('input[name=userName]').type('userflexl1');
        cy.get('input[name=email]').type('userflexl1@user.com');
        cy.get('input[name=password]').type('flexl1');
        cy.get('button[type=submit]').click();
    })

});

describe('Login User', () => {

    it('should allow the user with valid credentials', () => {
        cy.visit("http://localhost:4200/");
        cy.contains("CMT Hackathon");
        cy.get('input[name=userName]').type('userflexl1');
        cy.get('input[name=password]').type('flexl1');
        cy.get('button[type=submit]').click();
        
    })
});
describe('Check Loan Page for specific loan', () => {

    it('Check Asset ID', () => {
          
        cy.visit("http://localhost:4200/loan");
        cy.contains("CMT Hackathon");
        cy.contains("76900012:L").should('be.visible');
        cy.get('table tr').should('have.length', 9)
        
    })

});
