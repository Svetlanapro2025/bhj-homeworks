setInterval(() => {
    let activeCases = Array.from(document.getElementsByClassName('rotator__case_active'));
    activeCases.forEach((element) => {        
        element.className = 'rotator__case';
        let nextElement = element.nextElementSibling;

        if(nextElement) {
            nextElement.className = 'rotator__case rotator__case_active';
        } else {
           element.parentElement.firstElementChild.className = 'rotator__case rotator__case_active';
        }        
    })
}, 1000);