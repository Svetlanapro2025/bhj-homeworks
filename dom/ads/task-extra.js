let activeCases = document.querySelectorAll('.rotator__case_active');

activeCases.forEach((activeCase) => {
    function rotate(currentCase) {
        let currentCaseSpeed = currentCase.dataset.speed;
        let currentCaseColor = currentCase.dataset.color;
        currentCase.style.color = currentCaseColor;

        setTimeout(() => {                  
            currentCase.className = 'rotator__case';
            let nextCase = currentCase.nextElementSibling;

            if(nextCase) {
                nextCase.className = 'rotator__case rotator__case_active';
                rotate(nextCase);
            } else {
                currentCase.parentElement.firstElementChild.className = 'rotator__case rotator__case_active';
                rotate(currentCase.parentElement.firstElementChild);
            }    
        }, currentCaseSpeed);
    }
    
    rotate(activeCase);
})