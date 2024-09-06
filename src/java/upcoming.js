export function upcomingDates(taskTitle, taskDescription, taskDate){

    let upcomingContent  = document.getElementById('upcomingContent')
    let taskContent = document.getElementById('taskContent')
    let ProjectsContent = document.getElementById('ProjectsContent')
    let Welcome = document.getElementById('Welcome')


    taskContent.style.display = 'none'
    ProjectsContent.style.display = 'none'
    upcomingContent.style.display = 'flex'

    Welcome.innerHTML = 'Upcoming Tasks'


}