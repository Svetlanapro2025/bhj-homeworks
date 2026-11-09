let form = document.querySelector('.tasks__control');
let tasksInput = document.querySelector('.tasks__input');
let taskList = document.querySelector('.tasks__list');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let taskInputValue = tasksInput.value;
    if(taskInputValue) {
        taskList.insertAdjacentHTML(
            'afterbegin',
            `<div class="task">
            <div class="task__title">${taskInputValue}</div>
            <a href="#" class="task__remove">&times;</a>
            </div>`
        );

        form.reset();

        let taskFirst = taskList.firstElementChild;
        let taskFirstLink = taskFirst.querySelector('.task__remove');
        taskFirstLink.onclick = function(e) {
            e.preventDefault();
            taskFirst.remove();
        }
    }
})