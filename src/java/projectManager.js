export function projectManager(){

   let projectDialog = document.getElementById('projectDialog')
   let postProject = document.getElementById('postProject')
   let postTasks = document.getElementById('postTasks')
   let projectForms = document.getElementById('projectForms')
   let projects = document.getElementById('projects')

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

      projects.appendChild(sideProject)

      projectDialog.close()
   })
   // ON

   projectForms.append(createHeader, nameProject, nameProjectInput, projectDescription, projectDescriptionInput, closeProjectDialog)



}