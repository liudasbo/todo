import { Storage } from "./storage";

// project todo list: 
// add project filters to Today and This week

const showProjectFormBtn = document.querySelector('#showProjectFormBtn');
showProjectFormBtn.addEventListener('click', toggleProjectForm);

const cancelProjectFormBtn = document.querySelector('#cancelProjectFormBtn');
cancelProjectFormBtn.addEventListener('click', toggleProjectForm);

const addProjectBtn = document.querySelector('#addProjectBtn');
addProjectBtn.addEventListener('click', addProject);

const projectInput = document.querySelector('#projectInput');

const showTaskFromBtn = document.querySelector('#showTaskFromBtn');
showTaskFromBtn.addEventListener('click', toggleTaskForm);

const cancelTaskFormBtn = document.querySelector('#cancelTaskFormBtn');
cancelTaskFormBtn.addEventListener('click', toggleTaskForm);

const taskTextInput = document.querySelector('#taskTextInput');
const taskDateInput = document.querySelector('#taskDateInput');

const addTaskBtn = document.querySelector('#addTaskBtn');
addTaskBtn.addEventListener('click', addTask);  

let radioButtons = document.querySelectorAll('.radioButton');

// toggle project form
function toggleProjectForm(event) {
    event.preventDefault();

    const projectForm = document.querySelector('.menu__form');
    
    if (projectForm.classList.contains('hide')) {
        projectForm.classList.remove('hide');
        showProjectFormBtn.classList.add('hide');
        projectInput.focus();
    } else {
        projectForm.classList.add('hide');
        showProjectFormBtn.classList.remove('hide');
        projectInput.value = '';
    }
}

// add project
function addProject() {

    if (projectNameValidation(projectInput.value)) {
        Storage.addNewProject(projectInput.value);
    }

    loadProjectList();
    toggleProjectForm(event);
}

function projectNameValidation(projectName) {
    const regex = /^([\w \:\-\.\,\(\)\/ \-\[\]]{1,125})$/;
    const projectsNames = Storage.getProjectsNames();

    if (projectName.length < 1) {
        alert (`Project name can't be empty`)
        return false;
    } else if (!(regex.test(projectName))) {
        alert("Project name can't have special symbols");
        return false;
    } else if ((projectsNames.find((name) => name === projectName))) {
        alert(`Project ${projectName} already exists`);
        return false;
    } else if (projectName.length > 36) {
        alert(`Project name can't be longer than 35 symbols`)
        return false;
    }

    return true;
} 

// choose project
let menuProjectButtons = document.querySelectorAll('.menu ul li');
let activeProjectButton = document.querySelector('.menu ul .active');

// load project list
export function loadProjectList() {
    let projectsNames = Storage.getProjectsNames();
    const projectList = document.querySelector('.menu__user-projects ul');
    
    // Filter default projects
    projectsNames = projectsNames.filter(name => name !== "All tasks" && name !== "Today" && name !== "This week");
    
    projectList.innerHTML = ``;

    projectsNames.forEach((name) => {
        projectList.innerHTML += `
        <li>
            <span class="material-symbols-outlined">inventory_2</span>
            <p>${name}</p>
            <span class="material-symbols-outlined deleteProjectBtn">delete</span>
        </li>
        `
    })

    menuProjectButtons = document.querySelectorAll('.menu ul li');
    menuProjectButtons.forEach((button) => {
        button.addEventListener('click', () => {         
            menuProjectButtons.forEach((button) => {
                button.classList.remove('active')
            })
    
            button.classList.add('active');

            activeProjectButton = document.querySelector('.menu ul .active');
            loadTodoList();
        });
    })

    let deleteProjectButtons = document.querySelectorAll('.deleteProjectBtn');
    deleteProjectButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const projectName = button.parentNode.querySelector('p').textContent;
            Storage.deleteProject(projectName);
        })
    })
}


