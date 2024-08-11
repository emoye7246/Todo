import _ from 'lodash';
import '/Users/elijahmoye/Desktop/todo/Todo/src/css/style.css'
import { dateControl } from './java/date';
import { Dialogs } from './java/dialogs';

let dialog = document.getElementById('formResults')
let welcome = document.getElementById('Welcome')
let today = document.getElementById('Today')



let Home = document.getElementById('Home')
let postProject = document.getElementById('postProject')
let postTasks = document.getElementById('postTasks')
let project = document.getElementById('projects')

today.addEventListener('click', () => {


dateControl()

    // Work With This

})

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

let addTasks = document.getElementById('addTask')

addTasks.addEventListener('click', () => {

    let Welcome = document.getElementById('Welcome')
    Welcome.innerHTML = 'Your Tasks'

    let postTasks = document.getElementById('postTasks')
    let postProject = document.getElementById('postProject')


    postTasks.style.display = 'flex'
    postProject.style.display = 'none'


    dialog.showModal()
    
    let showModals = new Dialogs(postTasks)
    showModals.displayDialog()

})




// This goal now is to create the postTasks and PostProjects in javascript rather than in the dom so Great
