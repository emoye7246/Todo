let projects = document.getElementById('projects')
let myProjects = []

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
             
            this.postTask(this.projectTitles)
            
            userInput.close()
        })

        projectDiv.append(projectTitle, projectTitleInput, projectDescription, projectDescriptionInput, closeButton)
        userInput.append(projectDiv)
    }

    postTask(title){


        let showProjectBox = document.createElement('div')
        showProjectBox.id = 'showBox'

        showProjectBox.innerHTML = `${title}`

        projects.append(showProjectBox)
    }


}