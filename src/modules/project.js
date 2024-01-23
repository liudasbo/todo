import { Storage } from "./storage";
import { Task } from "./task";

export class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    addNewTask(name, dueDate, projectName) {
        const newTask = new Task(name, dueDate, projectName);
        this.tasks.push(newTask);
    }
}