// load todoList
export function loadTodoList() {
    let projectName = 'All tasks'; // Deffault project

    if (activeProjectButton) {
        const projectNameElement = activeProjectButton.querySelector('p');
        projectName = projectNameElement ? projectNameElement.textContent : projectName;
    } else if (!activeProjectButton) {
        menuProjectButtons[0].classList.add('active')
    }

    const taskListContainer = document.querySelector('.content__task-list');
    const taskListHeading = taskListContainer.querySelector('h2');
    const taskList = taskListContainer.querySelector('ul');

    taskListHeading.textContent = projectName;
    
    let getProjectTasks = (projectName) => {
        const data = Storage.loadFromLocalStorage();
        const project = data.find((project) => project.name === projectName);
        return project ? project.tasks : null;
    }

    let tasks = getProjectTasks(projectName);

    taskList.innerHTML = '';
    if (tasks.length) {
        tasks.forEach((task) => {
            taskList.innerHTML += `
            <li>
                <div class="left__task-side">
                    <span class="material-symbols-outlined radioButton">
                        ${task.done ? 'radio_button_checked' : 'radio_button_unchecked'}
                    </span>
                    <p class="task-name editTaskButton"
                    ${task.done ? 'style="text-decoration: line-through;"' : 'style="text-decoration: none;"'}
                    >${task.name}</p>
                    <p class="task-project-name">(${task.projectName})</p>
                </div>
                <div class="right__task-side">
                    <p class="task-date editTaskDateBtn">${task.dueDate === '' ? 'No date' : task.dueDate}</p>
                    <span class="material-symbols-outlined deleteTaskButton">
                        delete
                    </span>
                </div>
            </li>
            `;
        })
    } else {
        taskList.innerHTML = '<p>No tasks</p>';
    }

    if (projectName === 'Today' || projectName === 'This week') {
        showTaskFromBtn.classList.add('hide');
    } else {
        showTaskFromBtn.classList.remove('hide');
    }

    Storage.filterProjectsTasks();

    radioButtons = document.querySelectorAll('.radioButton');
    radioButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const taskName = button.parentNode.querySelector('.task-name').textContent;
            let taskProject = button.parentNode.querySelector('.task-project-name').textContent

            // remove brackets from taskProject
            taskProject = taskProject.replace(/[()]/g, '');

            const data = Storage.loadObjectsFromLS();
            const allTasks = [].concat(...data.map((project) => project.tasks));
            
            const getTasks = allTasks.filter((task) => task.name === taskName && task.projectName === taskProject);
            getTasks.forEach((task) => {
                task.toggleDone();
            });

            Storage.saveToLocalStorage(data);
            loadTodoList();
        })
    })

    const deleteTaskButtons = document.querySelectorAll('.deleteTaskButton');
    deleteTaskButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const taskName = button.parentElement.parentElement.querySelector('.left__task-side').querySelector('.task-name').textContent;

            let taskProject = button.parentElement.parentElement.querySelector('.left__task-side').querySelector('.task-project-name').textContent;
            taskProject = taskProject.replace(/[()]/g, '')

            const data = Storage.loadObjectsFromLS();
            let allTasks = [].concat(...data.map((project) => project.tasks));
            
            const newData = data.map((project) => {
                const newProject = { ...project }; 
                newProject.tasks = project.tasks.filter((task) => !(task.name === taskName && task.projectName === taskProject));
                return newProject;
            });

            Storage.saveToLocalStorage(newData);
            loadTodoList();
        })
    })

    let editTaskButtons = document.querySelectorAll('.editTaskButton');
    editTaskButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const taskName = button.parentNode.querySelector('.task-name').textContent;
            let taskProject = button.parentNode.querySelector('.task-project-name').textContent;
            taskProject = taskProject.replace(/[()]/g, '')

            const inputElement = document.createElement("input");
            inputElement.type = "text";
            inputElement.value = taskName;
            inputElement.classList.add('editTaskButton');

            button.replaceWith(inputElement);
            inputElement.focus();

            inputElement.addEventListener('blur', function() {
                const newTaskName = inputElement.value;

                const data = Storage.loadObjectsFromLS();
                const allTasks = [].concat(...data.map((project) => project.tasks));

                const getTasks = allTasks.forEach((task) => {
                    if (task.name === taskName && task.projectName === taskProject) {
                        task.setName(newTaskName);
                    }
                })

                Storage.saveToLocalStorage(data);

                const newParagraph = document.createElement("p");
                newParagraph.textContent = newTaskName;
                newParagraph.classList.add('task-name');
                newParagraph.classList.add('editTaskButton');
                inputElement.replaceWith(newParagraph);

                loadTodoList();
            })
        })
    })

    let editTaskDateButtons = document.querySelectorAll('.editTaskDateBtn');
    editTaskDateButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const taskName = button.parentNode.parentNode.querySelector('.left__task-side').querySelector('.task-name').textContent
            let taskProject = button.parentNode.parentNode.querySelector('.left__task-side').querySelector('.task-project-name').textContent
            taskProject = taskProject.replace(/[()]/g, '')

            const taskDate = button.textContent;

            const inputElement = document.createElement("input");
            inputElement.type = "date";
            inputElement.value = taskDate;
            
            button.replaceWith(inputElement);
            inputElement.focus();

            inputElement.addEventListener('blur', function() {
                const newDate = inputElement.value;

                const data = Storage.loadObjectsFromLS();
                const allTasks = [].concat(...data.map((project) => project.tasks));

                const getTasks = allTasks.forEach((task) => {
                    if (task.name === taskName && task.projectName === taskProject) {
                        task.setDate(newDate);
                    }
                })

                Storage.saveToLocalStorage(data);

                const newParagraph = document.createElement("p");
                newParagraph.textContent = newDate;
                newParagraph.classList.add('task-date');
                newParagraph.classList.add('editTaskDateBtn');

                inputElement.replaceWith(newParagraph);
                loadTodoList();
            })
        })
    })

}

