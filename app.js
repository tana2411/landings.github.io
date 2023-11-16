var navbar_toggle = document.getElementById('navbar')
var menu_open = document.getElementById('menu')
var overlay = document.getElementById('overlay')
navbar_toggle.onclick = function () {

    menu_open.classList.toggle('open');

    overlay.classList.toggle('on')
}
document.onclick = function (event) {
    if (event.target.id !== 'navbar' && event.target.id !== 'menu') {

        menu_open.classList.remove('open');
        overlay.classList.remove('on');
    }
}