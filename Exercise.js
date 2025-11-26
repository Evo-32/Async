// //question 1

// function waited(x) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`waited for ${x} milllisecond.`);
//     }, x);
//   });
// }

// waited(1500)
//   .then((msg) => console.log(msg))
//   .catch((error) => console.log(error));

// //question 2

// // function fetchUserAndFirstPost() {}

// //question 3
// async function fetchAllData(){

//   const api = [
//   "https://jsonplaceholder.typicode.com/todos/1",
//   "https://jsonplaceholder.typicode.com/users/1",
//   "https://jsonplaceholder.typicode.com/albums/1",
// ];

//   try{
//     const response = await Promise.all(api.map(url => fetch(api)))

//     const responseArr = response.map(response => response.json())

//     const responses = await Promise.all(responseArr);

//     return  responses;
//   }
//   catch (error){
//     console.log(error)
//   }
// }

// fetchAllData().then(data => console.log('C3 Result (3 items):',  data.length));

// //question 4
// async function safeFetch(url) {
//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     return response.json();
//   } catch (error) {
//     return `status : ${error}, reason: ${error.message}`;
//   }
// }

// safeFetch('https://jsonplaceholder.typicode.com/todos/1')
//  .then(data => console.log('C4 Success:', data.title));

// safeFetch('https://jsonplaceholder.typicode.com/non-existent-endpoint')
//   .then(data => console.log('C4 Fallback:', data.reason));


// //question 5
// function getFastPosts(){

//   const urls = ["https://dummyjson.com/posts",
//     "https://this-may-not-exist.com/posts",
//     "https://jsonplaceholder.typicode.com/posts"]

//     const safeFetch = urls.map(url => fetch(url).then(res => {
//       if(!res.ok){
//         throw new Error('Bad response')
//       }
//       return response.json()
//     }).catch(() => null))

//     return Promise.race(safeFetch).then((data) =>{
//       if(data === null){
//         throw new Error('Failed to fetch')
//       }
//       return data
//     })
// }

// getFastPosts()
//   .then(posts => console.log("Fastest posts:", posts))
//   .catch(err => console.log("Error:", err));

// //question 6
// async function fetchUserTodos() {
//   const [usersRes, todosRes] = await Promise.all([
//     fetch("https://jsonplaceholder.typicode.com/users"),
//     fetch("https://jsonplaceholder.typicode.com/todos")
//   ]);

//   const users = await usersRes.json();
//   const todos = await todosRes.json();

//   const final = users.map(user => ({
//     ...user,
//     todos: todos.filter(todo => todo.userId === user.id)
//   }));

//   return final;
// }
// fetchUserTodos().then(result => console.log(result));



const promise1 = Promise.resolve(4)
const promise2 = 42
const promise3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('foo')
    },1500)
})

Promise.all([promise1,promise2, promise3]) .then((value) => {console.log(value)})