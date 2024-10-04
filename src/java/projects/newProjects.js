import { myProjects } from "./projectManager"
import { myProjectsTasks } from "./task_Projects"
import { completed } from "../Task/taskManager"


let projectContent = document.getElementById('projectContent')


export class projectController{

    constructor(object){

        this.object = object
    }

    showProject(){

        let project = document.getElementById('projects')

        let showProjectDiv = document.createElement('div')
        showProjectDiv.id = 'showProjectDiv'
        showProjectDiv.innerHTML = `${this.object.projectName}`

        showProjectDiv.addEventListener('click', () => {

            this.displayProject()
        })

        project.append(showProjectDiv)
    }

    displayProject(){



        projectContent.style.display = 'flex'

        projectContent.innerHTML = ' '

        let myProjectsDisplay = document.createElement('div')
        myProjectsDisplay.id = 'myProjectsDisplay'

        let projectTitle = document.createElement('div')
        projectTitle.innerHTML = `<b>Project Name: </b> ${this.object.projectName}`

        let projectDescription = document.createElement('div')
        projectDescription.innerHTML = `<b>Project Description: </b>${this.object.projectDescriptionName}`


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

        let removeProject = document.createElement('button')
        removeProject.type = 'button'
        removeProject.innerHTML = 'Remove Project'


        buttonSection.append(addNewTask, addExistingTask, removeProject)
        myProjectsDisplay.append(projectTitle, projectDescription, buttonSection)
        projectContent.append(myProjectsDisplay)
        

        
        this.showTask()

    }

    showTask(){

        this.object.taskProjects.forEach((element) => {

            myProjectsTasks(element.taskNames, element.taskDescriptions, element.taskDates, projectContent, this.object, element)
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
                
                taskNames: `${taskTitleInput.value}`,

                taskDescriptions: `${taskDescriptionInput.value}`,

                taskDates: `${taskDateInput.value}`
            }

            this.object.taskProjects.push(newTaskP)

            localStorage.setItem('projects', JSON.stringify(myProjects))

            myProjectsTasks(newTaskP.taskNames, newTaskP.taskDescriptions, newTaskP.taskDates, projectContent, this.object, newTaskP)

            userInput.close()
        })
            
        userInputDiv.append(taskTitle, taskTitleInput, taskDescription, taskDescriptionInput, taskDate, taskDateInput, closeButton)
        userInput.append(userInputDiv)

    }



}

// Passed