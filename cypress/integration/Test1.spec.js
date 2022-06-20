/// <reference types="cypress" />
context('Testy Input BMI', () => {
    describe('Test wprowadzania poprawnych danych', () => {
        it('Test 1', () => {
            cy.visit('https://fazi777.github.io/BMI-Host/');
            cy.url().should('contain', 'BMI');
            cy.get('#podajWage').type('80');
            cy.get('#podajWzrost').type('180')
            cy.get('#calculate').click()
            cy.get('#wynikBMI').should('contain','BMI')
        })
    })
    describe('Test wprowadzania złej wagi', () => {
        it('Test 2', () => {
            cy.visit('https://fazi777.github.io/BMI-Host/');
            cy.url().should('contain', 'BMI');
            cy.get('#podajWage').type('AA');
            cy.get('#calculate').click()
            cy.get('#statusWagi').should('contain','Błędna')
        })
    })
    describe('Test wprowadzania złego wzrostu', () => {
        it('Test 3', () => {
            cy.visit('https://fazi777.github.io/BMI-Host/');
            cy.url().should('contain', 'BMI');
            cy.get('#podajWzrost').type('AA');
            cy.get('#calculate').click()
            cy.get('#statusWzrostu').should('contain','Błędny')
        })
    })
    describe('Test Poprawności wyliczeń', () => {
        it('Test 4', () => {
            cy.visit('https://fazi777.github.io/BMI-Host/');
            cy.url().should('contain', 'BMI');
            cy.get('#podajWage').type('80');
            cy.get('#podajWzrost').type('180')
            cy.get('#calculate').click()
            cy.get('#wynikBMI').should('contain','24.69')
        })
    })
    describe('Test Zapisu pozycji Historii Pomiarów', () => {
        it('Test 5', () => {
            cy.visit('https://fazi777.github.io/BMI-Host/');
            cy.url().should('contain', 'BMI');
            cy.get('#podajWage').type('80');
            cy.get('#podajWzrost').type('180')
            cy.get('#calculate').click()
            cy.get('li').should('be.visible')
        })
    })
    describe('Test działania przycisku czyszczenia', () => {
        it('Test 6', () => {
            cy.visit('https://fazi777.github.io/BMI-Host/');
            cy.url().should('contain', 'BMI');
            cy.get('#podajWage').type('80');
            cy.get('#podajWzrost').type('180')
            cy.get('#calculate').click()
            cy.get('#clear').click()
            cy.get('#wynikBMI').should('not.be.visible')
        })
    })
    
})