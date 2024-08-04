import _ from 'lodash';
import '/Users/elijahmoye/Desktop/todo/Todo/src/css/style.css'
import { DialogControl } from './java/dialogs';

let dialog = document.getElementById('formResults')
let addProject = document.getElementById('addProject')

addProject.addEventListener('click', () => {
    dialog.showModal();
    
    let userInput = new DialogControl
    userInput.showProject()

})

