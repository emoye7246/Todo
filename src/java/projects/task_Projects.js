

export function myProjectsTasks(myTitle, myDescription, myDate, section){


        let hold = document.createElement('div')
        hold.id = 'holdTask'

        let placeTitle = document.createElement('div')
        placeTitle.innerHTML = `<b>Task Title:</b> ${myTitle}`

        let placeDescription = document.createElement('div')
        placeDescription.innerHTML = `<b>Task Description:</b>${myDescription}`

        let placeDate = document.createElement('div')
        placeDate.innerHTML = `<b>Task Date:</b>${myDate}`

        hold.append(placeTitle, placeDescription, placeDate)
        section.append(hold)



}