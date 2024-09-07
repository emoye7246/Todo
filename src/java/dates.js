import { differenceInCalendarDays, format} from "date-fns";

// YY/MM/DD

let taskDueInAWeek = document.getElementById("taskDueInAWeek")

let futureTasks = document.getElementById('futureTasks')


export function datesControl(dateNow, dateInputed, border){

    let checkDate = differenceInCalendarDays(dateInputed, (dateNow))



    if(checkDate < 8){

        border.style.border = '1px solid red'
    }
    else if (checkDate >= 8){

        border.style.border = '1px solid green'



    }
}


export function upcomingTasksControl(todaysDate, dateInputed, section){

    let checkDate = differenceInCalendarDays(dateInputed, (todaysDate))

    if(checkDate < 8){

        taskDueInAWeek.append(section)
    }
    else if (checkDate >= 8){

        futureTasks.append(section)
    }



}