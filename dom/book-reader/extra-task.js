let fontSizeButtons = document.querySelectorAll('.font-size');
let book = document.querySelector('.book');
let colorContainer = document.querySelector('.book__control_color');
let colorButtons = colorContainer.querySelectorAll('.color');
let backgroundContainer = document.querySelector('.book__control_background');
let backgroundButtons = backgroundContainer.querySelectorAll('.color');

// Размер шрифта
fontSizeButtons.forEach((button) => {
    button.onclick = function(event) {
        event.preventDefault();
        let activeButton = document.querySelector('.font-size_active');

        if(!button.className.includes('font-size_active')) {
            button.classList.add('font-size_active');

            if(activeButton) {
                activeButton.classList.remove('font-size_active');
            }            
        }

        if(button.classList.contains('font-size_small')) {
            book.classList.add('book_fs-small');
            book.classList.remove('book_fs-big');
        }

        if(button.classList.contains('font-size_big')) {
            book.classList.add('book_fs-big');
            book.classList.remove('book_fs-small');
        }

        if(!button.classList.contains('font-size_big') && !button.classList.contains('font-size_small')) {
            book.classList.remove('book_fs-big');
            book.classList.remove('book_fs-small');
        }
    };
})


// Цвет
colorButtons.forEach((button) => {
    button.onclick = function(event) {
        console.log('Цвет текста');
        event.preventDefault();
        let activeButton = colorContainer.querySelector('.color_active');

        if(!button.className.includes('color_active')) {
            button.classList.add('color_active');

            if(activeButton) {
                activeButton.classList.remove('color_active');
            }            
        }

        if(button.classList.contains('text_color_black')) {
            book.classList.add('book_color-black');
            book.classList.remove('book_color-gray', 'book_color-whitesmoke');
        }

        if(button.classList.contains('text_color_gray')) {
            book.classList.add('book_color-gray');
            book.classList.remove('book_color-black', 'book_color-whitesmoke');
        }

        if(button.classList.contains('text_color_whitesmoke')) {
            book.classList.add('book_color-whitesmoke');
            book.classList.remove('book_color-black', 'book_color-gray');
        }
    };
})


// Фон
backgroundButtons.forEach((button) => {
    button.onclick = function(event) {
        console.log('Фон');
        event.preventDefault();
        let activeButton = backgroundContainer.querySelector('.color_active');

        if(!button.className.includes('color_active')) {
            button.classList.add('color_active');

            if(activeButton) {
                activeButton.classList.remove('color_active');
            }            
        }

        if(button.classList.contains('bg_color_black')) {
            book.classList.add('book_bg-black');
            book.classList.remove('book_bg-gray', 'book_bg-white');
        }

        if(button.classList.contains('bg_color_gray')) {
            book.classList.add('book_bg-gray');
            book.classList.remove('book_bg-black', 'book_bg-white');
        }

        if(button.classList.contains('bg_color_white')) {
            book.classList.add('book_bg-white');
            book.classList.remove('book_bg-black', 'book_bg-gray');
        }
    };
})



