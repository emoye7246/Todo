import { differenceInCalendarDays, format} from "date-fns";

// YY/MM/DD

export function datesControl(dateNow, dateInputed, border){

    let checkDate = differenceInCalendarDays(dateInputed, (dateNow))



    if(checkDate < 8){

        console.log(checkDate)
        console.log(`This task is Due in less than ${checkDate} days`)
        border.style.border = '1px solid red'
    }
    else if (checkDate >= 8){

        console.log(checkDate)
        console.log(`This task is Due in ${checkDate} days`)
        border.style.border = '1px solid green'



    }

// cntrl z dont go away from this page
// Yessir 
// SO Fucking Proud
}