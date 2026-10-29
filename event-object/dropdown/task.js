let dropdown = document.querySelectorAll('.dropdown');   // нахожу все элементы на странице

dropdown.forEach((dropdownElement) => {
    let btn = dropdownElement.querySelector('.dropdown__value');  // нахожу кнопку
    let list = dropdownElement.querySelector('.dropdown__list');  // нахожу выпадающий список
    let elementsCollection = dropdownElement.getElementsByClassName('dropdown__item');   //нахожу Э выпадающего списка, получаю коллекцию
    let arrayElementsCollection = Array.from(elementsCollection);   // превращаю коллекцию в массив

    // вешаю на кнопку клик. закрываю/открываю список
    btn.onclick = function() {
        if(list.className.includes('dropdown__list_active')) {
            list.className = 'dropdown__list';
        } else {
            list.className = 'dropdown__list dropdown__list_active';
        }
    };

    // вешаю клики на Э выпадающего списка
    arrayElementsCollection.forEach((element) => {
        element.onclick = function(event) {
            list.className = 'dropdown__list';
            btn.textContent = element.textContent;
            event.preventDefault();
        };
    });
});