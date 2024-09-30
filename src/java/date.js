import { addWeeks } from "date-fns"
import { format, differenceInCalendarDays } from "date-fns"

export function dateControl(todaysDate, dateInputed, border){


let result = differenceInCalendarDays(dateInputed, todaysDate)

if(result <= 8){

    border.style.border = '1px solid red'
}
else if (result >= 8){

    border.style.border = '1px solid green'

}

console.log(result)
}

// Go work on some c# man come back later 
