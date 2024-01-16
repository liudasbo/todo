import { storage } from "./localStorage";
import { updateMenuBtnSelector } from "./themeSettings";

export function loadProjectList() {
    let projectsNames = storage.getProjectsNames();
    const projectsList = document.querySelector('.menu__user-projects ul');

    // Filter default projects
    projectsNames = projectsNames.filter(name => name !== "All tasks" && name !== "Today" && name !== "This week");

    projectsList.innerHTML = ''

    projectsNames.forEach((projectName) => {
        projectsList.innerHTML += `
        <li>
            <span class="material-symbols-outlined">inventory_2</span>
            <p>${projectName}</p>
            <span class="material-symbols-outlined deleteProjectBtn">delete</span>
         </li>
        `;
    })

    updateMenuBtnSelector();
}
