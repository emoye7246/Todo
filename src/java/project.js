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

            let seperateProjects = document.createElement('div')
            seperateProjects.id = 'seperateProjects'
            
            let showTitle = document.createElement('div')
            showTitle.id = 'showTitle'
            showTitle.innerHTML = `${projectTitleInput.value}`

            let showTitleNotify = document.createElement('div')
            showTitleNotify.id = 'showTitleNotify'

            showTitle.addEventListener('click', projectShow)

        

            seperateProjects.append(showTitle, showTitleNotify)
            projects.append(seperateProjects)


            function projectShow(){

                ProjectsContent.style.display = 'flex'

                taskContent.style.display = 'none'

                upcomingContent.style.display = 'none'

                myCompletedTask.style.display = 'none'

                showTitleNotify.style.display = 'none'

                


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
                addNewTask.addEventListener('click', addTheTask)


                let removeProject = document.createElement('button')
                removeProject.innerHTML = 'Delete Project'

                removeProject.addEventListener('click', removeThisProject)

                let editProject = document.createElement('button')
                editProject.innerHTML = 'Edit Project'

                editProject.addEventListener('click', editThisProject)





    
                ProjectsContent.append(storePlaceElements, storePlaceTasks)
                storePlaceElements.append(placeElements)
                buttonSeperate.append(addExistingTasks, addNewTask, editProject, removeProject)
                placeElements.append(displayProjectTitle, displayProjectDescription, buttonSeperate)


                
                function removeThisProject(){
                    
                    storePlaceElements.remove()
                    showTitle.remove()
                }

                function editThisProject(){
                    let editThisProjects = document.getElementById('editThisProjects')

                    editThisProjects.showModal()

                    editThisProjects.innerHTML = ' '

                    let editProjectsTitle = document.createElement('label')
                    editProjectsTitle.htmlFor = 'editProjectsTitle'
                    editProjectsTitle.innerHTML = 'Project Name'


                    let editProjectsTitleInput = document.createElement('input')
                    editProjectsTitleInput.id = 'editProjectsTitle'

                    let editProjectsDescription = document.createElement('label')
                    editProjectsDescription.htmlFor = 'editProjectsDescription'
                    editProjectsDescription.innerHTML = 'Projects Description'

                    let editProjectsDescriptionInput = document.createElement('input')
                    editProjectsDescriptionInput.id = 'editProjectsDescription'

                    let closeEditProjects = document.createElement('button')
                    closeEditProjects.type = 'button'
                    closeEditProjects.innerHTML = 'Close'

                    closeEditProjects.addEventListener('click', () => {

                        let newProjectTitle = displayProjectTitle
                        newProjectTitle.innerHTML = `${editProjectsTitleInput.value}`

                        let newProjectDescription = displayProjectDescription
                        newProjectDescription.innerHTML = `${editProjectsDescriptionInput.value}`

                        showTitle.innerHTML = `${editProjectsTitleInput.value}`

                        editThisProjects.close()

                    })

                    editThisProjects.append(editProjectsTitle, editProjectsTitleInput, editProjectsDescription, editProjectsDescriptionInput, closeEditProjects)
                }




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

                    pageRemoveTask.addEventListener('click', removeTasks)
                    

                    let completed = document.createElement('button')
                    completed.type = 'button'
                    completed.innerHTML = 'Completed'

                    completed.addEventListener('click', completedThisTask)


                    let myIcons = document.getElementById('myIcons')
                    myIcons.innerHTML = ' '

                    let upcomingProjectst = document.createElement('div')
                    upcomingProjectst.id = 'upcomingProjectst'

                    myIcons.append(upcomingProjectst)


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

                    function completedThisTask(){

                        let completedThisTask = document.getElementById('completedThisTask')

                        completedThisTask.showModal()

                        completedThisTask.innerHTML = ' '

                        let questionProject = document.createElement('h2')
                        questionProject.innerHTML = 'Has this task been Completed'

                        let buttonSeperationProject = document.createElement('div')
                        buttonSeperationProject.id = 'buttonSeperationProject'

                        let yesProject = document.createElement('button')
                        yesProject.innerHTML = 'Yes'

                        yesProject.addEventListener('click', () => {
                            let finishedTasksProject = document.getElementById('finishedTasks')

                            let congratsMessgaeProject = document.createElement('div')
                            congratsMessgaeProject.innerHTML = '<b>Congrats You Have completed this task keep going</b>'

                            pageRemoveTask.remove()
                            completed.remove()
                            pageEditTask.remove()
                            holdTheProjectUpcoming.remove()

                            holdTheProject.append(congratsMessgaeProject)
                            finishedTasksProject.append(holdTheProject)
                            holdTheProject.style.border = '1px solid green'

                            let myIconsComplete = document.getElementById('myIconsComplete')
                            myIconsComplete.innerHTML = ' '

                            let completedProjectNotify = document.createElement('div')
                            completedProjectNotify.id = 'completedProjectNotify'

                            myIconsComplete.append(completedProjectNotify)

                            completedThisTask.close()
                        })

                        let noProject = document.createElement('button')
                        noProject.innerHTML = 'No'

                        noProject.addEventListener('click', () => {
                            completedThisTask.close()
                        })

                        buttonSeperationProject.append(yesProject, noProject)
                        completedThisTask.append(questionProject, buttonSeperationProject)


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