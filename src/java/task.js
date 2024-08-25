export class TaskControl {

static createTaskDialog(){

let taskControl = document.getElementById('taskControl')

taskControl.showModal()

taskControl.innerHTML = ' '

let getTask = document.createElement('div')

let createTaskHeader = document.createElement('h2')
createTaskHeader.innerHTML = 'Create a Task'


let taskTitle = document.createElement('label')
taskTitle.innerHTML = 'Task Title'
taskTitle.htmlFor = 'taskName'


let taskTitleInput = document.createElement('input')
taskTitleInput.id = 'taskName'


let taskDescription = document.createElement('label')
taskDescription.innerHTML = 'Task Description'
taskDescription.htmlFor = 'taskDescription'

let taskDescriptionInput = document.createElement('input')
taskDescriptionInput.id = 'taskDescription'

let taskDate = document.createElement('label')
taskDate.innerHTML = 'Task Due Date'
taskDate.htmlFor = 'taskDate'

let taskDateInput = document.createElement('input')
taskDateInput.id = 'taskDate'
taskDateInput.type = 'date'


let closeTasks = document.createElement('button')
closeTasks.type = 'button'
closeTasks.innerHTML = 'Close'



closeTasks.addEventListener('click', () => {
    postTasks()
    taskControl.close()
})

taskControl.append(getTask)
getTask.append(createTaskHeader, taskTitle, taskTitleInput, taskDescription, taskDescriptionInput, taskDate, taskDateInput, closeTasks)

// Module Part two

function postTasks(){

    let taskContent = document.getElementById('taskContent')

    let taskSection = document.createElement('div')
    taskSection.id = 'taskSection'

    let buttonSection = document.createElement('div')
    buttonSection.id = 'buttonSection'


    let placeTaskTitle = document.createElement('div')
    placeTaskTitle.innerHTML = `${taskTitleInput.value}`

    let placeTaskDescription = document.createElement('div')
    placeTaskDescription.innerHTML = `${taskDescriptionInput.value}`


    let placeTaskDate = document.createElement('div')
    placeTaskDate.innerHTML = `${taskDateInput.value}`


    let removeTask = document.createElement('button')
    removeTask.innerHTML = 'Remove'
    removeTask.addEventListener('click', remove)

    let addTo = document.createElement('button')
    addTo.innerHTML = 'Add to task'
    addTo.addEventListener('click', addToProject)

    let editTask = document.createElement('button')
    editTask.innerHTML = 'Edit'
    editTask.addEventListener('click', editTasks)

    taskContent.append(taskSection)
    taskSection.append(placeTaskTitle, placeTaskDescription, placeTaskDate, buttonSection)
    buttonSection.append(removeTask, addTo, editTask)


    function remove(){
        taskSection.remove()
    }


    function addToProject(){
        console.log('hello')
    }

    function editTasks(){
        console.log('hello')
    }

}


}


}

