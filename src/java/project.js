export class ProjectManager {
     
    static createProjectDialog(){

        let projectControl = document.getElementById('projectControl')

        let ProjectsContent = document.getElementById('ProjectsContent')
        ProjectsContent.style.display = 'flex'
        

        let storePlaceElements = document.createElement('div')

        let storePlaceTasks = document.createElement('div')
        storePlaceTasks.id = 'storePlaceTask'
        
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

            projects.append(showTitle)


            function projectShow(){

                ProjectsContent.style.display = 'flex'

                taskContent.style.display = 'none'

                ProjectsContent.innerHTML = ' '

                storePlaceElements.innerHTML = ' '


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

                let addNewTask = document.createElement('button')
                addNewTask.innerHTML = 'Add New Task'

                addNewTask.addEventListener('click', addTheTask)



    
                ProjectsContent.append(storePlaceElements, storePlaceTasks)
                storePlaceElements.append(placeElements)
                buttonSeperate.append(addExistingTasks, addNewTask)
                placeElements.append(displayProjectTitle, displayProjectDescription, buttonSeperate)



            }

            function addTheTask(){

                let addTasktoProject = document.getElementById('addTasktoProject')
                addTasktoProject.showModal()

                addTasktoProject.innerHTML = ' '

                let holderFor = document.createElement('div')

                let projectTaskHeader = document.createElement('h2')
                projectTaskHeader.innerHTML = 'Add Task to Project'

                let projectTaskTitle = document.createElement('label')
                projectTaskTitle.innerHTML = 'Name of Task'
                projectTaskTitle.htmlFor = 'ProjectTaskTitle'

                let projectTaskTitleInput = document.createElement('input')
                projectTaskTitleInput.id = 'ProjectTaskTitle'

                let projectTaskDescription = document.createElement('label')
                projectTaskDescription.innerHTML = 'Task Description'
                projectTaskDescription.htmlFor = 'projectTaskDescription'

                let projectTaskDescriptionInput = document.createElement('input')
                projectTaskDescriptionInput.id = 'projectTaskDescription'

                let projectTaskDate = document.createElement('label')
                projectTaskDate.innerHTML = 'Due Date'
                projectTaskDate.htmlFor = 'projectTaskDate'

                let projectTaskDateInput = document.createElement('input')
                projectTaskDateInput.type = 'date'
                projectTaskDateInput.id = 'projectTaskDate'

                let closeAddTasktoProject = document.createElement('button')
                closeAddTasktoProject.innerHTML = 'Close'
                closeAddTasktoProject.type = 'button'

                closeAddTasktoProject.addEventListener('click', postToProjectPage)

                addTasktoProject.append(holderFor)
                holderFor.append(projectTaskHeader, projectTaskTitle, projectTaskTitleInput, projectTaskDescription, projectTaskDescriptionInput, projectTaskDate, projectTaskDateInput, closeAddTasktoProject)


                function postToProjectPage(){

                    let pageTaskHeader = document.createElement('h3')
                    pageTaskHeader.innerHTML = 'Your Task in This Project'

                    let pageTaskTitle = document.createElement('div')
                    pageTaskTitle.innerHTML = `${projectTaskTitleInput.value}`

                    let pageTaskDescription = document.createElement('div')
                    pageTaskDescription.innerHTML = `${projectTaskDescriptionInput.value}`

                    let pageTaskDate = document.createElement('div')
                    pageTaskDate.innerHTML = `${projectTaskDateInput.value}`

                    let pageButtons = document.createElement('div')
                    pageButtons.id = 'pageButtons'

                    let pageEditTask = document.createElement('button')
                    pageEditTask.type = 'button'
                    pageEditTask.innerHTML = 'Edit'

                    let pageRemoveTask = document.createElement('button')
                    pageRemoveTask.type = 'button'
                    pageRemoveTask.innerHTML = 'Remove'

                    pageButtons.append(pageEditTask, pageRemoveTask)
                    storePlaceTasks.append(pageTaskHeader, pageTaskTitle, pageTaskDescription, pageTaskDate, pageButtons)

                    addTasktoProject.close()
                }


            }

            // Here lies the issue

    }

}

}