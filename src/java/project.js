import { Dialogs } from "./dialogs";

export function projectControl(){

    let addProject = document.getElementById('addProject')
    let postProject = document.getElementById('postProject')


    addProject.addEventListener('click', () => {
    let dialog = document.getElementById('formResults')

    dialog.showModal()

    let showProject = new Dialogs(postProject)
    showProject.displayDialog()

        
    })
}


