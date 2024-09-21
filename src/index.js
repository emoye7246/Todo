import _ from 'lodash';
import '/Users/elijahmoye/Desktop/todo/Todo/src/css/style.css'
import { TaskManager } from './java/taskManager';
import { myTasks } from './java/taskManager';

let addTask = document.getElementById('addTask')
let Welcome = document.getElementById('Welcome')

addTask.addEventListener('click', () => {

    Welcome.innerHTML = 'Your Task'
    new TaskManager().getTaskInfo()

})


let localStorageClear = document.getElementById("localStorageclear")

localStorageClear.addEventListener('click', () => {
    localStorage.clear()
})
