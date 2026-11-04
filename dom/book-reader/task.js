let fontSizeButtons = document.querySelectorAll('.font-size');
let book = document.querySelector('.book');

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

