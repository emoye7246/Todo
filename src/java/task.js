export function createTask(){

    let create = document.createElement('dialog')

    create.close()


    let p = document.createElement('p')
    p.innerHTML = 'Sofu'
    create.showModal()

    create.appendChild(p)

}