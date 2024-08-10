import { boardControl, editTasks } from "./boardControl"


export class Projects {

    constructor(title, description, date){

        this.title = title,
        this.description = description,
        this.date = date
    }

    displayProjects(){
        
        let project = document.getElementById('projects')

        let create = document.createElement('div')
        create.id = 'create'

        let welcome = document.getElementById('Welcome')
        welcome.innerHTML = 'Your Projects'

        let createTitle = document.createElement('div')
        let createDescription = document.createElement('div')


        createTitle.innerHTML = `${this.title}`
        createDescription.innerHTML = `${this.description}`


        create.addEventListener('click', () => {
            
         let welcome = document.getElementById('Welcome')
        welcome.innerHTML = 'Your Projects'

            let yourProject = document.createElement('div')
            yourProject.id = 'yourProject'

            let createPageTitle = document.createElement('div')
            createPageTitle.innerHTML = `${this.title}`

            let createPageDescription = document.createElement('div')
            createPageDescription.innerHTML = `${this.description}`


            let postProject = document.getElementById('postProject')
            postProject.style.display = 'flex'
            postProject.innerHTML = ' '

            let postTasks = document.getElementById('postTasks')
            postTasks.style.display = 'none'

            postProject.appendChild(yourProject)
            yourProject.appendChild(createPageTitle)
            yourProject.appendChild(createPageDescription)
 
          
            // This controls display of task of course 
            // yourProject.appendChild(createDescription)
        })



        project.appendChild(create)
        create.appendChild(createTitle)

        // This controls side bar of projects
        // I know this is considered bad code but its mine 

    }

    displayTask (){
        
    
    let Welcome = document.getElementById('Welcome')
    Welcome.innerHTML = 'Your Tasks'

    let task = document.getElementById('postTasks')

    let empty = document.getElementById('empty')
    empty.style.display = 'none'

    let placement = document.createElement('div')
    placement.id = 'placement'

    let taskTitle = document.createElement('div')
    taskTitle.id = 'taskTitle'
    taskTitle.innerHTML = `${this.title}`

    let taskDescription = document.createElement('div')
    taskDescription.innerHTML = `${this.description}`
    taskDescription.id = 'taskDescription'
    

    let taskDate = document.createElement('button')
    taskDate.innerHTML = `This Task is due on ${this.date}`
    taskDate.id = 'taskDate'

    let editMenu = document.createElement('button')

    editMenu.id = 'editMenu'
    editMenu.innerHTML = 'Edit'

    editMenu.addEventListener('click', () => {
       editTasks()
    })

    let addto = document.createElement('button')
    addto.type = 'button'
    addto.id = 'addTo'
    addto.innerHTML = 'Add to Project'

    addto.addEventListener('click', () => {
        console.log('hello')
    })

    let removeButton = document.createElement('button')
    

    removeButton.id = 'removeButton'
    removeButton.type = 'button'
    removeButton.innerHTML = 'Remove'

    removeButton.addEventListener('click', () => {

        boardControl()

    })

    let postTasks = document.getElementById('postTasks')
    postTasks.style.display = 'flex'

    let postProject = document.getElementById('postProject')
    postProject.style.display = 'none'
    


    task.appendChild(placement)
    placement.appendChild(taskTitle)
    placement.appendChild(taskDescription)
    placement.appendChild(taskDate)
    placement.appendChild(editMenu)
    placement.appendChild(addto)
    placement.appendChild(removeButton)

    }


}


// Wow
// Wtf that works