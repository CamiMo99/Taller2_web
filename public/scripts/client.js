//SORT
//var select = document.querySelector('select');
//  select.addEventListener('change', function(ev) {
//    var url = location.pathname;
//  url = url + '?price'
//  console.log(select.value);
//});

var mainImg = document.querySelector('.info__img');
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
handleImageClickVer2(thumbDesc[0]);