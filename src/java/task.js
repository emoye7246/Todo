export function createTask(){

    let welcome = document.getElementById('Welcome')
    let taskResults = document.getElementById('taskResult')
    let Closes = document.getElementById('closes')
    let postTasks = document.getElementById('postTasks')
    let tasksSection = document.createElement('div')
    tasksSection.id = 'taskSection'


    let postProject = document.getElementById('postProject')
    postProject.style.display = 'none'

    welcome.innerHTML = 'Task'

    taskResults.showModal()

    Closes.addEventListener('click', () => {

        let taskName = document.getElementById('Name-of-Task').value

        tasksSection.innerHTML = `${taskName}`

        postTasks.appendChild(tasksSection)

        postTasks.style.display = 'inline'


        taskResults.close()
    })

}