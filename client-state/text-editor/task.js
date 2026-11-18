let textarea = document.getElementById('editor');
let button = document.querySelector('.btn');

textarea.addEventListener('input', () => {
    localStorage.setItem('editor', textarea.value);   // сохранила значение textarea в localStorage при его изменении на странице
})

document.addEventListener('DOMContentLoaded', () => {
    textarea.value = localStorage.getItem('editor');   // получаю значение textarea    
})

button.onclick = function() {
    localStorage.removeItem('editor');
    textarea.value = '';
}