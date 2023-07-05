const comprarProdutoE = require("../elements/ComprarProdutoElements")

class comprarProduto {
    acessarSite() {
        cy.visit("/")
    }

    buscarVestido() {
        cy.get(comprarProdutoE.menuwoman()).click() 
    }

    addCarrinho() {
        cy.get(comprarProdutoE.addcarrinho()).click()
    }

    resumo() {
        cy.get(comprarProdutoE.ircarrinho()).contains('u', 'View Cart').click()
    }
    checkprecoProduto() {
        cy.get(comprarProdutoE.preco()).should('contain', 'Rs. 500')
        cy.get(comprarProdutoE.ircarrinho2()).click()
        cy.get(comprarProdutoE.check()).contains('u', 'Register / Login').click()

    }

    login(email, password) {
        cy.get(comprarProdutoE.email()).type(email)
        cy.get(comprarProdutoE.password()).type(password)
        cy.get(comprarProdutoE.login()).contains('button', 'Login').click()
    }

    checkCarrinho() {
        cy.get(comprarProdutoE.cart()).click()
        cy.get(comprarProdutoE.checkout()).click()
    }

    checkEndereco() {
        cy.get(comprarProdutoE.endereco()).should('contain.text', 'av: Jerônimo Câmara')
        cy.get(comprarProdutoE.checkendereco()).click()
    }
    checkpagamento() {
        cy.get(comprarProdutoE.namecard()).type('test')
        cy.get(comprarProdutoE.numbercard()).type(12345)
        cy.get(comprarProdutoE.cvc()).type(123)
        cy.get(comprarProdutoE.expirm()).type(12)
        cy.get(comprarProdutoE.expiry()).type(2029)
        cy.get(comprarProdutoE.payorder()).click()
    }

    checkPedido() {
        cy.get(comprarProdutoE.checkmenssage()).should('contain.text', 'Order Placed!')
    }

}

module.exports = new comprarProduto();