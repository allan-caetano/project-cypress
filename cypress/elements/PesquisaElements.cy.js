function clicarEmForm() {
    return cy.get(':nth-child(21) > a')
}

function insertName() {
    return cy.get('input[name="username"]')
}

const insertPass = () => {
    return cy.get('input[id="password"')
}

const clicarLogin = () => {
    return cy.get('button[type="submit"]')
}

const verMensagem = () =>{
    cy.screenshot();
    return cy.get('div[data-alert]')
}

export const PesquisaElements = {
    clicarEmForm,
    insertName,
    insertPass,
    clicarLogin,
    verMensagem
}


