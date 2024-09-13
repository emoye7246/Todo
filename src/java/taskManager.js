let content = document.getElementById('content')



export class TaskManager {

    constructor(titleInput, titleDescription, titleDate){

        this.titleInput = titleInput,
        this.titleDescription = titleDescription, 
        this.titleDate = titleDate

    }

    getTaskInfo(){

        let userInput = document.getElementById('userInput')
        userInput.innerHTML = ''
    
        userInput.showModal()
    
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
    
           this.titleInput = taskTitleInput.value
    
           this.titleDescription = taskDescriptionInput.value
    
           this.titleDate = taskDateInput.value    
    
           this.postTask()
    
            userInput.close()
        })
        
    
        userInput.append(taskTitle, taskTitleInput, taskDescription, taskDescriptionInput, taskDate, taskDateInput, closeButton)
    
        
        }


    postTask(){
                        

            let userTitle = document.createElement('div')
            userTitle.innerHTML = `Task Name : ${this.titleInput}`

           
            content.append(userTitle)

            this.storeMyTask()

    }

    storeMyTask(){

        let myTask = []

        content.querySelectorAll('div').forEach(function(element){

            myTask.push(element.innerHTML)

            localStorage.setItem('task', JSON.stringify(myTask))


        })

        console.log(myTask)

    

        
    }

}
// ok
