export function projectManager(){

   let projectDialog = document.getElementById('projectDialog')
   let postProject = document.getElementById('postProject')
   let postTasks = document.getElementById('postTasks')

   postProject.style.display = 'flex'
   postTasks.style.display = 'none'

   projectDialog.showModal()


}