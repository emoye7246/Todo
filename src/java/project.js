export default function projectManager(){

    let formResults = document.getElementById('formResults')
    let Close = document.getElementById('close')
    let postProject = document.getElementById('postProject')
    let projectSection = document.createElement('div')

    formResults.showModal()


    Close.addEventListener('click', () => {

        let projectName = document.getElementById('Name-of-Project').value

        projectSection.innerHTML = `${projectName}`

        postProject.appendChild(projectSection)


        formResults.close()

    })

}

// Wow