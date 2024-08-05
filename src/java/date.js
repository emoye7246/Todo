import { addWeeks } from "date-fns"
import { format } from "date-fns"

export function dateControl(){

    let dates = new Date()
    let weeks = addWeeks(dates, 1)
    const see = format(new Date(dates), 'MM/dd/yyyy')



    console.log(see)
}

// Go work on some c# man come back later 