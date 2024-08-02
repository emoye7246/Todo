import _ from 'lodash';
import '/Users/elijahmoye/Desktop/todo/Todo/src/css/style.css'
import projectManager from './java/project';
import { createTask } from './java/task';

let postTasks = document.getElementById('postTasks')
let postProject = document.getElementById('postProject')



let addProject = document.getElementById('addProject')
addProject.addEventListener('click', projectManager)

let addTask = document.getElementById('addTask')
addTask.addEventListener('click', createTask)

let projectHeader = document.getElementById('projectHeader')
projectHeader.addEventListener('click', () => {

    postTasks.style.display = 'none'
    
    postProject.style.display = 'inline'
})

let Home = document.getElementById('Home')

Home.addEventListener('click', () => {

    postProject.style.display = 'none'

    postTasks.style.display = 'inline'

})
