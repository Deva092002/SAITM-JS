
// defining function 

function noargs(){
    console.log("no argument");
}

function add(a,b){
    var c = a + b;
  console.log("added value of a and b : ",c);
}

function mult(count,price){
    var total = count*price;
    return 5;
    // console.log("cart price is : ",total);
}
var total = mult(3,4);
console.log("cart price is : ",total);

//calling function
add(2,2);
noargs();
// mult(3,4);