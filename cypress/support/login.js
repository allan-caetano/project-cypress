import { PesquisaElements } from './../elements/PesquisaElements.cy';

Cypress.Commands.add('login', (name)=>{
    cy.get(PesquisaElements.insertName()).type(name)
})