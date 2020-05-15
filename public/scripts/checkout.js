function onLoad() {

    var form = document.querySelector('.check__options');
    console.log(form);
    form.addEventListener('submit', function() {
        var input = document.querySelector('.check__list');
        input.value = localStorage.getItem('cartList');
        localStorage.removeItem('cartList');
    });

}
window.addEventListener('load', onLoad);