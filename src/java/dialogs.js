import { Projects } from "./project"
import { format } from "date-fns"
import { editTasks } from "./boardControl"
export class DialogControl {

  showProject(){
    let dialog = document.getElementById('formResults')

    let form = document.getElementById('forms')
    form.innerHTML = ' '

    let labelName = document.createElement('label')

    labelName.htmlFor = 'Name-of-Project'
    labelName.innerHTML = 'Name of Project'

    let inputName = document.createElement('input')

    inputName.type = 'text'
    inputName.name = 'Name-of-Project'
    inputName.id = 'Name-of-Project'
    inputName.placeholder = 'Project Name'


    let labelInfo = document.createElement('label')

    labelInfo.htmlFor = 'descriptions'
    labelInfo.innerHTML = 'Description'


    let inputInfo = document.createElement('input')

    inputInfo.type = 'text'
    inputInfo.name = 'description'
    inputInfo.id = 'descriptions'
    inputInfo.placeholder = 'Describe This Project'


    let button = document.createElement('button')

    button.type = button
    button.id = 'close'
    button.innerHTML = 'Close'
    


    button.addEventListener('click', () => {
        let name = document.getElementById('Name-of-Project').value
        let description = document.getElementById('descriptions').value
        let userInput = new Projects(name, description)
        userInput.displayProjects()
        dialog.close()
    })

    form.appendChild(labelName)
    form.appendChild(inputName)
    form.appendChild(labelInfo)
    form.appendChild(inputInfo)
    form.appendChild(button)



}

  showTasks(){

    let dialog = document.getElementById('formResults')

    let form = document.getElementById('forms')
    form.innerHTML = ' '

    let labelName = document.createElement('label')

    labelName.htmlFor = 'Name-of-Project'
    labelName.innerHTML = 'Name of Tasks'

    let inputName = document.createElement('input')

    inputName.type = 'text'
    inputName.name = 'Name-of-Project'
    inputName.id = 'Name-of-Project'
    inputName.placeholder = 'Project Name'


    let labelInfo = document.createElement('label')

    labelInfo.htmlFor = 'description'
    labelInfo.innerHTML = 'Description'


    let inputInfo = document.createElement('input')

    inputInfo.type = 'text'
    inputInfo.name = 'description'
    inputInfo.id = 'description'
    inputInfo.placeholder = 'Describe This Project'

    let inputDate = document.createElement('label')
    inputDate.htmlFor = 'date'
    inputDate.innerHTML = 'Due Date'

    let dateInput = document.createElement('input')
    dateInput.type = 'date'
    dateInput.name = 'date'
    dateInput.id = 'date'



    let button = document.createElement('button')

    button.type = button
    button.id = 'close'
    button.innerHTML = 'Close'


    button.addEventListener('click', () => {
        let name = inputName.value
        let describe = inputInfo.value
        let dateInput = document.getElementById('date').value
        let UserDate = new Date(dateInput)
        let formatDate = format(new Date(UserDate), 'MM/dd/yyyy')
        let userInput = new Projects(name, describe, formatDate)
        userInput.displayTask()
        dialog.close() 
    })

    form.appendChild(labelName)
    form.appendChild(inputName)
    form.appendChild(labelInfo)
    form.appendChild(inputInfo)
    form.appendChild(inputDate)
    form.appendChild(dateInput)
    form.appendChild(button)

  }

}