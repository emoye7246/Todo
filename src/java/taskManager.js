
export class TaskContol {

    constructor(titles, descriptions, dates){
        this.titles = titles, 
        this.descriptions = descriptions, 
        this.dates = dates
        
    }

   static taskDialogs(){

        let tasksLibrary = document.getElementById('tasksLibrary')
        let taskLibrary = document.createElement('button')


        let Welcome = document.getElementById('Welcome')
        Welcome.innerHTML = 'Your Tasks'

        let taskDialog = document.getElementById('taskDialog')
        let taskForms = document.getElementById('taskForms')
        taskForms.innerHTML = ' '

        taskDialog.showModal()

        let header = document.createElement('h1')
        header.innerHTML = 'Create Your Tasks'


        let taskName = document.createElement('label')
        taskName.innerHTML = 'Task Name'
        taskName.className = 'taskName'
        taskName.htmlFor = 'taskName'

        let nameInput = document.createElement('input')
        nameInput.id = 'taskName'

        nameInput.placeholder = 'Walk my Dog'

        let taskDescription = document.createElement('label')
        taskDescription.innerHTML = 'Task Description'
        taskDescription.htmlFor = 'taskDescription'

        let descriptionInput = document.createElement('input')
        descriptionInput.id = 'taskDescription'
        descriptionInput.placeholder = 'Walk 5 miles'


        let taskDate = document.createElement('label')
        taskDate.innerHTML = 'Due Date'
        taskDate.htmlFor = 'taskDate'

        let dateInput = document.createElement('input')
        dateInput.type = 'date'
        dateInput.id = 'taskDate'

        let button = document.createElement('button')
        button.type = 'button'
        button.innerHTML = 'Close'

        // Everything Displays

        button.addEventListener('click', () => {

            let postTasks = document.getElementById('postTasks')
            let postProject = document.getElementById('postProject')
            let closeTasks = document.getElementById('closeTasks')
            

            postTasks.style.display = 'flex'
            postProject.style.display = 'none'

            // Top section

            let placeCard = document.createElement('div')
            placeCard.id = 'placeCard'

            let taskTitle = document.createElement('div')
            taskTitle.id = 'taskTitles'
            taskTitle.innerHTML = `${nameInput.value}`






            let taskInfo = document.createElement('div')
            taskInfo.id = 'taskInfo'
            taskInfo.innerHTML = `${descriptionInput.value}`

            let taskDates = document.createElement('div')
            taskDates.id = 'taskDates'
            taskDates.innerHTML = `${dateInput.value}`

            taskLibrary.innerHTML = `${nameInput.value}`
            taskLibrary.addEventListener('click', () => {
                let sendToProject = document.createElement('div')

                let taskProjectTitle = document.createElement('div')
                taskProjectTitle.innerHTML = `${nameInput.value}`

                let taskDescriptionProject = document.createElement('div')
                taskDescriptionProject.innerHTML = `${descriptionInput.value}`


                let taskDateProject = document.createElement('div')
                taskDateProject.innerHTML = `${dateInput.value}`
                let taskSection = document.getElementById('taskSection')

                tasksLibrary.close()
                taskSection.append(sendToProject)
                sendToProject.append(taskProjectTitle, taskDescriptionProject, taskDateProject)
            })
            tasksLibrary.insertBefore(taskLibrary, closeTasks)
            // Mid Section
            let changes = document.createElement('div')
            changes.id = 'changes'
        
            let editButton = document.createElement('button')
            editButton.innerHTML = 'Edit'
            editButton.addEventListener('click', () => {

                let editTasks = document.getElementById('editTasks')
                editTasks.showModal()

                editTasks.innerHTML = ' '

                let closeEdit = document.createElement('button')
                closeEdit.innerHTML = 'Close edit'
                closeEdit.addEventListener('click', () => {

                    
                   let taskTitleEdit = taskTitle
                   taskTitleEdit.innerHTML = `${nameInput.value}`

                    let taskInfoEdit = taskInfo
                    taskInfoEdit.innerHTML = `${descriptionInput.value}`

                    let taskDateInfo = taskDates
                    taskDateInfo.innerHTML = `${dateInput.value}`

                    
                    editTasks.close()
                })

                // Renaming gives you more clarity then getting Element by Id

                editTasks.append(header, taskName, nameInput, taskDescription, descriptionInput, taskDate, dateInput, closeEdit)






            })



            let addTo = document.createElement('button')
            addTo.innerHTML = 'Add to Project'
            addTo.className = 'addTo'


            let removeButton = document.createElement('button')
            removeButton.className = 'removeButton'
            removeButton.innerHTML = 'Remove'
            

            removeButton.addEventListener('click', () => {
                let placeCardRemove = placeCard
                let taskLibraryRemove = taskLibrary
                placeCardRemove.remove()
                taskLibraryRemove.remove()
                // Okay steve Wazni
            })

           
            postTasks.appendChild(placeCard)
            changes.append(editButton, addTo, removeButton)
            placeCard.append(taskTitle, taskInfo, taskDates, changes)

            taskDialog.close()
        })

        taskForms.append(header, taskName, nameInput, taskDescription, descriptionInput, taskDate, dateInput, button)
        
    }
    // We can work something out with this 
}