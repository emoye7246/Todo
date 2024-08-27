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

            showTitle.addEventListener('click', projectShow)

            function projectShow(){

                ProjectsContent.style.display = 'flex'

                taskContent.style.display = 'none'

                ProjectsContent.textContent = ' '

                let placeElements = document.createElement('div')
                placeElements.id = 'placeElements'
    
                let displayProjectTitle = document.createElement('div')
                displayProjectTitle.innerHTML = `${projectTitleInput.value}`
    
                let displayProjectDescription = document.createElement('div')
                displayProjectDescription.innerHTML = `${projectDescriptionInput.value}`

                let buttonSeperate = document.createElement('div')
                buttonSeperate.id = 'buttonSeperate'

                let addExistingTasks = document.createElement('button')
                addExistingTasks.innerHTML = 'Add Existing Task'

                addExistingTasks.addEventListener('click', getTask)

                let addNewTask = document.createElement('button')
                addNewTask.innerHTML = 'Add New Task'
    
                ProjectsContent.append(placeElements)
                buttonSeperate.append(addExistingTasks, addNewTask)
                placeElements.append(displayProjectTitle, displayProjectDescription, buttonSeperate)


                function getTask(){
                    let storeTasks = document.getElementById('storeTasks')
                    storeTasks.showModal()
                }
            }


            projects.append(showTitle)


    }


}

}