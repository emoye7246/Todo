import { differenceInDays, addMonths, addDays} from "date-fns";

// YY/MM/DD

export function datesControl(dateNow, dateInputed, border){

    dateNow = new Date()

    let checkDate = differenceInDays((dateNow), dateInputed)

    if(checkDate < 8){

        border.style.color = 'red'
        console.log(checkDate)
    }


}