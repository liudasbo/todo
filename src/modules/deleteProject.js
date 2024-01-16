import { storage } from "./localStorage";

export function deleteProject(deleteProjectButtons) {
    deleteProjectButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const projectName = button.parentNode.querySelector('p').textContent;
            storage.deleteProjectByName(projectName);
        })
    })
}