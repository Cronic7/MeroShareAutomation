
Cypress.Commands.add('login',(DP,USERNAME,PASSWORD)=>{
    cy.visit('/')
      cy.get('form[name="loginForm"]',{timeout:10000}).should('exist').then((form)=>{
        cy.wrap(form).within(()=>{
          cy.get('[class="selection"]').type(`${DP}{enter}`,{log:false}) //bank name
          cy.get('[name="username"]').type( USERNAME,{log:false}) // dpid
          cy.get('[id="password"]').type( PASSWORD,{log:false})//password
          cy.get('button[type="submit"]').click()
         
           
        })
})
})



//Remove the contents of the text file
 









// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })