export function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        e.name === "QuotaExceededError" &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }



// if(!localStorage.getItem('myDay')){
//     getDay()
// }
// else{
//     runday()
// }


// function getDay(){

//     localStorage.setItem('myDay', console.log('helL NAH'))

//     runday()
// }

// function runday(){

//     console.log('heyoo')
//     console.log('hello')
//     console.log('Yep it sTAYED')
// }
