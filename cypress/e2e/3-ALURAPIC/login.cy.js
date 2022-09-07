describe('Testa funcionalidade de login do Alurapic', () => {

    beforeEach(() => {
        cy.visit('/');

        /* cy.intercept('POST', 'https://apialurapic.herokuapp.com/user/login', {
            statusCode: 400
        }).as('stubPost') */
    })

    it('verifica login valido', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        //cy.wait('@stubPost');
        //cy.wait('@stubPost').should('have.property', 'error');
        cy.contains('a', '(Logout)').should('be.visible');
    })

    it('verifica login invalido com senha errada', () => {
        cy.login(Cypress.env('userName'), 'senhaerrada');
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password');
        })
    })

    it('verifica login invalido com usuario errado', () => {
        cy.login('logininvalido', Cypress.env('password'));
        cy.on('window:alert', (str) => {
            expect(str).to.be.equal('Invalid user name or password');
        })
    })

})