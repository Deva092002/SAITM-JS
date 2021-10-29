console.log("hello js");
const final = 23;
console.log("This is my first js code");
var a = 2;
a = 4;  //we can update and redeclare a var

console.log(a);
function test(){
    console.log("from function",a);
    var d = 2;
}
var c = 3;
// console.log("Value of d is ",d);
if(c == 3){
 let w = 3;
}
let w = 4;
 w = 3;   //we can only update let but can't redeclare it

console.log("w is ",w)

// const final = 33;
// const can't be update and redeclare

console.log("value of const is ",final)
test();