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
    describe('Test ładowania wagi z zapisu historii', () => {
        it('Test 7', () => {
            cy.visit('https://fazi777.github.io/BMI-Host/');
            cy.url().should('contain', 'BMI');
            cy.get('#podajWage').type('80');
            cy.get('#podajWzrost').type('180')
            cy.get('#calculate').click();
            cy.get('#podajWage').type('60');
            cy.get('#podajWzrost').type('120')
            cy.get('#calculate').click()
            cy.get('#zapisyhistorii > :nth-child(1)').click()
            cy.get('#statusWagi').should('contain','80')
            
        })
    })
    describe('Test ładowania wzrostu z zapisu historii', () => {
        it('Test 8', () => {
            cy.visit('https://fazi777.github.io/BMI-Host/');
            cy.url().should('contain', 'BMI');
            cy.get('#podajWage').type('80');
            cy.get('#podajWzrost').type('180')
            cy.get('#calculate').click();
            cy.get('#podajWage').type('60');
            cy.get('#podajWzrost').type('120')
            cy.get('#calculate').click()
            cy.get('#zapisyhistorii > :nth-child(1)').click()
            cy.get('#statusWzrostu').should('contain','180')
            
        })
    })
    describe('Test wskazania wzrostu BMI', () => {
        it('Test 9', () => {
            cy.visit('https://fazi777.github.io/BMI-Host/');
            cy.url().should('contain', 'BMI');
            cy.get('#podajWage').type('80');
            cy.get('#podajWzrost').type('180')
            cy.get('#calculate').click();
            cy.get('#podajWage').type('60');
            cy.get('#podajWzrost').type('120')
            cy.get('#calculate').click()
            cy.get('#porownanieBMI').should('contain','wzrosło')
            
        })
    })
    describe('Test wskazania spadku BMI', () => {
        it('Test 10', () => {
            cy.visit('https://fazi777.github.io/BMI-Host/');
            cy.url().should('contain', 'BMI');
            cy.get('#podajWage').type('80');
            cy.get('#podajWzrost').type('180')
            cy.get('#calculate').click();
            cy.get('#podajWage').type('60');
            cy.get('#podajWzrost').type('180')
            cy.get('#calculate').click()
            cy.get('#porownanieBMI').should('contain','Spadło')
            
        })
    })
})