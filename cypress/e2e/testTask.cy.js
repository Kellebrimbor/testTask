import data from './../fixtures/data.json'
// Данные необходимые для теста заполняем в json там же мы можем указать количество тестов необходимых для запуска не редактируя код
describe('template spec', () => {
    data.forEach(data => {
        it(data.name, () => {
            cy.visit('https://changenow.io')
            cy.get('#amount-field').type('{selectall}{backspace}' + data.sum)
            cy.get('#amount-field').should('have.value', data.sum)
            cy.get('.new-stepper-button').click()
            cy.get('.exchange-calculator--fields-section__amount > .combobox > .combobox--field').click()
            cy.get('.combobox__items-list > :nth-child(3)').click()
            cy.get('#recipientWallet').type(data.wallet)
            cy.get('.now-button').click()
        });
    });
});