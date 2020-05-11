function onLoad() {

    var form = document.querySelector('.check__options');
    form.addEventListener('submit', function() {
        var input = document.querySelector('.check__list');
        input.value = localStorage.getItem('cartList');
        alert('hola');
        //localStorage.removeItem('cartList');
    });

}
window.addEventListener('load', onLoad);