//EVENTOS DEL CARRITO

//CUANDO SE AGREGA AL CARRITO DESDE LA TIENDA
var buttons = document.querySelectorAll('.product__cart');

var cartBtn = document.querySelector('.search__notibtncar');

var cartList = [];

if (localStorage.getItem('cartList')) {
    cartList = JSON.parse(localStorage.getItem('cartList'));
    console.log(localStorage.getItem('cartList'));
}

cartBtn.innerText = cartList.length;

buttons.forEach(function(elem) {
    //console.log(elem);
    elem.addEventListener('click', function() {
        //var name = elem.parentElement.querySelector('.product__title').innerText;
        var img = elem.getAttribute('data-img');
        var name = elem.getAttribute('data-name');
        var price = elem.getAttribute('data-name');
        var company = elem.getAttribute('data-name');
        var id = elem.getAttribute('data-id');

        cartList.push({
            img: img,
            name: name,
            price: price,
            company: company,
            id: id,
        });
        cartBtn.innerText = cartList.length;

        localStorage.setItem('cartList', JSON.stringify(cartList));
    });
});