import {PesquisaElements} from "../elements/PesquisaElements.cy";

class Pesquisar{

    // elements = {
    //     pesquisarProduto: () => cy.get('.gLFyf'),
    //   };

      acessarSite() {
        cy.wait(1000)
        cy.visit('http://the-internet.herokuapp.com/'); 
    }

    clicarForm() {
        PesquisaElements.clicarEmForm().click();
        cy.wait(800)
    }

    insertName(){
        PesquisaElements.insertName().type("Allan")
    }

    inserPass(){
        PesquisaElements.insertPass().type("123456")
    }

    clicarLogin(){
        PesquisaElements.clicarLogin().click();
    }

    verAlert(){
        PesquisaElements.verMensagem().should('be.visible')
    }
}

export default new Pesquisar();