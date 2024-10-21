import { myProjects } from "./projectManager"
import { format } from "date-fns"
import { dateControl } from "../date"

let completed = JSON.parse(localStorage.getItem('complete')) || []

export function myProjectsTasks(myTitle, myDescription, myDate, section, object, element){
        
        
        let hold = document.createElement('div')
        hold.id = 'holdTask'

        let placeTitle = document.createElement('div')
        placeTitle.innerHTML = `Task Title: ${myTitle}`

        let placeDescription = document.createElement('div')
        placeDescription.innerHTML = `Task Description: ${myDescription}`

        let placeDate = document.createElement('div')
        placeDate.innerHTML = `Task Due: ${format(new Date(`'${myDate}'`), 'MMMM do yyyy')}`

        let buttonSection = document.createElement('div')
        buttonSection.id = 'buttonSection'

        let editButton = document.createElement('button')
        editButton.type = 'button'
        editButton.innerHTML = 'Edit'
        editButton.addEventListener('click', editTask)

        let removeButton = document.createElement('button')
        removeButton.type = 'button'
        removeButton.innerHTML = 'Remove'
        removeButton.addEventListener('click', removeTask)

        let completedButton = document.createElement('button')
        completedButton.type = 'button'
        completedButton.innerHTML = 'Completed'

        completedButton.addEventListener('click', () => {

                completedTask()
        })

        let todaysDate = `'${new Date()}'`

        let dateInputed = `'${myDate}'`

        dateControl(todaysDate, dateInputed, hold)
        

        buttonSection.append(editButton, removeButton, completedButton)
        hold.append(placeTitle, placeDescription, placeDate, buttonSection)
        section.append(hold)



        function removeTask(){

                if(object.taskProjects.indexOf(element) == object.taskProjects.indexOf(element)){

                        object.taskProjects.splice(object.taskProjects.indexOf(element), 1)
                        hold.remove()
        
                        localStorage.setItem('projects', JSON.stringify(myProjects))

                        upcomingInProjects(object)
                       }
                else {
                        console.log('hello')
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

                        element.TaskName = `${taskTitleInputEdit.value}`
                        element.TaskDescription = `${taskDescriptionInputEdit.value}`
                        element.TaskDate = `${taskDateInputEdit.value}`

                        placeTitle.innerHTML = `Task Title: ${element.TaskName}`
                        placeDescription.innerHTML = `Task Description: ${element.TaskDescription}`
                        placeDate.innerHTML = `Task Due: ${format(new Date(`'${element.TaskDate}'`), 'MMMM do yyyy')}`

                        localStorage.setItem('projects', JSON.stringify(myProjects))

                       upcomingInProjects(object)

                       dateControl(todaysDate, element.TaskDate, hold)

                        userInput.close()
                })

                userInputDivEdit.append(taskTitleEdit, taskTitleInputEdit, taskDescriptionEdit, taskDescriptionInputEdit, taskDateEdit, taskDateInputEdit, closeButtonEdit)
                userInput.append(userInputDivEdit)


                
        }

        function completedTask(){

                completed.push(element)

                localStorage.setItem('complete', JSON.stringify(completed))

                hold.remove()

               if(object.taskProjects.indexOf(element) == object.taskProjects.indexOf(element)){

                object.taskProjects.splice(object.taskProjects.indexOf(element), 1)

                localStorage.setItem('projects', JSON.stringify(myProjects))

                upcomingInProjects(object)

               }

               completedTaskDisplays(element.TaskName, element.TaskDescription, element.TaskDate)
        }

        upcomingInProjects(object)



}

function completedTaskDisplays(userTitle, userDescription, userDate){


    let CompletedTasks = document.getElementById('CompletedTasks')

    let storeComplete = document.createElement('div')
    storeComplete.id = 'storeCompleted'

    let completeTitle = document.createElement('div')
    completeTitle.innerHTML = `Task Name: ${userTitle}`

    let completeDescription = document.createElement('div')
    completeDescription.innerHTML = `Task Description: ${userDescription}`

    let completeDate = document.createElement('div')
    completeDate.innerHTML = `Task Due: ${format(new Date(`'${userDate}'`), 'MMMM do yyyy')}`

    let congratsMessage = document.createElement('div')
    congratsMessage.style.color = 'green'
    congratsMessage.innerHTML = 'Congrats on completing this task lets keep this going '

    storeComplete.append(completeTitle, completeDescription, completeDate, congratsMessage)
    CompletedTasks.append(storeComplete)
}

export function upcomingInProjects(obj){

                let upComingMyProjects = document.getElementById('upComingMyProjects')
                upComingMyProjects.innerHTML = ' '

        obj.taskProjects.forEach((element) => {

              let storeTaskContent = document.createElement('div')
                storeTaskContent.id = 'storeTaskContent'

              let placeTitle = document.createElement('div')
              placeTitle.innerHTML = `Task Name: ${element.TaskName}`

              let placeDescription = document.createElement('div')
              placeDescription.innerHTML = `Task Description: ${element.TaskDescription}`

              let placeDate = document.createElement('div')
              placeDate.innerHTML = `Task Due: ${format(new Date(`'${element.TaskDate}'`), 'MMMM do yyyy')}`

              let upComingMessage = document.createElement('div')
              upComingMessage.innerHTML = `This task is located in the ${obj.projectName} Project`
        
                storeTaskContent.append(placeTitle, placeDescription, placeDate, upComingMessage)
                upComingMyProjects.append(storeTaskContent)

        })
}

// Finish Remove Project