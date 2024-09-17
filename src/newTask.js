let content = document.getElementById('content')


export function createTaskDisplay(userTitle, userDescription, userDate){

    let storeTaskElements = document.createElement('div')
    storeTaskElements.id = 'storeTaskElements'

    let taskTitle = document.createElement('div')
    taskTitle.innerHTML = `TaskName: ${userTitle}`

    let taskDescription = document.createElement('div')
    taskDescription.innerHTML = `Description: ${userDescription}`

    let taskDate = document.createElement('div')
    taskDate.innerHTML = `${userDate}`


    storeTaskElements.append(taskTitle, taskDescription, taskDate)
    content.append(storeTaskElements)
}
