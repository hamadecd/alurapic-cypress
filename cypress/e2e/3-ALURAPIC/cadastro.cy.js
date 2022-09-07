const { it } = require("mocha");

describe('Testa funcionalidades de cadastro do Alurapic', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it('verifica mensagens validacao', () => {
        cy.register();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    })

    it('verifica mensagem de e-mail invalido', () => {
        cy.register();
        cy.get('input[formcontrolname="email"]').type('samircd9').blur();
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })

    it('verifica mensagem de campo nome limite maximo 40 caracteres', () => {
        cy.register();
        cy.get('input[formcontrolname="fullName"]').type('samirsamirsamirsamirsamirsamirsamirsamir1').blur();
        cy.contains('ap-vmessage', 'Maximun length is 40').should('be.visible');
    })

    it('verifica mensagem de campo nome nao pode ser vazio', () => {
        cy.register();
        cy.get('input[formcontrolname="fullName"]').click().blur();
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
    })

    it('verifica mensagem de campo nome deve ter no minimo 2 caracteres', () => {
        cy.register();
        cy.get('input[formcontrolname="fullName"]').type('h').blur();
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
    })

    it('verifica mensagem de campo user name limite maximo 30 caracteres', () => {
        cy.register();
        cy.get('input[formcontrolname="userName"]').type('samirsamirsamirsamirsamirsamir1').blur();
        cy.contains('ap-vmessage', 'Maximun length is 30').should('be.visible');
    })

    it('verifica mensagem de campo user name deve ter no minimo 2 caracteres', () => {
        cy.register();
        cy.get('input[formcontrolname="userName"]').type('h').blur();
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
    })

    it('verifica mensagem de campo user name deve ser em minusculo', () => {
        cy.register();
        cy.get('input[formcontrolname="userName"]').type('Hamade').blur();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
    })

    it('verifica mensagem de campo user name nao pode ser vazio', () => {
        cy.register();
        cy.get('input[formcontrolname="userName"]').click().blur();
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
    })

    it('verifica mensagem de campo password nao pode ser vazio', () => {
        cy.register();
        cy.get('input[formcontrolname="password"]').click().blur();
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    })

    it('verifica campo password e user name devem ser diferentes', () => {
        cy.register();
        cy.get('input[formcontrolname="userName"]').type('usuarioesenha');
        cy.get('input[formcontrolname="password"]').type('usuarioesenha').blur();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Username and password must be different').should('be.visible');
    })

    it('verifica mensagem de campo password minimo 8 caracteres', () => {
        cy.register();
        cy.get('input[formcontrolname="password"]').type('1234567').blur();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    })

    it('verifica mensagem de campo password maximo de 18 caracteres', () => {
        cy.register();
        cy.get('input[formcontrolname="password"]').type('123456789123456789').blur();
        cy.contains('ap-vmessage', 'Maximun length is 18').should('be.visible');
    })

    // a mensagem 'Maximun length is 18' já aparece mesmo se digitar apenas 15 caracteres
    it('verifica mensagem de campo password com 15 caracteres', () => {
        cy.register();
        cy.get('input[formcontrolname="password"]').type('123456789123456').blur();
        cy.contains('ap-vmessage', 'Maximun length is 18').should('be.visible');
    })

    const users = require('../../fixtures/usuarios.json');

    users.forEach(user => {
        it(`Registra novo usuário ${user.fullName}`, () => {
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();
            cy.get('input[formcontrolname="email"]').type(user.email);
            cy.get('input[formcontrolname="fullName"]').type(user.fullName);
            cy.get('input[formcontrolname="userName"]').type(user.userName);
            cy.get('input[formcontrolname="password"]').type(user.password);
            cy.contains('button', 'Register').click();
        })
    });

    // need to verify why the click its not working
    it('Registra novo usuário válido', () => {
        cy.registra('jujuba@yahoo.com', 'Jujuba Balinha', 'juju2022', '12345678');
        cy.contains('button', 'Register').click();
        cy.get('button').trigger('click');
        cy.get("button").click({ force: true });
        cy.contains('h4', 'Login').should('be.visible');
    })

    it('Testa botao registrar', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="email"]').type('testy@testy.com');
        cy.get('input[formcontrolname="fullName"]').type('12345678');
        cy.get('input[formcontrolname="userName"]').type('1345678user');
        cy.get('input[formcontrolname="password"]').type('12345678');
        cy.contains('button', 'Register').click();
        //cy.get('button').trigger('click');
        cy.get("button").click({ force: true });
    })

})