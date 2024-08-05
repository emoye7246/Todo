export class Projects {

    constructor(title, description){

        this.title = title,
        this.description = description
    }

    displayProjects(){
        
        let project = document.getElementById('projects')

        let create = document.createElement('div')
        create.id = 'create'

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


            let postProject = document.getElementById('postProject')
            postProject.style.display = 'flex'
            postProject.innerHTML = ' '

            let postTasks = document.getElementById('postTasks')
            postTasks.style.display = 'none'

            postProject.appendChild(yourProject)
            yourProject.appendChild(createPageTitle)
 
          
        
            // yourProject.appendChild(createDescription)
        })



        project.appendChild(create)
        create.appendChild(createTitle)

    }

    displayTask (){
        
    
    let Welcome = document.getElementById('Welcome')
    Welcome.innerHTML = 'Your Tasks'

    let task = document.getElementById('postTasks')

    let taskTitle = document.createElement('div')
    taskTitle.id = 'taskTitle'
    taskTitle.innerHTML = `${this.title}`

    let postTasks = document.getElementById('postTasks')
    postTasks.style.display = 'flex'

    let postProject = document.getElementById('postProject')
    postProject.style.display = 'none'

    task.appendChild(taskTitle)

    }

}


// Wow
// Wtf that works