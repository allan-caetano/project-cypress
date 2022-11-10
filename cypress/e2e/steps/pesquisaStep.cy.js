import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import PesquisaPage from "../../pages/pesquisaPage.cy";

Given("Acesso ao site", () => {
    PesquisaPage.acessarSite();
})

When("faço a autenticação {string}", (user) => {
    PesquisaPage.clicarForm();
    PesquisaPage.insertName(user);
    PesquisaPage.inserPass();
    PesquisaPage.clicarLogin();
})

Then("vejo a mensagem de alerta", () => {
    PesquisaPage.verAlert();
})