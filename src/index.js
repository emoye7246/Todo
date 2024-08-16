import _ from 'lodash';
import '/Users/elijahmoye/Desktop/todo/Todo/src/css/style.css'
import { TaskContol } from './java/taskManager';

// Button Control

let addTask = document.getElementById('addTask')


let addProject = document.getElementById('addProject')
let closeProject = document.getElementById('closeProject')


// Dialog Control


let projectDialog = document.getElementById('projectDialog')

addTask.addEventListener('click', () => {
    let collect = new TaskContol
    collect.taskDialogs()
    collect.taskContent()
})


addProject.addEventListener('click', () => {
    projectDialog.showModal()

})

closeProject.addEventListener('click', () => {
    projectDialog.close()
})







// This goal now is to create the postTasks and PostProjects in javascript rather than in the dom so Great
