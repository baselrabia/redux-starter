// immutability
// once created, cannot be changed or mutated !

let name = "mosh"
let newName = name.toUpperCase();

// why use immutability

// should we always favor immutability

// Pros 
// 1- predictability 
// 2- faster change detection
// 3- concurrency


// Cons
// 1- performance
// 2- memory overhead 


// structural sharing 

// if you are bulding app with redux , {{ you shouldn't mutate data }}
// outside of redux do what you want 
