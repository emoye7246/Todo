import { dateControl } from "../date";
import { myTasks } from "./taskManager";
import { format} from "date-fns";

export let taskContent = document.getElementById('taskContent')


let completed = JSON.parse(localStorage.getItem('complete')) || []




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

        completeTask(object, storeTaskElements)
    })

    let todaysDate = `'${new Date()}'`

    let dateInputed = `'${userDate}'`

    dateControl(todaysDate, dateInputed, storeTaskElements)


    buttonSection.append(editButton, removeButton, completedButton)
    storeTaskElements.append(taskTitle, taskDescription, taskDate, buttonSection)
    taskContent.append(storeTaskElements)


    

    function removeButtons(){

        storeTaskElements.remove()

        if(myTasks.indexOf(object) == myTasks.indexOf(object)){

           myTasks.splice(myTasks.indexOf(object), 1)

           localStorage.setItem('tasks', JSON.stringify(myTasks))

           upcomingMyTask()
           
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


            dateControl(todaysDate, object.TaskDate, storeTaskElements)



            localStorage.setItem('tasks', JSON.stringify(myTasks))

            upcomingMyTask()

            userInput.close()
        })

        userInputDivEdit.append(taskTitleEdit, taskTitleInputEdit, taskDescriptionEdit, taskDescriptionInputEdit, taskDateEdit, taskDateInputEdit, closeButtonEdit)
        userInput.append(userInputDivEdit)

    }

    upcomingMyTask()

}

export function completeTask(object, removeDiv){

    completed.push(object)

    localStorage.setItem('complete', JSON.stringify(completed))

    removeDiv.remove()


    myTasks.splice(myTasks.indexOf(object), 1)

    localStorage.setItem('tasks', JSON.stringify(myTasks))

    completedTaskDisplay(object.TaskName, object.TaskDescription, object.TaskDate)

    upcomingMyTask()

}

export function completedTaskDisplay(userTitle, userDescription, userDate){

    let CompletedTasks = document.getElementById('CompletedTasks')

    let storeComplete = document.createElement('div')
    storeComplete.id = 'storeCompleted'

    let completeTitle = document.createElement('div')
    completeTitle.innerHTML = `${userTitle}`

    let completeDescription = document.createElement('div')
    completeDescription.innerHTML = `${userDescription}`

    let completeDate = document.createElement('div')
    completeDate.innerHTML = `${userDate}`

    let congratsMessage = document.createElement('div')
    congratsMessage.style.color = 'green'
    congratsMessage.innerHTML = 'Congrats on completing this task lets keep this going '

    storeComplete.append(completeTitle, completeDescription, completeDate, congratsMessage)
    CompletedTasks.append(storeComplete)

    
}

export function upcomingMyTask(){

let taskArray = JSON.parse(localStorage.getItem('tasks')) || []


    let upcomingMyTask = document.getElementById('upComingMyTask')
    upcomingMyTask.innerHTML = ' '

    taskArray.forEach((element) => {

        let storeMyTaskUpcoming = document.createElement('div')
        storeMyTaskUpcoming.id = 'storeMyTaskUpcoming'

        let storeTaskContent = document.createElement('div')
        storeTaskContent.id = 'storeTaskContent'

      let placeTitle = document.createElement('div')
      placeTitle.innerHTML = `Task Name: ${element.TaskName}`

      let placeDescription = document.createElement('div')
      placeDescription.innerHTML = `Task Description: ${element.TaskDescription}`

      let placeDate = document.createElement('div')
      placeDate.innerHTML = `Task Due: ${format(new Date(`'${element.TaskDate}'`), 'MMMM do yyyy')}`


        storeMyTaskUpcoming.append(placeTitle, placeDescription, placeDate)
        upcomingMyTask.append(storeMyTaskUpcoming)
    })

    


}