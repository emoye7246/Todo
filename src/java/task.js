export class TaskControl {

static createTaskDialog(){

let taskControl = document.getElementById('taskControl')

let ProjectsContent = document.getElementById('ProjectsContent')
ProjectsContent.style.display = 'none'

let taskContent = document.getElementById('taskContent')
taskContent.style.display = 'flex'

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
    let storeTasks = document.getElementById('storeTasks')
    

    let tasksStorage = document.createElement('button')
    tasksStorage.innerHTML = `${taskTitleInput.value}`

    tasksStorage.addEventListener('click', sendToProject)

    storeTasks.insertBefore(tasksStorage, closeTaskStorage)


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

    let editTask = document.createElement('button')
    editTask.innerHTML = 'Edit'
    editTask.addEventListener('click', editTasks)

    taskContent.append(taskSection)
    taskSection.append(placeTaskTitle, placeTaskDescription, placeTaskDate, buttonSection)
    buttonSection.append(removeTask, editTask)


    function remove(){
        taskSection.remove()
        tasksStorage.remove()
    }


    function editTasks(){

       let editTaskDisplay = document.getElementById('editTaskDisplay')

       editTaskDisplay.showModal()

       editTaskDisplay.innerHTML = ' '
        
       let editTaskTitle = document.createElement('label')
       editTaskTitle.htmlFor = 'editTask'
       editTaskTitle.innerHTML = 'Edit Task'

       let editTaskTitleI = document.createElement('input')
       editTaskTitleI.id = 'editTask'


       let editTaskDescription = document.createElement('label')
       editTaskDescription.htmlFor = 'editDescription'
       editTaskDescription.innerHTML = 'Edit Description'

       let editTaskDescriptionI = document.createElement('input')
       editTaskDescriptionI.id = 'editDescription'

       let editTaskDate = document.createElement('label')
       editTaskDate.htmlFor = 'editDate'
       editTaskDate.innerHTML = 'Edit Date'

       let editTaskDateI = document.createElement('input')
       editTaskDateI.id = 'editDate'
       editTaskDateI.type = 'date'

       let closeEdit = document.createElement('button')
       closeEdit.type = 'button'
       closeEdit.innerHTML = 'Close'

       closeEdit.addEventListener('click', () => {
        let titleEdit = placeTaskTitle
        let descriptionEdit = placeTaskDescription
        let dateEdit = placeTaskDate
        let tasksStorageEdit = tasksStorage

        titleEdit.innerHTML = `${editTaskTitleI.value}`
        descriptionEdit.innerHTML = `${editTaskDescriptionI.value}`
        dateEdit.innerHTML = `${editTaskDateI.value}`
        tasksStorageEdit.innerHTML = `${editTaskTitleI.value}`


        editTaskDisplay.close()
       })

       

       editTaskDisplay.append(editTaskTitle, editTaskTitleI, editTaskDescription, editTaskDescriptionI, editTaskDate, editTaskDateI, closeEdit)
    }

    function sendToProject(){

        let placeElements = document.getElementById('placeElements')
        let boohoo = taskSection

        placeElements.append(boohoo)
        

        tasksStorage.remove()

    }
    // Yes that would work
}   


}


}
// Good Work
