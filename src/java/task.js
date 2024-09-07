import { format } from "date-fns";
import { datesControl } from "./dates";
import { upcomingTasksControl } from "./dates";

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

let todaysDate = new Date()


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

    let upcomingTask = document.createElement('div')
    upcomingTask.id = 'upcomingTask'

    let buttonSection = document.createElement('div')
    buttonSection.id = 'buttonSection'


    let placeTaskTitle = document.createElement('div')
    placeTaskTitle.innerHTML = `Task Name: ${taskTitleInput.value}`

    let upcomingPlaceTaskTitle = document.createElement('div')
    upcomingPlaceTaskTitle.innerHTML = `Task Name: ${taskTitleInput.value}`

    let placeTaskDescription = document.createElement('div')
    placeTaskDescription.innerHTML = `Task Description: ${taskDescriptionInput.value}`

    let upcomingPlaceTaskDescription = document.createElement('div')
    upcomingPlaceTaskDescription.innerHTML = `Task Description:  ${taskDescriptionInput.value}`


    let placeTaskDate = document.createElement('div')
    placeTaskDate.innerHTML = ` Due Date: ${format(new Date(`'${taskDateInput.value}'`), 'MMMM do yyyy')}`

    let upcomingPlaceTaskDate = document.createElement('div')
    upcomingPlaceTaskDate.innerHTML =` Due Date: ${format(new Date(`'${taskDateInput.value}'`), 'MMMM do yyyy')}`



    let removeTask = document.createElement('button')
    removeTask.innerHTML = 'Remove'
    removeTask.addEventListener('click', remove)

    let editTask = document.createElement('button')
    editTask.innerHTML = 'Edit'
    editTask.addEventListener('click', editTasks)

    let completedTask = document.createElement('button')
    completedTask.innerHTML = 'Completed'
    completedTask.addEventListener('click', taskCompleted)

    taskContent.append(taskSection)

    taskSection.append(placeTaskTitle, placeTaskDescription, placeTaskDate, buttonSection)

    upcomingTask.append(upcomingPlaceTaskTitle, upcomingPlaceTaskDescription, upcomingPlaceTaskDate)

    buttonSection.append(removeTask, editTask, completedTask)

    function remove(){
        taskSection.remove()
        upcomingTask.remove()
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

        let upComingTitleEdit = upcomingPlaceTaskTitle
        let upComingTitleDescription = upcomingPlaceTaskDescription
        let upComingDateEdit = upcomingPlaceTaskDate

        titleEdit.innerHTML = `Task Name: ${editTaskTitleI.value}`
        descriptionEdit.innerHTML = `Task Description: ${editTaskDescriptionI.value}`
        dateEdit.innerHTML =  `Due Date: ${format(new Date(`'${editTaskDateI.value}'`), 'MMMM do yyyy')}`

        upComingTitleEdit.innerHTML = `Task Name: ${editTaskTitleI.value}`
        upComingTitleDescription.innerHTML = `Task Description: ${editTaskDescriptionI.value}`
        upComingDateEdit.innerHTML = ` Due Date: ${format(new Date(`'${editTaskDateI.value}'`), 'MMMM do yyyy')}`

        datesControl(todaysDate, `'${editTaskDateI.value}'`, taskSection )
        datesControl(todaysDate, `'${editTaskDateI.value}'`, upcomingTask)

        upcomingTasksControl(todaysDate, `'${editTaskDateI.value}'`, upcomingTask )


        editTaskDisplay.close()
       })

       editTaskDisplay.append(editTaskTitle, editTaskTitleI, editTaskDescription, editTaskDescriptionI, editTaskDate, editTaskDateI, closeEdit)
    }
    // Yes that would work

    function taskCompleted(){

        let completedThisTask = document.getElementById('completedThisTask')

        completedThisTask.showModal()
        
        completedThisTask.innerHTML = ' '

        let question = document.createElement('h2')
        question.innerHTML = 'Has this task been Completed'

        let buttonSeperation = document.createElement('div')
        buttonSeperation.id = 'buttonSeperation'

        let yes = document.createElement('button')
        yes.innerHTML = 'Yes'

        yes.addEventListener('click', () => {
            let finishedTasks = document.getElementById('finishedTasks')

            let congratsMessgae = document.createElement('div')
            congratsMessgae.innerHTML = '<b>Congrats You Have completed this task keep going</b>'



            removeTask.remove()
            editTask.remove()
            completedTask.remove()
            upcomingTask.remove()

            taskSection.append(congratsMessgae)
            finishedTasks.append(taskSection)
            taskSection.style.border = '1px solid green'

            completedThisTask.close()
        })

        let no = document.createElement('button')
        no.innerHTML = 'No'

        no.addEventListener('click', () => {
            completedThisTask.close()
        })


        buttonSeperation.append(yes, no)
        completedThisTask.append(question, buttonSeperation)

    }


    datesControl(todaysDate, `'${taskDateInput.value}'`, taskSection)

    datesControl(todaysDate, `'${taskDateInput.value}'`, upcomingTask)

    


    upcomingTasksControl(todaysDate, `'${taskDateInput.value}'`, upcomingTask)

    
}   

}

}
// Good Work
