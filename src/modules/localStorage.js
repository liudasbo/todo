import { loadProjectList } from "./loadProjectList";
import { Project } from "./project";

export function saveThemeToLocalStorage(theme) {
    localStorage.setItem('theme', theme);
}

class LocalStorageManager {
    constructor(key) {
        this.key = key;
        this.data = this.loadFromLocalStorage();

        // Load default projects
        const defaultProjectsExist = this.data.some(project => ['All tasks', 'Today', 'This week'].includes(project.name));
        if (!defaultProjectsExist) {
            this.data.push(new Project('All tasks'));
            this.data.push(new Project('Today'));
            this.data.push(new Project('This week'));
            this.saveToLocalStorage();
        }
    }

    loadFromLocalStorage() {
        const data = localStorage.getItem(this.key);
        return data ? JSON.parse(data) : [];
    }

    saveToLocalStorage() {
        localStorage.setItem(this.key, JSON.stringify(this.data));
    }

    addProject(project) {
        const newProject = new Project(project);
        this.data.push(newProject);
        this.saveToLocalStorage();
        loadProjectList();
    }

    getProjectsNames() {
        const names = this.data.map(project => project.name);
        return names;
    }

    deleteProjectByName(name) {
        this.data = this.data.filter(project => project.name !== name);
        this.saveToLocalStorage();
        loadProjectList();
    }
}

export const storage = new LocalStorageManager('todoList');