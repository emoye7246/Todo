import _ from 'lodash';
import '/Users/elijahmoye/Desktop/todo/Todo/src/css/style.css'
import { TaskManager } from './java/taskManager';
import { ProjectManager } from './java/projectManager';
import { myTasks } from './java/taskManager';

let addTask = document.getElementById('addTask')
let Welcome = document.getElementById('Welcome')
let Home = document.getElementById('Home')
let addProject = document.getElementById('addProject')

addTask.addEventListener('click', () => {

    Welcome.innerHTML = 'Your Task'
    new TaskManager().getTaskInfo()

})

Home.addEventListener('click', () => {

    Welcome.innerHTML = 'Your Tasks'
})

addProject.addEventListener('click', () => {

    new ProjectManager().getProjectInfo()
})



let localStorageClear = document.getElementById("localStorageclear")

localStorageClear.addEventListener('click', () => {
    localStorage.clear()
})
console.log(myTasks)