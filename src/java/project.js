export class ProjectManager {
     
    static createProjectDialog(){

        let projectControl = document.getElementById('projectControl')

        let ProjectsContent = document.getElementById('ProjectsContent')
        ProjectsContent.style.display = 'flex'
        
        let taskContent = document.getElementById('taskContent')
        taskContent.style.display = 'none'
        

        projectControl.showModal()

        projectControl.innerHTML = ' '

        let projectTitle = document.createElement('label')
        projectTitle.htmlFor = 'projectName'
        projectTitle.innerHTML = 'Name of Project'

        let projectTitleInput = document.createElement('input')
        projectTitleInput.id = 'projectName'

        let projectDescription = document.createElement('label')
        projectDescription.htmlFor = 'descriptionProject'
        projectDescription.innerHTML = 'Project Description'

        let projectDescriptionInput = document.createElement('input')
        projectDescriptionInput.id = 'descriptionProject'

        let closeProject = document.createElement('button')
        closeProject.innerHTML = 'Close'

        closeProject.addEventListener('click', () => {
            postProject()
            projectControl.close()
        })

        projectControl.append(projectTitle, projectTitleInput, projectDescription, projectDescriptionInput, closeProject)

        function postProject(){

            let projects = document.getElementById('projects')

            let showTitle = document.createElement('div')
            showTitle.id = 'showTitle'
            showTitle.innerHTML = `${projectTitleInput.value}`


            showTitle.addEventListener('click', displayProjects)

            projects.append(showTitle)


        function displayProjects(){
            ProjectsContent.innerHTML = ' '

            let displayProject = document.createElement('div')
            displayProject.id = 'displayProject'

            let buttonProjects = document.createElement('div')
            buttonProjects.id = 'buttonProjects'

            let displayProjectTitle = document.createElement('div')
            displayProjectTitle.innerHTML = `${projectTitleInput.value}`

            let displayProjectDescription = document.createElement('div')
            displayProjectDescription.innerHTML = `${projectDescriptionInput.value}`

            let addExsitingTask = document.createElement('button')
            addExsitingTask.innerHTML = 'Add Existing Task'
            addExsitingTask.type = 'button'

            let addNewTask = document.createElement('button')
            addNewTask.innerHTML = 'Add New Task'
            addExsitingTask.type = 'button'

            let addRemoveProject = document.createElement('button')
            addRemoveProject.innerHTML = 'Remove Project'
            addExsitingTask.type = 'button'


            ProjectsContent.append(displayProject)
            buttonProjects.append(addExsitingTask, addNewTask, addRemoveProject)
            displayProject.append(displayProjectTitle, displayProjectDescription, buttonProjects)
        }
        }
    }
}