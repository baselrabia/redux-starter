// immutability - Updating objects

const person = { 
    name: "john",
    address : {
        country: "USA",
        city: "San"
    }
};

// copy to new obj 
const updated = Object.assign({} , person , { name : "Bob" , age: 30});

// use spread opreator 

const updated2 = { ...person, name: "Bob", age: 30 };
updated2.address.city = "new york";

//it will change the original person obj 
//cus spread operator make a shadow copy to the updated obj
const updated2 = { 
    ...person,
    address: {
        ...person.address,
        city:"new york"
    },
    name: "Bob",
    age: 30 
};

console.log(updated2);