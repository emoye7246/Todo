export function findUserName(){

if(!localStorage.getItem('names')){

    getUserName()
}
else if(localStorage.getItem('names')){

    applyName()
}

}

function getUserName(){

    let userInput = document.getElementById('userInput')

    userInput.innerHTML = ' '

    userInput.showModal()

    let hold = document.createElement('div')
    hold.id = 'hold'

    let createUser = document.createElement('h2')
    createUser.innerHTML = 'Welcome lets get started'

    let askName = document.createElement('label')
    askName.innerHTML = 'What is your name ?'
    askName.htmlFor = 'Names'

    let askNameInput = document.createElement('input')
    askNameInput.id = 'Names'



    let doneButton = document.createElement('button')
    doneButton.innerHTML = 'Done'

    doneButton.addEventListener('click', () => {

        localStorage.setItem('names', JSON.stringify(askNameInput.value))
        applyName()
        userInput.close()
    })

    hold.append(createUser, askName, askNameInput, doneButton)
    userInput.append(hold)
}

function applyName(){

    let namePlace = document.getElementById('namePlace')

    let Welcome = document.getElementById('Welcome')

    let myName = JSON.parse(localStorage.getItem('names'))

    namePlace.innerHTML = `Welcome ${myName}`
    Welcome.innerHTML = `Hello ${myName}`

    
}