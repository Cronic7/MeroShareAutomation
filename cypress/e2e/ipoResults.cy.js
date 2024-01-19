 
const table=require('array2table')


describe('Main', () => {

  beforeEach(()=>{
    cy.writeFile('cypress/fixtures/ipoData.txt','') //TO clear data before each test run
  })
  it('Ipo Results', () => {
    
    const summary=[
      ['Alloted','NOtAlloted'],
      [0,0],
    ]
    const expiryDate=[
      ['Meroshare','Dmat'],
      ['0','0']
    ]
     
      cy.writeFile('cypress/fixtures/ipoData.txt',`\nUser Name: ${Cypress.env("USERNAME")}\n`,{ flag: 'a+' })
      cy.login(Cypress.env('DP'), Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
        cy.get('li.nav-item').contains("My ASBA", {
          matchCase: false
        }).click();
        
        cy.get('[class="nav-item"]').contains("Application Report").click()
         
        for(let i=0;i<Cypress.env("IPONUMBER");i++){
        cy.get('.company-list').then((report)=>{
          cy.wrap(report).eq(i).find('.btn-issue').click();
          cy.wait(2000)
          //save data
          cy.get('[tooltip="Company Name"]').invoke('text').as('ipoName');
          cy.get('[class="form-group"]').contains("Status").parent().parent().find('[class="input-group"]').invoke('text').as('ipoStatus');
           
      
          // Use alias to retrieve the values stored in the variables and write to the fixture
          cy.get('@ipoName').then((ipoName) => {
            // Log or use the IPO name as needed
            cy.log(`IPO Name: ${ipoName}`);
            cy.writeFile('cypress/fixtures/ipoData.txt', `IPO Name: ${ipoName.trim()}\n`, { flag: 'a+' }); // Append mode             
          });
      
          cy.get('@ipoStatus').then((ipoStatus) => {
            // Log or use the IPO status as needed
            cy.log(`IPO Status: ${ipoStatus}`);
            console.log(ipoStatus)
            if(ipoStatus.trim()=="Alloted"){
              summary[1][0]+=1;
              
            }else{
              summary[1][1]+=1;
              
            }
             
            cy.writeFile('cypress/fixtures/ipoData.txt', `IPO Status: ${ipoStatus.trim()}\n`, { flag: 'a+' }); // Append mode            
          });
      
          cy.go("back")
          cy.get('[class="nav-item"]').contains("Application Report").click()

        })
      }
      //get the expiry dates
      cy.visit('https://meroshare.cdsc.com.np/#/ownProfile')
      cy.get('[class="row info-box__expire-date"] [class="account-info__date"]').each((data,index)=>{
        const text=data.text();
        cy.log(index)
         
          expiryDate[1][index] = text;
      
    
      })
       
       
      cy.get('.header-menu__item--logout-desktop-view > .nav-link > .msi').click()

      cy.then(()=>{
      cy.writeFile('cypress/fixtures/ipoData.txt','\nSummary: \n' +table(summary) , { flag: 'a+' }); // Append mode      
     
    })

            
            cy.then(()=>{
              cy.writeFile('cypress/fixtures/ipoData.txt','\n \nExpiry Date: \n' +table(expiryDate) , { flag: 'a+' }); // Append mode      
             
            }) 
   
//   //Use cy.exec() with the constructed path
// cy.exec(`node  mailer.js`).its('code')
// .should('eq', 0); // Ensure the script executed successfully
  })
})
 