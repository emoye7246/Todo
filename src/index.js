import _ from 'lodash';
import '/Users/elijahmoye/Desktop/todo/Todo/src/css/style.css'
import { TaskControl } from './java/task';
import { ProjectManager } from './java/project';

let Welcome = document.getElementById('Welcome')
let Home = document.getElementById('Home')
let projectHeader = document.getElementById('projectHeader')
let addTask = document.getElementById('addTask')
let addProject = document.getElementById('addProject')
let ProjectsContent = document.getElementById('ProjectsContent')
let taskContent = document.getElementById('taskContent')

Home.addEventListener('click', () => {
    Welcome.innerHTML = 'Your Tasks'

    ProjectsContent.style.display = 'none'

    taskContent.style.display = 'flex'

})

projectHeader.addEventListener('click', () => {
    Welcome.innerHTML = 'Your Projects'

    ProjectsContent.style.display = 'flex'

    taskContent.style.display = 'none'

})

addTask.addEventListener('click', () => {
    Welcome.innerHTML = 'Your Tasks'
    TaskControl.createTaskDialog()

    ProjectsContent.style.display = 'none'

    taskContent.style.display = 'flex'
})

addProject.addEventListener('click', () => {
    Welcome.innerHTML = 'Your Projects'
    ProjectManager.createProjectDialog()

    ProjectsContent.style.display = 'flex'

    taskContent.style.display = 'none'
})

