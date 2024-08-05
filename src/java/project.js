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
 
          
        
            // yourProject.appendChild(createDescription)
        })



        project.appendChild(create)
        create.appendChild(createTitle)

    }

    displayTask (){
        
    
    let Welcome = document.getElementById('Welcome')
    Welcome.innerHTML = 'Your Tasks'

    let task = document.getElementById('postTasks')

    let placement = document.createElement('div')
    placement.id = 'placement'

    let taskTitle = document.createElement('div')
    taskTitle.id = 'taskTitle'
    taskTitle.innerHTML = `${this.title}`

    let taskDescription = document.createElement('div')
    taskDescription.innerHTML = `${this.description}`

    let taskDate = document.createElement('div')
    taskDate.innerHTML = `This Task is due on ${this.date}`

    let postTasks = document.getElementById('postTasks')
    postTasks.style.display = 'flex'

    let postProject = document.getElementById('postProject')
    postProject.style.display = 'none'


    task.appendChild(placement)
    placement.appendChild(taskTitle)
    placement.appendChild(taskDescription)
    placement.appendChild(taskDate)

    }

}


// Wow
// Wtf that works