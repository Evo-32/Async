// function perSecond(){
//     for(let i=1; i<=5; i++){
//         setTimeout(()=>{
//             console.log(i)
//         },i*1000)
//     }
// }
// perSecond()

// function perSec(){
//     let num = 1
//     let interval = setInterval(()=>{
//         console.log(num)
//         num++
//         if(num > 5) clearInterval(interval)
//     },1000)
// }
// perSec()

// function time(){
//     let secondsPassed = 0
//     const time = setInterval(() => {
//         let currTime = new Date().toTimeString().slice(0,8)
//         console.log(currTime)
//         secondsPassed ++
//         if(secondsPassed >=10) clearInterval(time)
//     }, 1000);
// }
// time()

let timeoutId; 

function showLoading(){
    timeoutId = setTimeout(()=> {
        console.log('Loading...')
    },2000)
}
function cancelLoad(){
    clearTimeout(timeoutId)
    console.log("Loading cancelled!");
}

showLoading(); // schedules the log in 2 seconds

// Suppose something happens before 2 seconds
setTimeout(() => {
    cancelLoad(); // cancels the log
}, 3000); // cancels after 1 second


