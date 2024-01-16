import { storage } from "./localStorage";

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
    const projectInputValue = document.querySelector('#projectInput').value;
    
    if (isProjectNameValid(projectInputValue)) {

        const newProject = projectInputValue;

        storage.addProject(newProject);
    } 

    toggleProjectForm(event);
}

const isProjectNameValid = (projectName) => {
    if (projectName === '') {
        alert("Project name can't be empty")
        return false;
    } else if (storage.getProjectsNames().includes(projectName)) {
        alert(`Project ${projectName} already exists`)
        return false;
    } else if (projectName.length > 30) {
        alert("Project name can't be greater than 30 characters")
        return false;
    }

    return true;
}