'use strict' 

import {sum} from './add.js';

console.log(sum(1,2));

// es6 기능 : 블록 스코프 변수 선언
const sentences = [
    { subject : 'Javascript' , verb : 'is' , object : 'great'},
];

// es6 기능 : 객체 분해
function say({subject,verb,object}) {
    console.log(`${subject},${verb},${object}`);
}

for(let s of sentences) {
    say(s);
}