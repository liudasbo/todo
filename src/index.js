import './styles/style.scss';
import './modules/storage';
import './modules/userInterface';
import { Storage } from './modules/storage';
import { loadProjectList, loadTheme, loadTodoList } from './modules/userInterface';

window.onload = () => {
    Storage.addDefaultProjects();
    Storage.filterProjectsTasks();
    loadTodoList();
    loadProjectList();
    loadTheme();
}  