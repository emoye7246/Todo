import _ from 'lodash';
import '/Users/elijahmoye/Desktop/todo/Todo/src/css/style.css'
import { TaskManager } from './java/Task/taskManager';
import { ProjectManager } from './java/projects/projectManager';
import { myTasks } from './java/Task/taskManager';
import { taskContent } from './java/Task/newTask';

import { dateControl } from './java/date';

let addTask = document.getElementById('addTask')
let Welcome = document.getElementById('Welcome')
let Home = document.getElementById('Home')
let addProject = document.getElementById('addProject')
let projects = document.getElementById('projects')
let projectContent = document.getElementById('projectContent')
let CompletedTasks = document.getElementById('CompletedTasks')
let Completed = document.getElementById('Completed')
let UpcomingTasks = document.getElementById('UpcomingTasks')
let Upcoming = document.getElementById('Upcoming')


addTask.addEventListener('click', () => {

    Welcome.innerHTML = 'Your Task'
    taskContent.style.display = 'flex'
    projectContent.style.display = 'none'
    CompletedTasks.style.display = 'none'
    UpcomingTasks.style.display = 'none'
    new TaskManager().getTaskInfo()

})

Home.addEventListener('click', () => {

    Welcome.innerHTML = 'Your Tasks'
    taskContent.style.display = 'flex'
    projectContent.style.display = 'none'
    CompletedTasks.style.display = 'none'
    UpcomingTasks.style.display = 'none'





})

addProject.addEventListener('click', () => {

    new ProjectManager().getProjectInfo()
    Welcome.innerHTML = 'Your Projects'
    UpcomingTasks.style.display = 'none'
    CompletedTasks.style.display = 'none'
    taskContent.style.display = 'none'
    projectContent.style.display = 'flex'


})

projects.addEventListener('click', () => {

    Welcome.innerHTML = 'Your Projects'
    UpcomingTasks.style.display = 'none'
    CompletedTasks.style.display = 'none'
    taskContent.style.display = 'none'
    projectContent.style.display = 'flex'

})

Upcoming.addEventListener('click', () => {

    Welcome.innerHTML = 'Upcoming Tasks'

    UpcomingTasks.style.display = 'flex'
    CompletedTasks.style.display = 'none'
    taskContent.style.display = 'none'
    projectContent.style.display = 'none'

})

Completed.addEventListener('click', () => {

    Welcome.innerHTML = 'Completed Tasks'
    CompletedTasks.style.display = 'flex'
    taskContent.style.display = 'none'
    projectContent.style.display = 'none'
    UpcomingTasks.style.display = 'none'

})



let localStorageClear = document.getElementById("localStorageclear")

localStorageClear.addEventListener('click', () => {
    localStorage.clear()
})

