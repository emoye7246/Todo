import _ from 'lodash';
import '/Users/elijahmoye/Desktop/todo/Todo/src/css/style.css'


// Button Control

let addTask = document.getElementById('addTask')
let closeTask = document.getElementById('closeTask')

let addProject = document.getElementById('addProject')
let closeProject = document.getElementById('closeProject')


// Dialog Control

let taskDialog = document.getElementById('taskDialog')

let projectDialog = document.getElementById('projectDialog')

addTask.addEventListener('click', () => {
    taskDialog.showModal()

})

closeTask.addEventListener('click', () => {
    taskDialog.close()
})


addProject.addEventListener('click', () => {
    projectDialog.showModal()

})

closeProject.addEventListener('click', () => {
    projectDialog.close()
})







// This goal now is to create the postTasks and PostProjects in javascript rather than in the dom so Great
