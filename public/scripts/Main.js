var mainnav = document.querySelector('.Mainnav');
var hambtn = document.querySelector('.ham__BtnHamburger');

var handleHamClick = function(event) {
    console.log(event, 'otra cosa');
    mainnav.classList.toggle('Mainnav--mobile');
}
hambtn.addEventListener('click', handleHamClick);

function handleWindowResize(event) {
    if (window.innerWidth > 400) {
        mainnav.classList.remove('mainnav--mobile');
    }
}
window.addEventListener('resize', handleWindowResize);


//GALLERY
var main = document.querySelector('.gallery__main');
var thumbs = document.querySelectorAll('.gallery__thumb');

function handleImageClick(elem) {
    var src = elem.getAttribute('src');
    main.setAttribute('src', src);
    thumbs.forEach(function(innerElem) {
        innerElem.classList.remove('gallery__thumb--active');
    });
    elem.classList.add('gallery__thumb--active');
}

function iterateThumbs(elem, index) {
    elem.addEventListener('click', function() {
        handleImageClick(elem);
    });
}
thumbs.forEach(iterateThumbs);
handleImageClick(thumbs[0]);

//CHOOSE
var chooMain = document.querySelector('.choose__main');
var option = document.querySelectorAll('.choose__option');

function handleOptionClick(elem) {
    var src = elem.getAttribute('data-src');
    console.log(src);
    chooMain.setAttribute('src', src);
    option.forEach(function(innerElem) {
        innerElem.classList.remove('choose__option--active');
    });
    elem.classList.add('choose__option--active');
}

function iterateOps(elem) {
    elem.addEventListener('click', function() {
        handleOptionClick(elem);
    });
}
option.forEach(iterateOps);
handleOptionClick(option[0]);