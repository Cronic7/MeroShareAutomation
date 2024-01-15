describe("Apply Share",()=>{


    it("apply share",()=>{

        cy.login(Cypress.env('ME_DP'), Cypress.env('ME_USERNAME'), Cypress.env('ME_PASSWORD'))
        cy.get('li.nav-item').contains("My ASBA", {
            matchCase: false
          }).click();




    })
})