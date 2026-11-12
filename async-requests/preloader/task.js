let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:3333/slow-get-courses');
xhr.send();

let currency = document.querySelector('#items');
let animation = document.querySelector('.loader');

xhr.addEventListener('load', function() {
    let serverResponse = JSON.parse(xhr.response);
    let valute = serverResponse.response.Valute;

    for (let currencyKey in valute) {
        currency.insertAdjacentHTML(
            'afterbegin',
            `<div class="item">
            <div class="item__code">${valute[currencyKey].CharCode}</div>
            <div class="item__value">${valute[currencyKey].Value}</div>
            <div class="item__currency">руб.</div>
            </div>`
        )        
    }

    animation.classList.remove('loader_active');    
});
