
import { projectController } from "./newProjects"
import { completed } from "../Task/taskManager"

export let myProjects = []



export class ProjectManager{

    constructor(projectTitles, projectDescriptions){

        this.projectTitles = projectTitles, 
        this.projectDescriptions = projectDescriptions


    }

    getProjectInfo(){

        let userInput = document.getElementById('userInput')
        userInput.innerHTML = ' '

        userInput.showModal()

        let projectDiv = document.createElement('div')
        projectDiv.id = 'projectDiv'


        let projectTitle = document.createElement('label')
        projectTitle.innerHTML = 'Project Title:'
        projectTitle.htmlFor = 'projectTitle'

        let projectTitleInput = document.createElement('input')
        projectTitleInput.id = 'projectTitle'

        let projectDescription = document.createElement('label')
        projectDescription.innerHTML = 'Project Description:'
        projectDescription.htmlFor = 'projectDescription'

        let projectDescriptionInput = document.createElement('input')
        projectDescriptionInput.id = 'projectDescription'

        let closeButton = document.createElement('button')
        closeButton.type = 'button'
        closeButton.innerHTML = 'Close'

        closeButton.addEventListener('click', () => {

            this.projectTitles = projectTitleInput.value

            this.projectDescriptions = projectDescriptionInput.value
             
            this.createMyProject()
            
            userInput.close()
        })

        projectDiv.append(projectTitle, projectTitleInput, projectDescription, projectDescriptionInput, closeButton)
        userInput.append(projectDiv)
    }

    createMyProject(){


        let myProjectObject = {

            projectName: `${this.projectTitles}`, 

            projectDescriptionName: `${this.projectDescriptions}`,

            id: Math.random(),

            taskProjects: []

        }

        

        this.saveTask(myProjectObject)

        new projectController(myProjectObject).showProject()


    }

    saveTask(object){

        myProjects.push(object)
        localStorage.setItem('projects', JSON.stringify(myProjects))
        
    }

    loadMyTask(){

        let myProjectsLoad = JSON.parse(localStorage.getItem('projects')) || []

        myProjectsLoad.forEach((element) => {

            this.saveTask(element)

            new projectController(element).showProject()


        })
    }


}

new ProjectManager().loadMyTask()