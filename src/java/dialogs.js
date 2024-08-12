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
    createDescription.htmlFor = 'description'
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

      let holder = document.createElement('div')
      holder.id = 'holder'

      let sectionName = document.createElement('div')
      sectionName.id = 'sectionName'
      sectionName.innerHTML = `${inputTitle.value}`

      let sectionDescription = document.createElement('div')
      sectionDescription.innerHTML = `${descriptionInput.value}`

      section.appendChild(holder)
      holder.appendChild(sectionName)
      holder.appendChild(sectionDescription)

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