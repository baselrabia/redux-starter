// composing and piping

import {compose,pipe} from 'lodash/fp';

let input = "   javascript  ";
let output = "<div>" + input.trim() + "</div>";

// reusable functions 

//trim 
//wrapInDev
//toLowerCase

const trim = str => str.trim();
const wrapInDev = str => `<div> ${str} </div>`;
const toLowerCase = (str) => str.toLowerCase();

const transform = compose(wrapInDev, toLowerCase, trim);
// transform2  give same result but diffent is the sort of the functions arguments => easy to read 
const transform2 = pipe(trim, toLowerCase, wrapInDev);

//const result = wrapInDev(toLowerCase(trim(input)));
const result = transform(input);