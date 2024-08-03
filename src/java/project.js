export class Projects {

    constructor(title, description){

        this.title = title,
        this.description = description
    }

    displayProjects(){
        
        let postProject = document.getElementById('postProject')

        let create = document.createElement('div')
        create.id = 'create'

        let createTitle = document.createElement('div')
        let createDescription = document.createElement('div')

        createTitle.innerHTML = `${this.title}`
        createDescription.innerHTML = `${this.description}`

        postProject.appendChild(create)
        create.appendChild(createTitle)
        create.appendChild(createDescription)




    }


}


// Wow
// Wtf that works