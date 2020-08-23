// Higher-order Functions 

// - map is Higher order function 
//cus it take function as an argument 

let numbers = [1, 2,3];
numbers.map( number => {
    number * 2
}) 

// another higher order fun
//take function as an argument 

setTimeout(() => {
    console.log("hello")
}, 1000);
