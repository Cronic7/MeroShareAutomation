const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env:{
    'USERNAME':'USERNAME',
    'DP':'DP',
    'PASSWORD':'PASSWORD',
    'IPONUMBER':'IPONUMBER',
 
  }
  ,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://meroshare.cdsc.com.np/'
  },
});


/*

 

*/