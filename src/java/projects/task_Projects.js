

export function myProjectsTasks(myTitle, myDescription, myDate, section){


        let hold = document.createElement('div')

        let placeTitle = document.createElement('div')
        placeTitle.innerHTML = `${myTitle}`

        let placeDescription = document.createElement('div')
        placeDescription.innerHTML = `${myDescription}`

        let placeDate = document.createElement('div')
        placeDate.innerHTML = `${myDate}`

        hold.append(placeTitle, placeDescription, placeDate)
        section.append(hold)

}