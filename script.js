
// console.log('task 1');
// setTimeout(() => {
//     console.log('task 2')
// },2000)
// console.log('task 3')


// function fetchData(callback){
//     console.log('Fetching weather data....')
//     setTimeout(() => {
//         console.log('Weather data fetched successful!')
//         callback()
//     },2000)
// }

// function processData(){
//     console.log('processing the weather data to display temperature and conditions')
// }

// fetchData(processData)



// fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
//     return response.json().then((posts) =>{
//         console.log('Post fetched successfully',posts)
//     })
// }).catch((error) => {
//     console.log('Error fetching data',error)
// })


// function fetchUserData(callback){
//     fetch('https://jsonplaceholder.typicode.com/users/10')
//     .then((response)=>{
//         return response.json().then((userData)=> {
//             console.log(`User's details fetched!`,userData.id)
//             callback(userData.id)
//         })
//     }).catch((error) => {
//         console.log(error)
//     })
// }



// function fetchUserPost(userId){
//     fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
//     .then((response)=>{
//         return response.json().then((posts)=> {
//             console.log('Users post' ,posts)
//         })
//     }).catch((error) => {
//         console.log(error)
//     })
// }

// fetchUserData(fetchUserPost)



// async function fetchAlbums(){
//     try{
//         const albumsResponse = await fetch('https://jsonplaceholder.typicode.com/albums')

//         const albums = await albumsResponse.json()
//         console.log(albums)

//     }catch(error){
//         console.log(error)
//     }
// }

// fetchAlbums()






