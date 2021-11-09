var text1 = 1;
var text2 = 2;
var text3 = 3;

// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");

// for(let i = 0; i < 3; i++){
//     for(let j = 0; j < 2; j++){
//             console.log("i is ",i);
//             console.log("j is ",j);
//     }
// }
// for(let i = 8; i > 0; i--){
//     console.log("iteration no.",i);
// }

var arr = [2,4,6,8]

var name1 = ["Web development","Mobile applications","Tech marketing"]
var images = ["URL1","URL2","URL3"]
// for(var i in arr){
//     console.log("array",i);
// }
for(var i of name1){
    console.log("array",i);
}

// for(let i = 0; i < 3; i++){
//     for (let j = 0; j < i; j++){
//        console.log("*"); 
//     }
// }

function fetchData(){
    console.log("data fetched");
    console.log("data fetched");
    console.log("data fetched");
}
fetchData();


function addition(a,b){
    console.log("add of a and b is : ",a+b);
}

addition(2,2);

function sub(a,b){
    console.log("sub of a and b is : ",a-b);
}

sub(5,3);

function pricecalculator(no,price){
    console.log("total bill ",no*price);
}
pricecalculator(5,3);

// var exist = false;
var counter = 10;
console.log("old counter",counter);
for(let i = 0; i < 10; i++){
    if(i === 3){
        // exist = true;
        // break;
        continue;
    }
    console.log(i);
    counter = counter+1;
}
console.log("new exist",counter);