const taskForm = document.querySelector('.content__form');

// add task
function toggleTaskForm() {
    event.preventDefault();

    if (taskForm.classList.contains('hide')) {
        taskForm.classList.remove('hide');
        showTaskFromBtn.classList.add('hide')
        taskTextInput.focus();
    } else {
        taskForm.classList.add('hide');
        showTaskFromBtn.classList.remove('hide')
        taskTextInput.value = '';
        taskDateInput.value = '';
    }
}


function addTask() {
    const projectName = activeProjectButton.querySelector('p').textContent;
    
    if (taskNameValidation(taskTextInput.value, projectName)) {
        let data = Storage.loadObjectsFromLS();
        let selectedProject = data.find((project) => project.name === projectName);
        selectedProject.addNewTask(taskTextInput.value, taskDateInput.value, projectName);
        Storage.saveToLocalStorage(data);
    }
    
    loadTodoList();
    toggleTaskForm();
}

function taskNameValidation(taskName, taskProject) {
    const regex = /^([\w \:\-\.\,\(\)\/ \-\[\]]{1,125})$/;
    const data = Storage.loadObjectsFromLS();
    const allTasks = [].concat(...data.map((project) => project.tasks));

    if (taskName.length < 1) {
        alert (`Task name can't be empty`);
        return false;
    } else if (!(regex.test(taskName))) {
        alert("Task name can't have special symbols");
        return false;
    } else if (taskName.length > 40) {
        alert(`Task name can't be longer than 40 symbols`)
        return false;
    } else if ((allTasks.some((task) => task.name === taskName && task.projectName === taskProject))) {
        alert(`Task ${taskName} already exists in ${taskProject} project`)
        return false;
    }

    return true;
}

// toggle theme
const themeButton = document.querySelector('#themeBtn');
themeButton.addEventListener('click', toggleTheme);

function toggleTheme() {
    const root = document.documentElement;
    const theme = localStorage.getItem('theme');

    if (theme === 'dark_mode') {
        root.classList.remove('dark');
        themeButton.textContent = 'dark_mode';
        Storage.saveThemeToLS('light_mode')
    } else {
        root.classList.add('dark');
        themeButton.textContent = 'light_mode';
        Storage.saveThemeToLS('dark_mode')
    } 
}

export function loadTheme() {
    const root = document.documentElement;
    const theme = localStorage.getItem('theme');

    if (theme === 'dark_mode') {
        root.classList.add('dark');
        themeButton.textContent = 'light_mode';
    } else {
        root.classList.remove('dark');
        themeButton.textContent = 'dark_mode';
    }
}

const toggleMenuBtn = document.querySelector('#toggleMenuBtn');
toggleMenuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    const menu = document.querySelector('.menu');

    if (menu.classList.contains('hide')) {
        menu.classList.remove('hide');
        toggleMenuBtn.textContent = 'close';
    } else {
        menu.classList.add('hide');
        toggleMenuBtn.textContent = 'menu';
    }
} 