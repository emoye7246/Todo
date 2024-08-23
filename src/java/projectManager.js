import { TaskContol } from "./taskManager"

export function projectManager(){

   let projectDialog = document.getElementById('projectDialog')
   let postProject = document.getElementById('postProject')
   let postTasks = document.getElementById('postTasks')
   let projectForms = document.getElementById('projectForms')
   let projects = document.getElementById('projects')
   let tasksLibrary = document.getElementById('tasksLibrary')

   postProject.style.display = 'flex'
   postTasks.style.display = 'none'

   projectDialog.showModal()

   projectForms.innerHTML = ' '


   let createHeader = document.createElement('h1')
   createHeader.innerHTML = 'Create A Project'

   let nameProject = document.createElement('label')
   nameProject.innerHTML = 'Name this Project'
   nameProject.htmlFor = 'projectName'

   let nameProjectInput = document.createElement('input')
   nameProjectInput.placeholder = 'Gym Goals'
   nameProjectInput.id = 'projectName'


   let projectDescription = document.createElement('label')
   projectDescription.innerHTML = 'Describe this project'
   projectDescription.htmlFor = 'projectDescription'

   let projectDescriptionInput = document.createElement('input')
   projectDescriptionInput.placeholder = 'Goals I would like to accomplish'
   projectDescriptionInput.id = 'projectDescription'


   let closeProjectDialog = document.createElement('button')
   closeProjectDialog.type = 'button'
   closeProjectDialog.innerHTML = 'Close'

   closeProjectDialog.addEventListener('click', () => {
      let sideProject = document.createElement('div')
      sideProject.id = 'sideProject'
      sideProject.innerHTML = `${nameProjectInput.value}`


      sideProject.addEventListener('click', () => {
         
         postProject.innerHTML = ' '

         let placeProject = document.createElement('div')
         placeProject.id = 'placeProject'

         let newHeader = document.createElement('h3')
         newHeader.innerHTML = `Title: ${nameProjectInput.value}`

         let projectInfo = document.createElement('div')
         projectInfo.innerHTML = `Description: ${projectDescriptionInput.value}`

         let taskSection = document.createElement('div')
         taskSection.id = 'taskSection'
         


         let addTaskToProject = document.createElement('button')
         addTaskToProject.type = 'button'
         addTaskToProject.innerHTML = 'Add Existing Task'

         addTaskToProject.addEventListener('click', () => {

            tasksLibrary.showModal()

            let closeTasks = document.getElementById('closeTasks')

            closeTasks.addEventListener('click', () =>{
               tasksLibrary.close()
            })
            
         })


         postProject.append(placeProject)
         placeProject.append(newHeader, projectInfo, addTaskToProject, taskSection)
      })

      projects.appendChild(sideProject)

      projectDialog.close()
   })


   // ONclikc display the project along with the descriprion to the page 

   projectForms.append(createHeader, nameProject, nameProjectInput, projectDescription, projectDescriptionInput, closeProjectDialog)

   console.log('hw')
}