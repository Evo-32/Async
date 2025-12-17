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

// async function Fetch(url) {
//   let trials = 0;
//   let nTimes = 3;
//   while (trials < nTimes) {
//     try {
//       const data = await fetch(url);
//       if (!data.ok) throw new Error('Request failed!')
//         const res = await data.json();
//       console.log('Data fetched:',res)
//       break;
//     } catch {
//       trials++
//       if(trials < nTimes){
//         console.log('Retrying...')
//       }else{
//         console.log('Fetching failed after', trials,'Trials')
//       }
//     }
//   }
// }

// Fetch('https://jsonplaceholder.typicode.com/INVALID_ENDPOINT')




function fetchToDo() {
  const xhr = new XMLHttpRequest();

  // 1. Initialize the request (POST because we are sending data)
  xhr.open('POST', 'https://jsonplaceholder.typicode.com/todos/1');

  // 2. Set custom headers
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('User-Agent', 'MyCustomAgent/1.0');

  // 3. Handle the response
  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        const data = JSON.parse(xhr.responseText);
        console.log('Parsed response:', data);
      } catch (err) {
        console.error('Failed to parse JSON:', err);
      }
    } else {
      console.error('Request failed with status:', xhr.status);
    }
  };

  // 4. Handle network errors
  xhr.onerror = () => {
    console.error('Network error occurred');
  };

  // 5. Create JSON payload
  const payload = {
    title: 'Learn XHR',
    completed: false,
    userId: 1
  };

  // 6. Send the request with JSON payload
  xhr.send(JSON.stringify(payload));
}

// Call the function
fetchToDo();
