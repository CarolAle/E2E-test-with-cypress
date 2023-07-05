#Projeto usa Cucumber + Selenium + Page Objects
#language: pt

Funcionalidade: Realizar uma compra

Contexto: Acessar o site
	Dado que estou na página inicial 
	
	Cenario: Realizar compra de vestido casual
	Dado que escolho o produto Printed Dress 
	Quando adiciono o produto no carrinho
	E vou para a página de resumo do carrinho
	E verifico o carrinho de compras e prossigo
	E Preencho os campos email e senha com "testemystore1@mailinator.com" e "12345" com uma conta válida
	E vou para a página de carrinho e prossigo
	E verifico o endereço e prossigo
    E preencho os dados do cartão e prossigo
    Então confirmo que o pedido foi finalizado