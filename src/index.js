import _ from 'lodash';
import '/Users/elijahmoye/Desktop/todo/Todo/src/css/style.css'
import { Projects } from './java/project';

let dialog = document.querySelector('dialog')
let addProject = document.getElementById('addProject')
let close = document.getElementById('close')



addProject.addEventListener('click', () => {

    dialog.showModal();
})

close.addEventListener('click', () => {
    let name = document.getElementById('Name-of-Project').value
    let projectInfo = document.getElementById('description').value
    let userInput = new Projects(name, projectInfo)
    userInput.displayProjects()
    dialog.close()
})

