import * as data from "../helpers/default_data.json"
import * as main_page from "../locators/main_page.json"

describe('Проверка авторизации', function () {

    afterEach('Конец теста', function () {
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
       });

    it('Верный пароль и верный логин', function () {
         cy.visit('/');
         cy.get(main_page.email).type(data.login);
         cy.get(main_page.password).type(data.password);
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#messageHeader').should('be.visible');

        }) 
         it('Восстановление пароля', function () {
            cy.visit('/');
            cy.get('#forgotEmailButton').click();
            cy.get('#mailForgot').type(data.login);
            cy.get('#restoreEmailButton').click();
            cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
           
       })
       
    it('Неверный пароль и верный логин', function () {
        cy.visit('/');
        cy.get(main_page.email).type(data.login);
        cy.get(main_page.password).type('iLoveqastudio');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#messageHeader').should('be.visible');
        
       })
       it('Верный пароль и неверный логин', function () {
        cy.visit('/');
        cy.get(main_page.email).type('german@dolnikovv.ru');
        cy.get(main_page.password).type(data.password);
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#messageHeader').should('be.visible');
        
       })   
       it('Негативный кейс валидации - без @', function () {
        cy.visit('/');
        cy.get(main_page.email).type('germandolnikov.ru');
        cy.get(main_page.password).type(data.password);
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#messageHeader').should('be.visible');
        
       })   
       it('Верный пароль и верный логин', function () {
        cy.visit('/');
        cy.get(main_page.email).type('GerMan@Dolnikov.ru');
        cy.get(main_page.password).type(data.password);
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#messageHeader').should('be.visible');

       }) 

    
})
       