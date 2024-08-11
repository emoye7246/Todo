export function Dialogs(section){

 this.section = section

  this.displayDialog = function(){

    let dialog = document.getElementById('formResults')


    let form = document.getElementById('forms')
    form.innerHTML = ' '

    let createTitle = document.createElement('label')
    createTitle.htmlFor = 'createTitle'
    createTitle.innerHTML = 'Name of Task'

    let inputTitle = document.createElement('input')
    inputTitle.id = 'createTitle'

    let createDescription = document.createElement('label')
    createDescription.htmlFor = 'createDescription'
    createDescription.innerHTML = 'Description'

    let descriptionInput = document.createElement('input')
    descriptionInput.id = 'description'

    let createDate = document.createElement('label')
    createDate.htmlFor = 'createDate'

    let dateInput = document.createElement('input')
    dateInput.type = 'date'
    dateInput.id = 'createDate'

    let closeButton = document.createElement('button')
    closeButton.type = 'button'
    closeButton.innerHTML = 'Close'

    closeButton.addEventListener('click', () => {

      let placement = document.createElement('div')
      let titles = document.createElement('div')
      titles.innerHTML = inputTitle.value

      
      section.appendChild(placement)
      placement.appendChild(titles)
      dialog.close()
    })


    form.appendChild(createTitle)
    form.appendChild(inputTitle)
    form.appendChild(createDescription)
    form.appendChild(descriptionInput)
    form.appendChild(createDate)
    form.appendChild(dateInput)
    form.appendChild(closeButton)

    
  }


}