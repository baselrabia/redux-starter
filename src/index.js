// enforcing immutability 
//u cant change props directly 
// not pure functions 
// so there are libraries like immutable,immer and mori

// enforcing immutability - using immer.js
import {produce} from "immer";

let book = { title: "harry potter"};

function publish(book) {

    return produce(book, draftBook => {
        draftBook.isPublished = true;
    })
}

let updated = publish(book);
 
console.log(book);

console.log(updated);