export class Task {
    constructor(name, dueDate, projectName) {
        this.name = name;
        this.dueDate = dueDate;
        this.projectName = projectName;
        this.done = false;
    }

    toggleDone() {
        this.done = !this.done;
    }

    setName(name) {
        this.name = name;
    }

    setDate(newDate) {
        this.dueDate = newDate;
    }
}