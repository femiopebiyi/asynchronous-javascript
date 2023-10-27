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








let order = (fruitName, callProduction) => {
    setTimeout(()=>{
        console.log(`${stocks.fruits[fruitName]} was selected`)
        callProduction()
    },2000)

    
};

let production = () => {
    setTimeout(() =>{
        console.log('production has started')

        setTimeout(() =>{
        console.log('the fruit has been chopped!!')
    }, 2000)
    },0);

    
}

order(0, production);