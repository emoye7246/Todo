import _ from 'lodash';
import '/Users/elijahmoye/Desktop/todo/Todo/src/css/style.css'
import { TaskContol } from './java/taskManager';
import { projectManager } from './java/projectManager';


// Global Variables 

let Home = document.getElementById('Home')
let projects = document.getElementById('projects')
let postProject = document.getElementById('postProject')
let postTasks = document.getElementById('postTasks')
let Welcome = document.getElementById('Welcome')



// Button Control Global Variables

let addTask = document.getElementById('addTask')
let addProject = document.getElementById('addProject')

let today = document.getElementById('Today')
let huh = document.getElementById('huh')

today.addEventListener('click', () => {

    TaskContol.testing()
})





Home.addEventListener('click', () => {

    Welcome.innerHTML = 'Your Tasks'

    postProject.style.display = 'none'
    postTasks.style.display = 'flex'
    
})

projects.addEventListener('click', () => {

    Welcome.innerHTML = 'Your Projects'
    
    postProject.style.display = 'flex'
    postTasks.style.display = 'none'
})


addTask.addEventListener('click', () => {
    TaskContol.taskDialogs()
    
})


addProject.addEventListener('click' , projectManager)