//EVENTOS DEL CARRITO
function onLoad(params) {
    //CUANDO SE AGREGA AL CARRITO DESDE LA TIENDA
    var buttons = document.querySelectorAll('.product__cart');

    var cartBtn = document.querySelector('.search__notibtncar');

    var btnCarrito = document.querySelector('.search__btncar');

    var cartList = [];

    //cuando la pg se carga se actualiza el numero del carrito
    if (localStorage.getItem('cartList')) {
        cartList = JSON.parse(localStorage.getItem('cartList'));
        console.log(localStorage.getItem('cartList'));
    }

    cartBtn.innerText = cartList.length;

    //Pintar la lista del carrito
    function renderCart() {

        var total = 0;

        var cartContainer = document.querySelector('.search__carritoList');
        cartContainer.innerHTML = '';
        cartList.forEach(function(obj, index) {
            var newItem = document.createElement('div');

            newItem.classList.add('.search__carritoList')
            newItem.innerHTML = `
                <img class="search__cartImg" src="${obj.img}" />
                <p class="search__cartName">` + obj.name + `</p>
                <p class="search__cartNameG">` + obj.nameG + `</p>
                <small class="search__cartPrice">${ obj.price }</small>
                <button class="search__elim"> <i class="fas fa-trash-alt"></i> </button>
                 `;
            var btn = newItem.querySelector('.search__elim');
            btn.addEventListener('click', function() {
                cartList.splice(index, 1); //elimina el elemento en la lista (memoria)
                cartBtn.innerText = cartList.length; //actualiza el numero del carrito
                localStorage.setItem('cartList', JSON.stringify(cartList)); //actualiza la lista en el localStorage (en HD)
                renderCart(); //vuelve a renderizar la lista

            });
            cartContainer.appendChild(newItem);
            total += parseInt(obj.price);
        });
        var totalElem = document.querySelector('.search__total');
        totalElem.innerText = total;
    }

    //Cuando el usuario le haga click en el carrito, aparece el carrito
    btnCarrito.addEventListener('click', renderCart);
    //renderCart();


    //Agregar even listener para poner nuevos productos en el carrito
    buttons.forEach(function(elem) {
        //console.log(elem);
        elem.addEventListener('click', function() {
            //var name = elem.parentElement.querySelector('.product__title').innerText;
            var img = elem.getAttribute('data-img');
            var name = elem.getAttribute('data-name');
            var price = elem.getAttribute('data-price');
            var nameG = elem.getAttribute('data-nameG');
            var id = elem.getAttribute('data-id');

            cartList.push({
                img: img,
                name: name,
                price: parseInt(price),
                nameG: nameG,
                id: id,
            });
            cartBtn.innerText = cartList.length;

            localStorage.setItem('cartList', JSON.stringify(cartList));

            renderCart();
        });
    });
}

window.addEventListener('load', onLoad);