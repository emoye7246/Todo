import _ from 'lodash';
import '/Users/elijahmoye/Desktop/todo/Todo/src/css/style.css'
import { TaskManager } from './java/taskManager';

let addTask = document.getElementById('addTask')

addTask.addEventListener('click', () => {

    new TaskManager().getTaskInfo()

})


let localStorageClear = document.getElementById("localStorageclear")

localStorageClear.addEventListener('click', () => {
    localStorage.clear()
})

