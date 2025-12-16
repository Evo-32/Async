// function question1(){
//     return setInterval(() => {
//         let num = Math.floor(Math.random()*10)
//         console.log(num)
//         }
//         ,2000)
// }
// const intervalId = question1()
// setTimeout(()=> {
//     clearInterval(intervalId)
// },5000)

// function GetData(){
//     const controller = new AbortController();
//     const signal = controller.signal

//     const timer = setTimeout(() => {
//         controller.abort()
//     },10)
//     return fetch('https://jsonplaceholder.typicode.com/posts/1', {signal})
//     .then(res =>{
//         clearTimeout(timer)
//         return res.json()
//     })
//     .catch(error => {
//         if(error.name === 'AbortError'){
//             console.log('Fetch aborted')
//         }else{
//             console.log('Other error:', error);
//         }
//     })
// }
// GetData().then(msg => console.log(msg))

async function Fetch(url) {
  let trials = 0;
  let nTimes = 3;
  while (trials < nTimes) {
    try {
      const data = await fetch(url);
      if (!data.ok) throw new Error('Request failed!')
        const res = await data.json();
      console.log('Data fetched:',res)
      break;
    } catch {
      trials++
      if(trials < nTimes){
        console.log('Retrying...')
      }else{
        console.log('Fetching failed after', trials,'Trials')
      }
    }
  }
}

Fetch('https://jsonplaceholder.typicode.com/INVALID_ENDPOINT')
