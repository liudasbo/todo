// toggle task form
const showTaskFormButton = document.querySelector('#showTaskFromBtn');
showTaskFormButton.addEventListener('click', toggleTaskForm);

const cancelTaskFormBtn = document.querySelector('#cancelTaskFormBtn');
cancelTaskFormBtn.addEventListener('click', toggleTaskForm);

function toggleTaskForm(event) {
    event.preventDefault()

    const taskForm = document.querySelector('.content__form');
    const taskTextInput = document.querySelector('#taskTextInput');
    const taskDateInput = document.querySelector('#taskDateInput');

    if (taskForm.classList.contains('hide')) {
        taskForm.classList.remove('hide');
        showTaskFormButton.classList.add('hide');
        taskTextInput.focus();
    } else {
        taskForm.classList.add('hide');
        showTaskFormButton.classList.remove('hide');
        taskTextInput.value = '';
        taskDateInput.value = '';
    }
}

// add task
const addTaskButton = document.querySelector('#addTaskBtn');
addTaskButton.addEventListener('click', addTask);

function addTask() {
    toggleTaskForm(event);
}

