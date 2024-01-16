import './styles/style.scss';
import './modules/themeSettings';
import './modules/localStorage';
import './modules/addTask';
import './modules/addProject';
import './modules/loadProjectList';
import './modules/deleteProject';
import { loadProjectList } from './modules/loadProjectList';

window.onload = (event) => {
    loadProjectList();
};  