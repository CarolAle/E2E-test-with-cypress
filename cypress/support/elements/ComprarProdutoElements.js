class comprarProdutoElements {

    menuwoman = () => { return 'div.col-sm-4:nth-child(3) div.product-image-wrapper div.choose'}

    addcarrinho = () => { return 'button.btn.btn-default.cart:nth-child(5)'}
    ircarrinho = () => { return 'a[href="/view_cart"]'}

    //page cart 
    preco = () => { return '.cart_total_price'}
    ircarrinho2 = () => { return '.check_out'}
    check = () => { return 'a[href="/login"'}

    //page login
    email = () => { return '[data-qa="login-email"]'}
    password = () => { return '[name="password"]'}
    login = () => { return 'button'}
    
    //page checkout
    endereco = () => { return 'ul.address.item.box > li.address_address2:nth-child(4)'}
    cart = () => { return 'ul.nav.navbar-nav > li:nth-child(3)'}
    checkout = () => { return '.check_out'}
    checkendereco = () => { return 'a[href="/payment"'}

    //page pagamento
    namecard = () => { return '[name="name_on_card"]'}
    numbercard = () => { return '[name="card_number"]'}
    cvc = () => { return '[name="cvc"]'}
    expirm = () => { return '[name="expiry_month"]'}
    expiry = () => { return '[name="expiry_year"]'}
    payorder = () => { return '#submit'}

    //page done
    checkmenssage = () => { return '.title.text-center'}

    }

module.exports = new comprarProdutoElements();
