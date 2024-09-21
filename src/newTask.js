let content = document.getElementById('content')

import { myTasks } from "./java/taskManager"

export function createTaskDisplay(userTitle, userDescription, userDate, object){

    let storeTaskElements = document.createElement('div')
    storeTaskElements.id = 'storeTaskElements'

    let taskTitle = document.createElement('div')
    taskTitle.innerHTML = `Task Name: ${userTitle}`

    let taskDescription = document.createElement('div')
    taskDescription.innerHTML = `Task Description: ${userDescription}`

    let taskDate = document.createElement('div')
    taskDate.innerHTML = `${userDate}`

    let buttonSection = document.createElement('div')
    buttonSection.id = 'buttonSection'

    let editButton = document.createElement('button')
    editButton.innerHTML = 'Edit'

    let removeButton = document.createElement('button')
    removeButton.innerHTML = 'Remove'

    removeButton.addEventListener('click', removeButtons)

    let moveTo = document.createElement('button')
    moveTo.innerHTML = 'Move'


    buttonSection.append(editButton, removeButton, moveTo)
    storeTaskElements.append(taskTitle, taskDescription, taskDate, buttonSection)
    content.append(storeTaskElements)

    function removeButtons(){

        storeTaskElements.remove()
        
        if(myTasks.indexOf(object) == myTasks.indexOf(object)){

           myTasks.splice(myTasks.indexOf(object), 1)
           console.log(myTasks)
        }
        else{
            console.log('Not FOund')
           console.log(myTasks)

        }


    }
}

