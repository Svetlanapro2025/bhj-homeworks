let popup = document.querySelector('.modal');
let closeButton = document.querySelector('.modal__close');

function getCookie(nameCookie) {
    let parse = document.cookie.split('; ');   // возвращаю массив
    let cookie = parse.find(element => element.startsWith(nameCookie + '='));   //нахожу из всех куки нужную и возвращаю ключ/значение строкой

    if(cookie) {
        return cookie.substring(nameCookie.length + 1);
    } else {
        return null;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if(!getCookie('popupClose')) {
        popup.classList.add('modal_active');
    }    
})

closeButton.onclick = function() {
    popup.classList.remove('modal_active');
    document.cookie = 'popupClose=true';
}

