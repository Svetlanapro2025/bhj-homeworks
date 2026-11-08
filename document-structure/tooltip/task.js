let elementsWithTooltip = document.querySelectorAll('.has-tooltip');

elementsWithTooltip.forEach((element) => {
    element.insertAdjacentHTML('afterend', `<div class="tooltip">${element.getAttribute('title')}</div>`);
    element.removeAttribute('title');

    element.onclick = function(event) {
        event.preventDefault();
        let tooltip = element.nextElementSibling;
        tooltip.classList.toggle('tooltip_active');        
        let coordinatesElement = element.getBoundingClientRect();
        tooltip.style.top = coordinatesElement.bottom + 'px';
        tooltip.style.left = coordinatesElement.left + 'px';

        tooltips.forEach((currentTooltip) => {
            if(tooltip !== currentTooltip) {
                currentTooltip.classList.remove('tooltip_active');
            }
        })
    }
});

let tooltips = document.querySelectorAll('.tooltip');


повышенный уровень сложности 2
через  element.setAttribute() добавить data-position