// // synchronous

// console.log('i')
// console.log('eat')

// console.log('with a')
// console.log('spoon')


// //asynchronous

// setTimeout(() =>{
//     console.log('ice cream')
// },4000)



//callbacks

function one (callTwo){
    callTwo()

    console.log('step one. please call step two');

    
};

function two (){
    console.log('step two')
};

// one(two);

//ice cream project

let stocks = {
    fruits: ['strawberry','grapes', 'banana', 'apple'],
    liquid: ['water', 'ice'],

    holder: ['cone', 'cup', 'sticks'],

    toppings: ['chocolate', 'peanut']
};

let isShopOpen = true;

let order = (time, work) =>{

    return new Promise ((resolve, reject)=>{
        if(isShopOpen){
            setTimeout(()=>{
                resolve(work())
            }, time)
            
        } else{
            reject(console.log('our shop is closed'))
        }
    })
}

order (2000, () => console.log(`${stocks.fruits[1]} was selected`))

.then(() => {
    return order (0, ()=> console.log('production has started'))
})

.then(() => {
    return order (2000, ()=> console.log('fruit has been chopped'))
})

.then(()=>{
    return order (1000, ()=> console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} have been added`))
})

.then (()=>{
    return order (2000,()=> console.log('machine has been started'))
})


.then(()=>{
    return order (2000, ()=>console.log(`${stocks.holder[0]} was picked`))
})

.then(()=>{
    return order (3000, ()=>console.log(`${stocks.toppings[1]} was added`))
})

.then(()=>{
    return order (2000, ()=>console.log('ice cream has been served'))
})

.catch (()=>{
    console.log('customer left')
})

.finally(()=> {
    console.log('our shop is closed, day ended')
})




// let order = (fruitName, callProduction) => {
//     setTimeout(()=>{
//         console.log(`${stocks.fruits[fruitName]} was selected`)
//         callProduction()
//     },2000)

    
// };

// let production = () => {
//     setTimeout(() =>{
//         console.log('production has started')

//         setTimeout(() =>{
//         console.log('the fruit has been chopped!!');

//         setTimeout(() =>{
//             console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} have been added`)

//             setTimeout(()=>{
//                 console.log('machine has been started')

//                 setTimeout(() => {
//                     console.log(`${stocks.holder[0]} was picked`)

//                     setTimeout(()=>{
//                         console.log(`${stocks.toppings[1]} was added`)

//                         setTimeout(() =>{
//                             console.log('ice cream has been served')
//                         },2000)
//                     },3000)
//                 },2000)
//             },1000)
//         },1000)
//     }, 2000)
//     },0);

    
// }

// order(0, production);