import { format, differenceInCalendarDays } from "date-fns"

export function dateControl(todaysDate, dateInputed, border){


let result = differenceInCalendarDays(dateInputed, todaysDate)

if(result <= 8){

    border.style.border = '1px solid red'
}
else if (result >= 8){

    border.style.border = '1px solid green'

}

}

// Go work on some c# man come back later 
