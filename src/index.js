import _ from 'lodash';
import '/Users/elijahmoye/Desktop/todo/Todo/src/css/style.css'
import {ProjectManager} from '/Users/elijahmoye/Desktop/todo/Todo/src/java/project.js'
import { TaskControl } from './java/task';

let Welcome = document.getElementById('Welcome')
let Home = document.getElementById('Home')
let projectHeader = document.getElementById('projectHeader')
let addTask = document.getElementById('addTask')
let addProject = document.getElementById('addProject')
let ProjectsContent = document.getElementById('ProjectsContent')
let taskContent = document.getElementById('taskContent')
let upcoming = document.getElementById('Upcoming')
let upcomingContent = document.getElementById('upcomingContent')
let Completed = document.getElementById('Completed')
let myCompletedTask = document.getElementById('myCompletedTask')



Home.addEventListener('click', () => {
    Welcome.innerHTML = 'Your Tasks'

    myCompletedTask.style.display = 'none'
    upcomingContent.style.display = 'none'
    ProjectsContent.style.display = 'none'

    taskContent.style.display = 'flex'


})

projectHeader.addEventListener('click', () => {
    Welcome.innerHTML = 'Your Projects'

    ProjectsContent.style.display = 'flex'

    taskContent.style.display = 'none'
    upcomingContent.style.display = 'none'
    myCompletedTask.style.display = 'none'



})

addTask.addEventListener('click', () => {
    Welcome.innerHTML = 'Your Tasks'
    TaskControl.createTaskDialog()

    ProjectsContent.style.display = 'none'

    taskContent.style.display = 'flex'
    upcomingContent.style.display = 'none'
    myCompletedTask.style.display = 'none'


})

addProject.addEventListener('click', () => {
    Welcome.innerHTML = 'Your Projects'
    ProjectManager.createProjectDialog()

    ProjectsContent.style.display = 'flex'

    taskContent.style.display = 'none'
    upcomingContent.style.display = 'none'
    myCompletedTask.style.display = 'none'


})


upcoming.addEventListener('click', () => {

    Welcome.innerHTML = 'Upcoming Tasks'

    upcomingContent.style.display = 'flex'

    taskContent.style.display = 'none'
    ProjectsContent.style.display = 'none'
    myCompletedTask.style.display = 'none'




})

Completed.addEventListener('click', () => {

    Welcome.innerHTML = 'Completed Tasks'

    myCompletedTask.style.display = 'flex'
    upcomingContent.style.display = 'none'
    taskContent.style.display = 'none'
    ProjectsContent.style.display = 'none'



})