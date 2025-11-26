// //Topic 1 Promises
// function successfulPromise(value){
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve(value)
//     },100)
//     })
//   }
// successfulPromise(200).then((msg) => {
//     console.log(msg)
// })

// function failingPromise(reason){
//   return new Promise((_,reject) => {
//     setTimeout(() =>{
//       reject(reason)
//     })
//   })
// }
// failingPromise('Data not found').catch((error) => console.log(error))

// function coinFlip(){
//     let num = Math.random()
//     return new Promise((resolve,reject)=>{
//         if(num  < 0.5){
//             resolve('Heads')
//         }else{
//             reject('Tails')
//         }
//     })
// }
// coinFlip().then(msg => console.log(msg)).catch(error => console.log(error))

//Topic 2 http status

// async function fetchTodoTitle(){
//     let data = await fetch('https://jsonplaceholder.typicode.com/todos/5')

//     let userInfo = await data.json()

//     return  userInfo.title
// }
// fetchTodoTitle().then((msg) => console.log(msg)).catch((error) =>  console.log(error))

// async function checkUserExists(id){
//     let infoo = await fetch ('https://jsonplaceholder.typicode.com/users/1')

//     if(!infoo.ok){
//         return false
//     }
//     else{
//         return true
//     }
// }
// checkUserExists().then((msg) => console.log(msg)).catch((error) =>  console.log(error))

// async function createPost(title,body){
//     const response = await  fetch('https://jsonplaceholder.typicode.com/posts',{
//         method: 'POST',
//         headers :{
//             'Content-type': 'application/json; charset=UTF-8'
//         }, //describe the type of data i am sending
//         body: JSON.stringify({
//             title : title,
//             body : body,
//             userId : 1
//         })
//     })

//     const post = await response.json()

//     return post
// }
// createPost('Bubble', 'I invite you to my first story.').then(post => console.log(post.body))

//Topic 3

// async function getFastestTodo(id1,id2){
//     const url1 = fetch(`https://jsonplaceholder.typicode.com/todos/${id1}`)
//     const url2 = fetch(`https://jsonplaceholder.typicode.com/todos/${id2}`)

//     const fastResponse = await Promise.race([url1,url2])

//     const fastData = await fastResponse.json()

//     return fastData
// }
// getFastestTodo(2,5).then((msg) => console.log(msg) )

// async function getUserData(userId) {
//   const details = fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//   const albums = fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}/albums`
//   );
//   const todos = fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}/todos`
//   );

//   const result = await Promise.all([details, albums, todos]);

//   const [detail, album, todo] = await Promise.allSettled(
//     await Promise.all(result.map((res) => res.json()))
//   );
//   return [detail, album, todo];
// }
// getUserData(4).then((msg) => console.log(msg));


async function getUserDataSafe(userId) {

  const urls = [
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    `https://jsonplaceholder.typicode.com/users/${userId}/albums`,
    `https://jsonplaceholder.typicode.com/users/${userId}/todos`,
  ];

  const fetchPromises = urls.map(url => fetch(url).then(res => res.json()))

  const resulte  = await Promise.allSettled(fetchPromises)

  return resulte.map(r => r.status === 'fulfilled'?
    {status:'fulfilled', value: r.value} :
    {status:'rejected', reason: r.reason}
  )
}
getUserDataSafe(4).then(data => console.log(data));
