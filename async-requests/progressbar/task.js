let xhr = new XMLHttpRequest();
let form = document.getElementById('form');
let progressValue = document.getElementById('progress');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(document.getElementById('form'));
    xhr.open('POST', 'http://localhost:3333/upload');
    xhr.send(formData);
})

xhr.upload.addEventListener('progress', (event) => {
    let loaded = event.loaded;
    let total = event.total;

    progressValue.value = loaded / total;
});