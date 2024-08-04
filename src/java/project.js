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

        createTitle.innerHTML = `${this.title}`

        project.appendChild(create)
        create.appendChild(createTitle)




    }


}


// Wow
// Wtf that works