// enforcing immutability 
//u cant change props directly 
// not pure functions 
// so there are libraries like immutable,immer and mori

// enforcing immutability - using immutable.js
import {Map} from "immutable";

let book = Map({ title: "harry potter"});

function publish(book) {
   return book.set("isPublished", true) ;
}

// reassign book variable
book = publish(book);

console.log(book.get("title"));

// return plain js obj 

console.log(book.toJS());