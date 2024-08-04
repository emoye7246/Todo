import _ from 'lodash';
import '/Users/elijahmoye/Desktop/todo/Todo/src/css/style.css'
import { DialogControl } from './java/dialogs';

let dialog = document.getElementById('formResults')
let addProject = document.getElementById('addProject')
let addTask = document.getElementById('addTask')

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
