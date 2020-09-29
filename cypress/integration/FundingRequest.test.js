describe('Check Loan Page', () => {

    it('Check Asset ID', () => {
          
        cy.visit("http://localhost:4200/loan");
        cy.contains("CMT Hackathon");
        cy.contains("76900012:L");
        cy.get('table tr').should('have.length', 9)
        
    })

});
