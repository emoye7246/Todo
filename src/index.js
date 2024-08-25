import _ from 'lodash';
import '/Users/elijahmoye/Desktop/todo/Todo/src/css/style.css'
import { TaskControl } from './java/task';

let Welcome = document.getElementById('Welcome')
let Home = document.getElementById('Home')
let projectHeader = document.getElementById('projectHeader')
let addTask = document.getElementById('addTask')

Home.addEventListener('click', () => {
    Welcome.innerHTML = 'Your Tasks'
})

projectHeader.addEventListener('click', () => {
    Welcome.innerHTML = 'Your Projects'
})

addTask.addEventListener('click', () => {
    TaskControl.createTaskDialog()
})

