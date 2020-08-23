// Function as first-class citizens

// - assign function as a variable 
function sayHello() {
    return "hello world" 
}

let fn = sayHello;
fn()
sayHello()

// - pass function as an argument

function greet(fnMessage) {
    console.log(fnMessage())
}

greet(sayHello);

// - return function from other function 
function sayHello() {
  return function () {
     return "hello world"
  }
}

let fn = sayHello()
let message = fn()