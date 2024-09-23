import _ from 'lodash';
import '/Users/elijahmoye/Desktop/todo/Todo/src/css/style.css'
import { TaskManager } from './java/taskManager';
import { ProjectManager } from './java/projectManager';
import { myTasks } from './java/taskManager';
import { taskContent } from './newTask';
import { projectContent } from './java/newProjects';

let addTask = document.getElementById('addTask')
let Welcome = document.getElementById('Welcome')
let Home = document.getElementById('Home')
let addProject = document.getElementById('addProject')
let projects = document.getElementById('projects')

addTask.addEventListener('click', () => {

    Welcome.innerHTML = 'Your Task'
    taskContent.style.display = 'flex'
    projectContent.style.display = 'none'
    new TaskManager().getTaskInfo()

})

Home.addEventListener('click', () => {

    Welcome.innerHTML = 'Your Tasks'
    taskContent.style.display = 'flex'
    projectContent.style.display = 'none'


})

addProject.addEventListener('click', () => {

    new ProjectManager().getProjectInfo()
    taskContent.style.display = 'none'
    projectContent.style.display = 'flex'
    Welcome.innerHTML = 'Your Projects'


})

projects.addEventListener('click', () => {

    Welcome.innerHTML = 'Your Projects'
    projectContent.style.display = 'flex'
    taskContent.style.display = 'none'


})



let localStorageClear = document.getElementById("localStorageclear")

localStorageClear.addEventListener('click', () => {
    localStorage.clear()
})
console.log(myTasks)