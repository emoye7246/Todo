import _ from 'lodash';
import '/Users/elijahmoye/Desktop/todo/Todo/src/css/style.css'
import { DialogControl } from './java/dialogs';

let dialog = document.getElementById('formResults')
let addProject = document.getElementById('addProject')
let addTask = document.getElementById('addTask')
let welcome = document.getElementById('Welcome')


let Home = document.getElementById('Home')
let postProject = document.getElementById('postProject')
let postTasks = document.getElementById('postTasks')
let project = document.getElementById('projects')

Home.addEventListener('click', () => {

    welcome.innerHTML = 'Your Tasks'

    postTasks.style.display = 'flex'
    postProject.style.display = 'none'
})

project.addEventListener('click', () => {

    welcome.innerHTML = 'Your Projects'

    postTasks.style.display = 'none'
    postProject.style.display = 'flex'
})

addTask.addEventListener('click', () => {

    dialog.showModal()

    let userInput = new DialogControl
    userInput.showTasks();


})



addProject.addEventListener('click', () => {
    dialog.showModal();
    
    let userInput = new DialogControl
    userInput.showProject()

})


// This goal now is to create the postTasks and PostProjects in javascript rather than in the dom so Great
