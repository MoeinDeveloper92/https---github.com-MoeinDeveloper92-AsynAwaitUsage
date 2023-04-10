



// bellow is callback hell,waiting 1sec and print 3 and 1sec and print 2 nad....
// setTimeout(() => {
//     console.log('3')
//     setTimeout(() => {
//         console.log("2")
//         setTimeout(() => {
//             console.log('1')
//         }, 1000)
//     }, 1000)
// }, 1000)


// another seneario is for reading file from a cloud
// fs.readFile('./test1.txt', { encoding: 'utf-8' }, (err, data) => {
//     if (err) {
//         console.error("Error")
//         console.error(err)
//     } else {
//         console.log("Got DAta")
//         console.log(data)
//     }
// })

// by creating a promise, under the hood you will creata a fuimnctipn which takes two function one is resolve and the second is reject
// sometimes things go wrong and we need to be rpepared to handle those errors
// promises are the evokution of the idea of the callback
// by creating a promise, we create a function which accepts two argumesnts,one is resolve and the second one is reject
// if the action was sucesful you can resolve and otherwise you call the reject


// ---------------------Promise---------------
// const myPromise = new Promise((resolve, reject) => {
//     const rand = Math.floor(Math.random() * 2)
//     if (rand === 0) {
//         // if it was 0 i want to consider that a good thing
//         resolve()
//     } else {
//         reject()
//     }
// })

// .then will take a callback function where we can log something like success
// .then is handling only resolve case
// for handlng a bad case we nake use of catch
// .catch is handling reject
// myPromise.then(() => {
//     console.log("You have resolved your task")
// }).catch(() => {
//     console.error("Something went wring")
// })


// fs.promises.readFile('./test.txt', { encodeURI: "utf-8" })
//     .then((data) => {
//         console.log(data)
//     }).catch((err) => {
//         console.log(err)
//     })

// Another good example of promisses is when we deal with fetch API
// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
// we call fetch and we handle the succes with .then and then we need to concvert the reverted respoinse to the json
// and res.json() returns a promise
// which means we can chain on another promise
// .then((res) => res.json())
// .then((data) => console.log(data))
// .catch((err) => console.err(err))

// again we call fetch and we handle the succes case with .then and we get the eresponse which
// which we have to convert it into the josn
// res.json returns a promise we can chain on a promise to handle the promise
// if this were to bad it triggeres our catch


// ----------------------async await-------------------//


// const loadFile = async () => {
//     const data = await fs.promises.readFile('./test.txt', { encoding: 'utf-8' })
//     console.log(data)
// }

// loadFile()

// if we want to use async we need to mark a function as an async
// inside a async we can use await



const fetchPokemon = async (id) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    // res.json by itself returns a promise and we need to await that respionse
    const data = await res.json()
    console.log(data)
}

fetchPokemon(2)