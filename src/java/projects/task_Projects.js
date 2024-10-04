import { completed } from "../Task/taskManager"
import { myProjects } from "./projectManager"

export function myProjectsTasks(myTitle, myDescription, myDate, section, object, element){


        let hold = document.createElement('div')
        hold.id = 'holdTask'

        let placeTitle = document.createElement('div')
        placeTitle.innerHTML = `Task Title: ${myTitle}`

        let placeDescription = document.createElement('div')
        placeDescription.innerHTML = `Task Description: ${myDescription}`

        let placeDate = document.createElement('div')
        placeDate.innerHTML = `Task Date: ${myDate}`

        let buttonSection = document.createElement('div')
        buttonSection.id = 'buttonSection'

        let editButton = document.createElement('button')
        editButton.type = 'button'
        editButton.innerHTML = 'Edit'

        let removeButton = document.createElement('button')
        removeButton.type = 'button'
        removeButton.innerHTML = 'Remove'

        removeButton.addEventListener('click', removeTask)

        let completedButton = document.createElement('button')
        completedButton.type = 'button'
        completedButton.innerHTML = 'Completed'


        buttonSection.append(editButton, removeButton, completedButton)
        hold.append(placeTitle, placeDescription, placeDate, buttonSection)
        section.append(hold)

        function removeTask(){

                if(object.taskProjects.indexOf(element) == object.taskProjects.indexOf(element)){

                        object.taskProjects.splice(object.taskProjects.indexOf(element), 1)
                        hold.remove()
        
                        localStorage.setItem('projects', JSON.stringify(myProjects))
                       }
                else {
                        console.log('hello')
                }        
                
                
        }

}
