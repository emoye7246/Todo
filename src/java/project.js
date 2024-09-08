import { format } from "date-fns";
import { datesControl } from "./dates";
import { upcomingTasksControl } from "./dates";

export class ProjectManager {
     
    static createProjectDialog(){

        let todaysDate = new Date()

        let projectControl = document.getElementById('projectControl')

        let myCompletedTask = document.getElementById('myCompletedTask')

        let upcomingContent = document.getElementById('upcomingContent')

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

                upcomingContent.style.display = 'none'

                myCompletedTask.style.display = 'none'

                


                ProjectsContent.innerHTML = ' '

                storePlaceElements.innerHTML = ' '

                
                let Welcome = document.getElementById('Welcome')
                Welcome.innerHTML = 'Your Projects'

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

                addExistingTasks.addEventListener('click', addPreviousTask)

                let addNewTask = document.createElement('button')
                addNewTask.innerHTML = 'Add New Task'

                let removeProject = document.createElement('button')
                removeProject.innerHTML = 'Delete Project'

                let editProject = document.createElement('button')
                editProject.innerHTML = 'Edit Project'

                addNewTask.addEventListener('click', addTheTask)



    
                ProjectsContent.append(storePlaceElements, storePlaceTasks)
                storePlaceElements.append(placeElements)
                buttonSeperate.append(addExistingTasks, addNewTask, editProject, removeProject)
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

                closeAddTasktoProject.addEventListener('click', () => {

                    postToProjectPage()
                    addTasktoProject.close()

                })

                addTasktoProject.append(holderFor)
                holderFor.append(projectTaskHeader, projectTaskTitle, projectTaskTitleInput, projectTaskDescription, projectTaskDescriptionInput, projectTaskDate, projectTaskDateInput, closeAddTasktoProject)



                function postToProjectPage(){

                    let holdTheProject = document.createElement('div')
                    holdTheProject.id = 'holdTheProject'

                    let holdTheProjectUpcoming = document.createElement('div')
                    holdTheProjectUpcoming.id = 'holdTheProjectUpcoming'
                    
                    let pageTaskHeader = document.createElement('h3')
                    pageTaskHeader.innerHTML = 'Your Task in This Project'


                    let pageTaskTitle = document.createElement('div')
                    pageTaskTitle.innerHTML = `<b>Task Name</b>: ${projectTaskTitleInput.value}`

                    let upcomingPageTaskTitle = document.createElement('div')
                    upcomingPageTaskTitle.innerHTML = `<b>Task Name</b>: ${projectTaskTitleInput.value}`


                    let pageTaskDescription = document.createElement('div')
                    pageTaskDescription.innerHTML = `<b>Task Description</b>: ${projectTaskDescriptionInput.value}`

                    let upcomingPageTaskDescription = document.createElement('div')
                    upcomingPageTaskDescription.innerHTML = `<b>Task Description</b>: ${projectTaskDescriptionInput.value}`

                    let pageTaskDate = document.createElement('div')
                    pageTaskDate.innerHTML = `<b> Due Date</b>: ${format(new Date(`'${projectTaskDateInput.value}'`), 'MMMM do yyyy')}`

                    let upcomingPageTaskDate = document.createElement('div')
                    upcomingPageTaskDate.innerHTML = ` <b> Due Date </b>: ${format(new Date(`'${projectTaskDateInput.value}'`), 'MMMM do yyyy')}`

                    let upcomingTaskLocation = document.createElement('div')
                    upcomingTaskLocation.innerHTML = `<b> This task is in the ${projectTitleInput.value} Project</b>`

                    let pageButtons = document.createElement('div')
                    pageButtons.id = 'pageButtons'

                    let pageEditTask = document.createElement('button')
                    pageEditTask.type = 'button'
                    pageEditTask.innerHTML = 'Edit'

                    pageEditTask.addEventListener('click', editProjectTask)

                    let pageRemoveTask = document.createElement('button')
                    pageRemoveTask.type = 'button'
                    pageRemoveTask.innerHTML = 'Remove'

                    let completed = document.createElement('button')
                    completed.type = 'button'
                    completed.innerHTML = 'Completed'

                    pageRemoveTask.addEventListener('click', removeTasks)

                    pageButtons.append(pageRemoveTask, pageEditTask, completed)
                    holdTheProject.append(pageTaskHeader, pageTaskTitle, pageTaskDescription, pageTaskDate, pageButtons)
                    holdTheProjectUpcoming.append(upcomingPageTaskTitle, upcomingPageTaskDescription, upcomingPageTaskDate, upcomingTaskLocation)
                    storePlaceTasks.append(holdTheProject)



                    function editProjectTask(){

                        let editProjectTaskDisplay = document.getElementById('editProjectTaskDisplay')
                        editProjectTaskDisplay.showModal()

                        editProjectTaskDisplay.innerHTML = ' '

                        let editTaskTitleHeader = document.createElement('h3')
                        editTaskTitleHeader.innerHTML = 'Edit This Task'

                        let editTaskTitleProject = document.createElement('label')
                        editTaskTitleProject.htmlFor = 'taskTitleProject'
                        editTaskTitleProject.innerHTML = 'Task Title'

                        let editTaskTitleProjectInput = document.createElement('input')
                        editTaskTitleProjectInput.id = 'taskTitleProject'

                        let editTaskDescriptionProject = document.createElement('label')
                        editTaskDescriptionProject.htmlFor = 'taskDescriptionProject'
                        editTaskDescriptionProject.innerHTML = 'Task Description'

                        let editTaskDescriptionProjectInput = document.createElement('input')
                        editTaskDescriptionProjectInput.id = 'taskDescriptionProject'


                        let editTaskDateProject = document.createElement('label')
                        editTaskDateProject.htmlFor = 'editDateProject'
                        editTaskDateProject.innerHTML = 'Task Date'


                        let editTaskDateProjectInput = document.createElement('input')
                        editTaskDateProjectInput.type = 'date'
                        editTaskDateProjectInput.id = 'editDateProject'


                        let closeEditProjectTask = document.createElement('button')
                        closeEditProjectTask.innerHTML = 'Close'


                        closeEditProjectTask.addEventListener('click', () => {

                            let pageTaskTitleUpdate = pageTaskTitle
                            pageTaskTitleUpdate.innerHTML = `Task Name: ${editTaskTitleProjectInput.value}`

                            let upcomingPageTaskTitleUpdate = upcomingPageTaskTitle
                            upcomingPageTaskTitleUpdate.innerHTML = `Task Name: ${editTaskTitleProjectInput.value}`

                            let pageTaskDescriptionUpdate = pageTaskDescription
                            pageTaskDescriptionUpdate.innerHTML = `<b> Task Description </b>: ${editTaskDescriptionProjectInput.value}`

                            let upcomingPageTaskDescriptionUpdate = upcomingPageTaskDescription
                            upcomingPageTaskDescriptionUpdate.innerHTML = `Task Description: ${editTaskDescriptionProjectInput.value}`

                            let pageTaskDateUpdate = pageTaskDate
                            pageTaskDateUpdate.innerHTML = `Due Date: ${format(new Date(`'${editTaskDateProjectInput.value}'`), 'MMMM do yyyy')}`

                            let upcomingPageTaskDateUpdate = upcomingPageTaskDate
                            upcomingPageTaskDateUpdate.innerHTML = `Due Date: ${format(new Date(`'${editTaskDateProjectInput.value}'`), 'MMMM do yyyy')}`

                            datesControl(todaysDate, `'${editTaskDateProjectInput.value}'`, holdTheProject)
                            datesControl(todaysDate, `'${editTaskDateProjectInput.value}'`, holdTheProjectUpcoming)

                            upcomingTasksControl(todaysDate, `'${editTaskDateProjectInput.value}'`, holdTheProjectUpcoming)

                            editProjectTaskDisplay.close()
                        })

                        editProjectTaskDisplay.append(editTaskTitleHeader, editTaskTitleProject, editTaskTitleProjectInput, editTaskDescriptionProject, editTaskDescriptionProjectInput, editTaskDateProject, editTaskDateProjectInput, closeEditProjectTask)
                    }

                    function removeTasks(){
                        holdTheProject.remove()
                    }

                    datesControl(todaysDate, `'${projectTaskDateInput.value}'`, holdTheProject)
                    datesControl(todaysDate, `'${projectTaskDateInput.value}'`, holdTheProjectUpcoming)

                    upcomingTasksControl(todaysDate, `'${projectTaskDateInput.value}'`, holdTheProjectUpcoming)

                }


            }

            function addPreviousTask(){

                let storeMyTasks = document.getElementById('storeMyTasks')
                storeMyTasks.showModal()

            }

            // Here lies the issue

    }

}

}