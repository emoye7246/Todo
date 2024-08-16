export class TaskContol {

    constructor(titles, descriptions, dates){
        this.titles = titles, 
        this.descriptions = descriptions, 
        this.dates = dates
        
    }

    

    taskDialogs(){

        let Welcome = document.getElementById('Welcome')
        Welcome.innerHTML = 'Your Tasks'

        let taskDialog = document.getElementById('taskDialog')
        let taskForms = document.getElementById('taskForms')
        taskForms.innerHTML = ' '

        taskDialog.showModal()


        let taskName = document.createElement('label')
        taskName.innerHTML = 'Task Name'
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




        taskForms.append(taskName, nameInput, taskDescription, descriptionInput, taskDate, dateInput)
    }

    taskContent(){
        let taskDialog = document.getElementById('taskDialog')
        let taskForms = document.getElementById('taskForms')



        let button = document.createElement('button')
        button.type = 'button'
        button.innerHTML = 'close'
        
        button.addEventListener('click', () => {
            taskDialog.close()
        })

        taskForms.append(button)
        

    }
}