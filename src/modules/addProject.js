// toggle project form
const showProjectFormButton = document.querySelector('#showProjectFormBtn');
showProjectFormButton.addEventListener('click', toggleProjectForm);

const cancelProjectFormButton = document.querySelector('#cancelProjectFormBtn');
cancelProjectFormButton.addEventListener('click', toggleProjectForm);

function toggleProjectForm(event) {
    event.preventDefault();

    const projectForm = document.querySelector('.menu__form');
    const projectInput = document.querySelector('#projectInput');

    if (projectForm.classList.contains('hide')) {
        projectForm.classList.remove('hide');
        showProjectFormButton.classList.add('hide');
        projectInput.focus();
    } else {
        projectForm.classList.add('hide');
        showProjectFormButton.classList.remove('hide');
        projectInput.value = '';
    }
}

const addProjectButton = document.querySelector('#addProjectBtn');
addProjectButton.addEventListener('click', addProject);

function addProject() {
    toggleProjectForm(event);

}