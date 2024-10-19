import { myProjectsTasks } from "./task_Projects"
import { myProjects } from "./projectManager"



let projectContent = document.getElementById('projectContent')



export class projectController{

    constructor(object){

        this.object = object
    }

    showProject(object){

        let project = document.getElementById('projects')

        let placeBoxes = document.getElementById('placeBoxes')

        let showProjectDiv = document.createElement('div')
        showProjectDiv.id = 'showProjectDiv'
        showProjectDiv.innerHTML = `${object.projectName}`

        showProjectDiv.addEventListener('click', () => {

            this.displayProject(object.projectName, object.projectDescriptionName)
        })

        placeBoxes.append(showProjectDiv)

        
    }

    displayProject(title, description){


        projectContent.style.display = 'flex'

        projectContent.innerHTML = ' '

        let myProjectsDisplay = document.createElement('div')
        myProjectsDisplay.id = 'myProjectsDisplay'

        let projectTitle = document.createElement('div')
        projectTitle.innerHTML = `<b>Project Name: </b> ${title}`

        let projectDescription = document.createElement('div')
        projectDescription.innerHTML = `<b>Project Description: </b>${description}`


        let buttonSection = document.createElement('div')
        buttonSection.id = 'buttonSection'

        let addNewTask = document.createElement('button')
        addNewTask.type = 'button'
        addNewTask.innerHTML = 'Add New Task'

        addNewTask.addEventListener('click', () => {

            this.createTheTask()
        })

        let addExistingTask = document.createElement('button')
        addExistingTask.type = 'button'
        addExistingTask.innerHTML = 'Add Existing Task'

        addExistingTask.addEventListener('click', () => {

            this.addExistingTasks()
        })

        let removeProject = document.createElement('button')
        removeProject.type = 'button'
        removeProject.innerHTML = 'Remove Project'

        removeProject.addEventListener('click', () => {

           projectContent.innerHTML = ' '


           let placeBoxes = document.getElementById('placeBoxes')
           placeBoxes.innerHTML = ' '

           myProjects.splice(myProjects.indexOf(this.object), 1)

           myProjects.forEach((element) => {

            this.showProject(element)
           })
           

        })


        buttonSection.append(addNewTask, addExistingTask, removeProject)
        myProjectsDisplay.append(projectTitle, projectDescription, buttonSection)
        projectContent.append(myProjectsDisplay)
        

        
        this.showTask()

    }

    showTask(){

        this.object.taskProjects.forEach((element) => {

            myProjectsTasks(element.TaskName, element.TaskDescription, element.TaskDate, projectContent, this.object, element)
        })
    }

    createTheTask(){



        let userInput = document.getElementById('userInput')
        userInput.innerHTML = ''
    
        userInput.showModal()

        let userInputDiv = document.createElement('div')
        userInputDiv.id = 'userInputDiv'
    
        let taskTitle = document.createElement('label')
        taskTitle.htmlFor = 'taskTitle'
        taskTitle.innerHTML = 'Task Title'
    
        let taskTitleInput = document.createElement('input')
        taskTitleInput.id = 'taskTitle'
    
        let taskDescription = document.createElement('label')
        taskDescription.innerHTML = 'Task Description'
        taskDescription.htmlFor = 'taskDescription'
    
        let taskDescriptionInput = document.createElement('input')
        taskDescriptionInput.id = 'taskDescription'
    
        let taskDate = document.createElement('label')
        taskDate.innerHTML = 'Due Date'
        taskDate.htmlFor = 'taskDate'
    
        let taskDateInput = document.createElement('input')
        taskDateInput.type = 'date'
        taskDateInput.id = 'taskDate'
    
    
        let closeButton = document.createElement('button')
        closeButton.innerHTML = 'Close'


        closeButton.addEventListener('click', () => {

            let newTaskP = {
                
                TaskName: `${taskTitleInput.value}`,

                TaskDescription: `${taskDescriptionInput.value}`,

                TaskDate: `${taskDateInput.value}`, 

                id: Math.random()
            }

            // In order for it to work you must match the taskNames to the same titles as the task objects 
            this.object.taskProjects.push(newTaskP)

            localStorage.setItem('projects', JSON.stringify(myProjects))

            myProjectsTasks(newTaskP.TaskName, newTaskP.TaskDescription, newTaskP.TaskDate, projectContent, this.object, newTaskP)

            userInput.close()
        })
            
        userInputDiv.append(taskTitle, taskTitleInput, taskDescription, taskDescriptionInput, taskDate, taskDateInput, closeButton)
        userInput.append(userInputDiv)

    }

    addExistingTasks(){

        let myTasks = JSON.parse(localStorage.getItem('tasks')) || []

        let userInput = document.getElementById('userInput')

        userInput.innerHTML = ' '

        userInput.showModal()

            let headerTask = document.createElement('div')
            headerTask.id = 'headerTask'

        myTasks.forEach((element) => {

            let myButtons = document.createElement('button')
            myButtons.type = 'button'
            myButtons.innerHTML = `${element.TaskName}`

            myButtons.addEventListener('click', () => {

                let move = document.getElementById('move')
                move.innerHTML = ' '

                move.showModal()

                let header = document.createElement('div')
                header.innerHTML = 'Are You sure you want add this task'

                let yesButton = document.createElement('button')
                yesButton.type = 'button'
                yesButton.innerHTML = 'Yes'

                yesButton.addEventListener('click', () => {

                    myTasks.splice(myTasks.indexOf(element), 1)
                    
                    localStorage.setItem('tasks', JSON.stringify(myTasks))

                    this.object.taskProjects.push(element)
                   
                    localStorage.setItem('projects', JSON.stringify(myProjects))


                    this.displayProject(this.object.projectName, this.object.projectDescriptionName)

                    move.close()
                    userInput.close()
                    
                })

                let noButton = document.createElement('button')
                noButton.type = 'button'
                noButton.innerHTML = 'No'

                noButton.addEventListener('click', () => {

                    move.close()
                })

                move.append(header, yesButton, noButton)

            })

            headerTask.append(myButtons)
        })

        let closeButton = document.createElement('button')
        closeButton.type = 'button'
        closeButton.innerHTML = 'Close'

        closeButton.addEventListener('click', () => {

            userInput.close()
        })

        headerTask.append(closeButton)
        userInput.append(headerTask)



    }

}

// 
// Passed