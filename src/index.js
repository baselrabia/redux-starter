// curring
// is to convert fun which takes 2 argumets and return same function but take 1 argument
// by passing the seacond argument at first 

function add(a) {
    return function(b) {
        return a+b;
    };
}
const add1 = add(1);
add1(5); 

add(1)(5);
const add2 = a => b => a + b ; // (a,b) => a + b 
add2(2)(5)
import {compose,pipe} from 'lodash/fp';

let input = "   javascript  ";
let output = "<div>" + input.trim() + "</div>";

// reusable functions 

//trim 
//wrapInDev
//toLowerCase

const trim = str => str.trim();
// const wrapInDev = str => `<div> ${str} </div>`;
// const wrapInSpan = (str) => `<span> ${str} </span>`;
//const wrap = (type, str) => `<${type}> ${str} </${type}>`;

//convert wrap to curring function

const wrap = type => str => `<${type}> ${str} </${type}>`;

const toLowerCase = (str) => str.toLowerCase();

const transform = pipe(trim, toLowerCase, wrap("dev"));

//const result = wrapInDev(toLowerCase(trim(input)));
const result = transform(input);