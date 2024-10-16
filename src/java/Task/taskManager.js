import { createTaskDisplay } from "./newTask"
import { completedTaskDisplay } from "./newTask"

let content = document.getElementById('content')
export let myTasks = []
export let completed = [


]


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

        let userInputDiv = document.createElement('div')
        userInputDiv.id = 'userInputDiv'
    
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

           let Welcome = document.getElementById('Welcome')

           Welcome.innerHTML = 'Your Tasks'
           
           this.createMyTask()


            userInput.close()
        })
        
    
        userInputDiv.append(taskTitle, taskTitleInput, taskDescription, taskDescriptionInput, taskDate, taskDateInput, closeButton)
        userInput.append(userInputDiv)

    
        
        }

        createMyTask() {
    
            
             let createTask = {
         
             TaskName: `${this.titleInput}`, 
         
             TaskDescription: `${this.titleDescription}`, 
         
             TaskDate: `${this.titleDate}`, 

             id: Math.random()
            }

        
            
            this.storeMyTask(createTask)

           createTaskDisplay(createTask.TaskName, createTask.TaskDescription, createTask.TaskDate, createTask)
            
            
        }
        

        storeMyTask(object){

            myTasks.push(object) 
            localStorage.setItem('tasks', JSON.stringify(myTasks))

        }
        
        loadMyTask(){

           let hello = JSON.parse(localStorage.getItem('tasks')) || []

           hello.forEach((element) => {

           this.storeMyTask(element)

           createTaskDisplay(element.TaskName, element.TaskDescription, element.TaskDate, element)

           })
        }

        loadCompleted(){

            let completed = JSON.parse(localStorage.getItem('complete')) || []

            completed.forEach((element) => {

                completedTaskDisplay(element.TaskName, element.TaskDescription, element.TaskDate)
            })
        }

        loadTaskOnClick(){

            let Home = document.getElementById('Home')

            Home.addEventListener('click', () => {

            let myTask = JSON.parse(localStorage.getItem('tasks')) || []

            let taskContent = document.getElementById('taskContent')

            taskContent.innerHTML = ' '


                myTask.forEach((element) => {

                    createTaskDisplay(element.TaskName, element.TaskDescription, element.TaskDate, element)
                })
            })
        }
}
// ok
new TaskManager().loadMyTask()
new TaskManager().loadTaskOnClick()
new TaskManager().loadCompleted()
