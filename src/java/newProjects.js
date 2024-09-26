let content = document.getElementById('content')

import { taskContent } from "../newTask"
export let projectContent = document.getElementById('projectContent')


export function showProject(objectTitle, objectDescription){

    let projects = document.getElementById('projects')

    let showProjects = document.createElement('div')
    showProjects.id = 'showBox'
    showProjects.innerHTML = `${objectTitle}`

    showProjects.addEventListener('click', () => {

        createProjectDisplay(objectTitle, objectDescription)
    })

    projects.append(showProjects)

}


export function createProjectDisplay(userTitle, userDescription){

    projectContent.style.display = 'flex'

    taskContent.style.display = 'none'

    projectContent.innerHTML = ' '

    let storeProjectElements = document.createElement('div')
    storeProjectElements.id = 'storeProjectElements'

    let projectTitle = document.createElement('div')
    projectTitle.innerHTML = `<b> Project Name: </b>${userTitle}`

    let projectDescription = document.createElement('div')
    projectDescription.innerHTML = `<b> Project Description: </b> ${userDescription}`

    let buttonSection = document.createElement('div')
    buttonSection.id = 'buttonSection'

    let addNewTask = document.createElement('button')
    addNewTask.type = 'button'
    addNewTask.innerHTML = 'Add Task'

    addNewTask.addEventListener('click', taskToProject)

    let addExistingTask = document.createElement('button')
    addExistingTask.type = 'button'
    addExistingTask.innerHTML = 'Add Existing Task'

    let removeProject = document.createElement('button')
    removeProject.type = 'button'
    removeProject.innerHTML = 'Remove Project'

    buttonSection.append(addNewTask, addExistingTask, removeProject)
    storeProjectElements.append(projectTitle, projectDescription, buttonSection)
    projectContent.append(storeProjectElements)


    function taskToProject(){

        let userInput = document.getElementById('userInput')

        userInput.innerHTML = ' '

        userInput.showModal()

        let taskHolders = document.createElement('div')
        taskHolders.id = 'taskHolders'

        let taskTitle = document.createElement('label')
        taskTitle.innerHTML = 'Name of Task:'
        taskTitle.htmlFor = 'taskTitle'

        let taskTitleInput = document.createElement('input')
        taskTitleInput.id = 'taskTitle'

        let taskDescription = document.createElement('label')
        taskDescription.innerHTML = 'Task Description: '
        taskDescription.htmlFor = 'taskDescription'

        let taskDescriptionInput = document.createElement('input')
        taskDescriptionInput.id = 'taskDescription'

        let taskDate = document.createElement('label')
        taskDate.innerHTML = 'Task Date: '
        taskDate.htmlFor = 'taskDate'

        let taskDateInput = document.createElement('input')
        taskDateInput.type = 'date'
        taskDateInput.id = 'taskDate'

        let closeButton = document.createElement('button')
        closeButton.type = 'button'
        closeButton.innerHTML = 'Close'

        closeButton.addEventListener('click', () => {

            myProjectTasks(taskTitleInput.value)

            userInput.close()
        })


        taskHolders.append(taskTitle, taskTitleInput, taskDescription, taskDescriptionInput, taskDate, taskDateInput, closeButton)
        userInput.append(taskHolders)

    }

    function myProjectTasks(inputTitle, inputDescription, inputDate){

        let taskProjects = document.createElement('div')

        let taskTitle = document.createElement('div')
        taskTitle.innerHTML = `${inputTitle}`


        taskProjects.append(taskTitle)
        projectContent.append(taskProjects)
        
    }

}