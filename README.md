# Project
Using Cypress to do tests end to end, in the website https://alura-fotos.herokuapp.com/#/home

## Project Files
The following JavaScripts files are included in this project:

*alurapic.cy.js* - contain the test script for the Alurapic application, but specifically for testing the usability elements. It uses the Cypress testing framework to perform end-to-end tests on the application's functionality.

*api-alurapic.cy.js* - contain the test script for the Alurapic application, but specifically for testing the API endpoints. It uses the Cypress testing framework to perform API tests on the application's functionality.

*cadastro.cy.js* - contain the test script for the registration functionality in the Alurapic application. It uses the Cypress testing framework to simulate user input and test the registration process.

*login.cy.js* - contain the test script for the login functionality in the Alurapic application. It uses the Cypress testing framework to simulate user input and test the login process.

## Usage
<p>To run the test scripts in these files, you will need to have the Cypress testing framework installed in your environment. You can install Cypress by following the instructions on their website.</p>

<p>Once you have Cypress installed, you can run the test scripts by executing the following command in your terminal:</p>

```npx cypress run``` or the ```npm run test``` to open the browser and run test.

This will execute all of the test scripts in the integration directory, including the ones in these files.

## Screenshot

<img src="https://github.com/hamadecd/alurapic-cypress/blob/main/cypress/screenshots/cadastro.cy.js/Testa%20funcionalidades%20de%20cadastro%20do%20Alurapic%20--%20Registra%20novo%20usu%C3%A1rio%20v%C3%A1lido%20(failed).png" >

[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)
