import { Project } from "./project";
import { Task } from "./task";
import { loadProjectList } from "./userInterface";
import { isToday, isThisWeek } from "date-fns";

export class Storage {
    
    static loadFromLocalStorage() {
        const data = JSON.parse(localStorage.getItem('todoList') || '[]');
        return data;
    }

    static saveToLocalStorage(data) {
        localStorage.setItem('todoList', JSON.stringify(data));
    }

    static addNewProject(name) {
        const newProject = new Project(name);
        const data = Storage.loadFromLocalStorage();
        data.push(newProject);
        Storage.saveToLocalStorage(data);
    }

    static getProjectsNames() {
        const data = Storage.loadFromLocalStorage();
        const projectsNames = data.map((project) => {
            return project.name;
        })
        return projectsNames;
    }

    static addDefaultProjects() {
        const data = Storage.loadFromLocalStorage();
        if (!data.some((project) => ['All tasks', 'Today', 'This week'].includes(project.name))) {
            const allTasks = new Project('All tasks');
            const today = new Project('Today');
            const thisWeek = new Project('This week');

            data.push(allTasks);
            data.push(today);
            data.push(thisWeek);
    
            Storage.saveToLocalStorage(data);   
        }
    }

    static loadObjectsFromLS() {
        const data = Storage.loadFromLocalStorage();
        const newData = data.map((projectData) => {
            const project = new Project(projectData.name);
            projectData.tasks.forEach((taskData) => {
                const task = new Task(taskData.name, taskData.dueDate, taskData.projectName);
                task.done = taskData.done;
                task.project = taskData.project;
                project.tasks.push(task);
            });
            return project;
        });
        return newData;
    }

    static filterProjectsTasks() {
        const data = Storage.loadObjectsFromLS();
        const allTasks = [].concat(...data.map((project) => project.tasks));
        const projectsNames = Storage.getProjectsNames();
        // All tasks project
        const allTasksProject = data.find((project) => project.name === 'All tasks');
        allTasks.forEach((task) => {
            if (!(allTasksProject.tasks.find(existingTask => existingTask.name === task.name && existingTask.dueDate === task.dueDate && existingTask.projectName === task.projectName))) {
                const newTask = new Task(task.name, task.dueDate, task.projectName  );
                newTask.done = task.done;
                allTasksProject.tasks.push(newTask);
            } 

             // delete tasks if tasks project was deleted
            if (!projectsNames.includes(task.projectName)) {
                allTasksProject.tasks = allTasksProject.tasks.filter(existingTask => 
                    !(existingTask.projectName === task.projectName)
                );
            }
            
        })

        // Today project
        const todayProject = data.find((project) => project.name === 'Today');
        const todayTasks = allTasks.filter((task) => isToday(new Date(task.dueDate)));
        todayTasks.forEach((task) => {
            if (!(todayProject.tasks.find((existingTask) => existingTask.name === task.name && existingTask.dueDate === task.dueDate && existingTask.projectName === task.projectName))) {
                const newTask = new Task(task.name, task.dueDate, task.projectName);
                newTask.done = task.done;
                todayProject.tasks.push(newTask);
            }
        })

        todayProject.tasks = todayProject.tasks.filter((existingTask) =>
            todayTasks.some((task) =>
                existingTask.name === task.name && existingTask.dueDate === task.dueDate && existingTask.projectName === task.projectName)
        );

        // This week project
        const thisWeekProject = data.find((project) => project.name === 'This week');
        const thisWeekTasks = allTasks.filter((task) => isThisWeek(new Date(task.dueDate)));
        thisWeekTasks.forEach((task) => {

            if (!(thisWeekProject.tasks.find((existingTask) => existingTask.name === task.name && existingTask.dueDate === task.dueDate && existingTask.projectName === task.projectName))) {
                const newTask = new Task(task.name, task.dueDate, task.projectName);
                newTask.done = task.done;
                thisWeekProject.tasks.push(newTask);
            }
        })

        thisWeekProject.tasks = thisWeekProject.tasks.filter((existingTask) =>
            thisWeekTasks.some((task) =>
                existingTask.name === task.name && existingTask.dueDate === task.dueDate && existingTask.projectName === task.projectName
            )
        );

        Storage.saveToLocalStorage(data);
    }

    static deleteProject(name) {
        const data = Storage.loadObjectsFromLS();
        const deleteProjet = name;
        const newData = data.filter(project => project.name !== deleteProjet);
        Storage.saveToLocalStorage(newData);

        Storage.filterProjectsTasks();
        loadProjectList();
    }

    static saveThemeToLS(theme) {
        localStorage.setItem('theme', theme)
    }
}