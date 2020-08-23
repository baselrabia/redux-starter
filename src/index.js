// Functions Composition



let input = "   javascript  ";
let output = "<div>" + input.trim() + "</div>";

// reusable functions 

//trim 
//wrapInDev
//toLowerCase

const trim = str => str.trim();
const wrapInDev = str => `<div> ${str} </div>`;
const toLowerCase = (str) => str.toLowerCase();

const result = wrapInDev(toLowerCase(trim(input)));