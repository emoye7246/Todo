import { addWeeks } from "date-fns"
import { format } from "date-fns"

export function dateControl(){

    let dates = new Date('09/18/2007')
    let weeks = addWeeks(dates, 1)
    const see = format(new Date(dates), 'MM/dd/yyyy')



    console.log(dates)
}

// Go work on some c# man come back later 