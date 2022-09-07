describe('Usability testing of the Alurapic website', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it('Login is displayed', () => {
        cy.contains('h4', 'Login').should('be.visible');
    })

    it('Image of index page', () => {
        cy.get('img[alt="Welcome"]').should('be.visible');
    })

    it('Link for login', () => {
        cy.contains('a', 'Please, login!').should('be.visible');
    })

    it('Link for register', () => {
        cy.contains('a', 'Register now').should('be.visible');
    })

    it('Validate title', () => {
        cy.title().should('equal', 'Sign in');
    })

})