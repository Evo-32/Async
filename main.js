// function  task1(callback){
//     setTimeout(() => {
//         console.log('1. Pre heat the oven to 350F')
//     },3000);
//     callback()
// }


// const number = new Promise((resolve,reject)=>{
//     let num = Math.floor(Math.random()*10)
//     if(num <5){
//         resolve('you guessed right.')
//     }else{
//         reject('oops! you guessed wrong.')
//     }
// })

// number.then((msg) => {
//     console.log(msg)
// }).catch((msg) => {
//     console.log(error)
// })

//promise  chaining

// const promise = new Promise((resolve,reject)=>{
//     resolve('Well done promise well resolved!')
// })

// const promiseTwo = new Promise((resolve,reject)=>{
//     resolve('Well done promise well resolved!')
// })

// const promiseThree = new Promise((resolve,reject)=>{
//     reject('Oops! There is an error.')
// })

// promise.then((msg)=>{
//     console.log(msg);
//     return promiseTwo
// })
// .then((msg)=>{
//     console.log(msg)
//     return promiseThree
// }).catch((error)=>{
//     console.log(error)
// })

//promise utility method

// const promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=> resolve('Well done promise well resolved!') )
// },2000)

// const promise2 = new Promise((resolve,reject)=>{
//     setTimeout(() => resolve('Oops!the promise is rejected.'))
// },1500)

// Promise.all([promise1,promise2])
// .then((ans)=> console.log(ans[0],ans[1]))
// .catch((error) => console.log(error))


