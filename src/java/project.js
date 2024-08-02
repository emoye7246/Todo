export default function projectManager(){

    let welcome = document.getElementById('Welcome')
    let formResults = document.getElementById('formResults')
    let Close = document.getElementById('close')
    let postProject = document.getElementById('postProject')
    let projectSection = document.createElement('div')
    projectSection.id = 'projectSection'


    welcome.innerHTML = 'Projects'


    let postTasks = document.getElementById('postTasks')
    postTasks.style.display = 'none'

    formResults.showModal()


    Close.addEventListener('click', () => {

        let projectName = document.getElementById('Name-of-Project').value

        projectSection.innerHTML = `${projectName}`

        postProject.appendChild(projectSection)

        postProject.style.display = 'inline'



        formResults.close()

    })

}


// Wow
// Wtf that works