import _ from 'lodash';
import '/Users/elijahmoye/Desktop/todo/Todo/src/css/style.css'


let Welcome = document.getElementById('Welcome')
let Home = document.getElementById('Home')

Home.addEventListener('click', () => {
    Welcome.innerHTML = 'Your Tasks'
})