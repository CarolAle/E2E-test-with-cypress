import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";

//import ComprarProduto from '../../support/pageobjects/ComprarProduto'
const comprarProdutoObj = require("../../support/pageobjects/ComprarProduto");

        Given("que estou na página inicial", () => {
            //cy.visit("/");
            comprarProdutoObj.acessarSite();
        });

        Given("que escolho o produto Printed Dress" , () => {
          comprarProdutoObj.buscarVestido();
        })

When("adiciono o produto no carrinho", () => {
  comprarProdutoObj.addCarrinho();
})

And("vou para a página de resumo do carrinho", () => {
  comprarProdutoObj.resumo();
})

And("verifico o carrinho de compras e prossigo", () => {
  comprarProdutoObj.checkprecoProduto();
})

And("Preencho os campos email e senha com {string} e {string} com uma conta válida", (email, password) => {
  comprarProdutoObj.login(email, password);  
})

And("vou para a página de carrinho e prossigo", () => {
  comprarProdutoObj.checkCarrinho();And
})

And("verifico o endereço e prossigo", () => {
  comprarProdutoObj.checkEndereco();
})

And("verifico os detalhes de envio e prossigo", () => {
  comprarProdutoObj.checkEnvio();
})

And("preencho os dados do cartão e prossigo", () => {
  comprarProdutoObj.checkpagamento();
})

Then("confirmo que o pedido foi finalizado", () => {
  comprarProdutoObj.checkPedido();
})