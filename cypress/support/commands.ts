/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    searchByQuery(query: string): Chainable<void>
  }
}

// -- This is a parent command -- Não precisa selecionar nenhum elemento
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('searchByQuery', (query: string) => {
  cy.visit('/')
  cy.get('input[name=q]').type(query).parent('form').submit()
})

// -- This is a child command -- É preciso selecionar o elemento par depois ter o comando
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })

// -- This is a dual command -- Pode ou não selecionar o elemento
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
