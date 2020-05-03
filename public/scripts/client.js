/*var mainImg = document.querySelector('.info__img');
var thumbDesc = document.querySelectorAll('.info__thumb');

function handleImageClickVer2(elem) {
    var src2 = elem.getAttribute('src');
    mainImg.setAttribute('src', src2);
    thumbDesc.forEach(function(innerElem) {
        innerElem.classList.remove('info__thumb--active');
    });
    elem.classList.add('info__thumb--active');
}

function iterateThumbsver2(elem, index) {
    elem.addEventListener('click', function() {
        handleImageClickVer2(elem);
    });
}
thumbDesc.forEach(iterateThumbsver2);
handleImageClickVer2(thumbDesc[0]);*/

//SORT
var select = document.querySelector('.store__options');
select.addEventListener('change', function(ev) {
    var url = location.pathname;
    url = url + '?sort=' + select.value;
    console.log(select.value);
    location.href = url;
});

var url = location.pathname;

var button = document.querySelector('.search__btn');
button.addEventListener('click', function() {
    var input = document.querySelector('.search__box');
    var search = input.value;
    url = url + '?search=' + search;
    location.href = url;
})