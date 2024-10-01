import { dateControl } from "../date";
import { myTasks } from "./taskManager";
import { completed } from "./taskManager";
import { format} from "date-fns";

export let taskContent = document.getElementById('taskContent')


let content = document.getElementById('content')

export function createTaskDisplay(userTitle, userDescription, userDate, object){

    taskContent.style.display = 'flex'

    projectContent.style.display = ' none'

    let storeTaskElements = document.createElement('div')
    storeTaskElements.id = 'storeTaskElements'

    let taskTitle = document.createElement('div')
    taskTitle.innerHTML = `Task Name: ${userTitle}`

    let taskDescription = document.createElement('div')
    taskDescription.innerHTML = `Task Description: ${userDescription}`

    let taskDate = document.createElement('div')
    taskDate.innerHTML = `Task Due: ${format(new Date(`'${userDate}'`), 'MMMM do yyyy')}`

    let buttonSection = document.createElement('div')
    buttonSection.id = 'buttonSection'

    let editButton = document.createElement('button')
    editButton.innerHTML = 'Edit'
    editButton.addEventListener('click', editTask)

    let removeButton = document.createElement('button')
    removeButton.innerHTML = 'Remove'
    removeButton.addEventListener('click', removeButtons)

    let completedButton = document.createElement('button')
    completedButton.innerHTML = 'Completed'
    completedButton.type = 'button'

    completedButton.addEventListener('click', () => {

        completeTask(object)
    })

    let todaysDate = `'${new Date()}'`

    let dateInputed = `'${userDate}'`

    dateControl(todaysDate, dateInputed, storeTaskElements)


    buttonSection.append(editButton, removeButton, completedButton)
    storeTaskElements.append(taskTitle, taskDescription, taskDate, buttonSection)
    taskContent.append(storeTaskElements)


    // Upcoming

    let UpcomingTasks = document.getElementById('UpcomingTasks')

    let storeUpcoming = document.createElement('div')
    storeUpcoming.id = 'storeUpcoming'
    
    let upcomingTitle = document.createElement('div')
    upcomingTitle.innerHTML = `Task Name: ${userTitle}`
    
    let upcomingDescription = document.createElement('div')
    upcomingDescription.innerHTML = `Task Description: ${userDescription}`
    
    let upcomingDate = document.createElement('div')
    upcomingDate.innerHTML = `Task Due: ${format(new Date(`'${userDate}'`), 'MMMM do yyyy')}`

    dateControl(todaysDate, dateInputed, storeUpcoming)
    
    storeUpcoming.append(upcomingTitle, upcomingDescription, upcomingDate)
    UpcomingTasks.append(storeUpcoming)


    function removeButtons(){

        storeTaskElements.remove()
        storeUpcoming.remove()

        if(myTasks.indexOf(object) == myTasks.indexOf(object)){

           myTasks.splice(myTasks.indexOf(object), 1)

           localStorage.setItem('tasks', JSON.stringify(myTasks))
           
        }
        else{
            console.log('Not FOund')

        }
    }

    function editTask(){

        let userInput = document.getElementById('userInput')
        userInput.innerHTML = ' '

        userInput.showModal()
        
        let userInputDivEdit = document.createElement('div')
        userInputDivEdit.id = 'userInputDiv'
    
        let taskTitleEdit = document.createElement('label')
        taskTitleEdit.htmlFor = 'taskTitle'
        taskTitleEdit.innerHTML = 'Task Title'
    
        let taskTitleInputEdit = document.createElement('input')
        taskTitleInputEdit.id = 'taskTitle'
    
        let taskDescriptionEdit = document.createElement('label')
        taskDescriptionEdit.innerHTML = 'Task Description'
        taskDescriptionEdit.htmlFor = 'taskDescription'
    
        let taskDescriptionInputEdit = document.createElement('input')
        taskDescriptionInputEdit.id = 'taskDescription'
    
        let taskDateEdit = document.createElement('label')
        taskDateEdit.innerHTML = 'Due Date'
        taskDateEdit.htmlFor = 'taskDate'
    
        let taskDateInputEdit = document.createElement('input')
        taskDateInputEdit.type = 'date'
        taskDateInputEdit.id = 'taskDate'
    
    
        let closeButtonEdit = document.createElement('button')
        closeButtonEdit.innerHTML = 'Close'

        closeButtonEdit.addEventListener('click', () => {

            object.TaskName = `${taskTitleInputEdit.value}`

            object.TaskDescription = `${taskDescriptionInputEdit.value}`

            object.TaskDate = `${taskDateInputEdit.value}`
        
            taskTitle.innerHTML = `Task Name: ${object.TaskName}`
            taskDescription.innerHTML = `Task Description: ${object.TaskDescription}`
            taskDate.innerHTML = `Task Due: ${format(new Date(`'${object.TaskDate}'`), 'MMMM do yyyy')}`

            upcomingTitle.innerHTML = `Task Name: ${object.TaskName}`
            upcomingDescription.innerHTML = `Task Description: ${object.TaskDescription}`
            upcomingDate.innerHTML = `Task Due: ${format(new Date(`'${object.TaskDate}'`), 'MMMM do yyyy')}`


            dateControl(todaysDate, object.TaskDate, storeTaskElements)

            dateControl(todaysDate, dateInputed, storeUpcoming)


            localStorage.setItem('tasks', JSON.stringify(myTasks))

            userInput.close()
        })

        userInputDivEdit.append(taskTitleEdit, taskTitleInputEdit, taskDescriptionEdit, taskDescriptionInputEdit, taskDateEdit, taskDateInputEdit, closeButtonEdit)
        userInput.append(userInputDivEdit)
    }

}

export function completeTask(object){

    completed.push(object)

    localStorage.setItem('complete', JSON.stringify(completed))


}

// Pushing the object to completed and moving that element
