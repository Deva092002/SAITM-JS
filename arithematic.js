// arithematic operator
// var add = 2 + 2;
// console.log("Value of add is : ",add);

// var sub = 5 - 2;
// console.log("Value of sub is : ",sub);

// var mult = 2 * 3;
// console.log("Value of mult is : ",mult);

// var div = 10/2;
// console.log("Value of div is : ",div);

// var rem = 7%2;
// console.log("Value of rem is : ",rem);

// var power = 3**3;
// console.log("Value of power is : ",power);

// comparison operator

// var a = 2
// var b = "2";
// console.log("a is equals to ",b);
// console.log("equasl",a==2);
// console.log("equasl",a==b);
// console.log("equals",a===b);
// console.log("type of a : ",typeof(a),"type of b : ",typeof(b));
// console.log("equals",a+b,typeof(b));

// var a = 2
// var b = 3

// console.log("equlas ",a>b);
// console.log("equlas ",a>=b);
// console.log("equlas ",a<=b);
// console.log("equlas ",a!=b);

// Increment and Decrement operator
// var a = 2
// a++
// a--
// console.log(a);

// var a = 3
// console.log("equals",a++);
// console.log("equals",++a);


// Logical Operator
var a = 5
var b = 3
var c = 6
var d = 7

// if(a == 5 && b == 3 && c == 6){
//     console.log("it will work if all are true");
// }
// if(a == 5 || b == 3 || c == 5){
//     console.log("it will work if either one of them are true");
// }
// if(a == 5 || b == 3 && c == 5){
//     console.log("it will work if either one of them are true");
// }
// if(a == 5 || b == 3 && c == 5){
//     console.log("it will work if either one of them are true");
// }
// if(a != 4){
//     console.log("it will work if it not equals");
// }


// var a = 10
// var b = 4
// if(a == 1){
//     console.log("a is equal");
// }
// else if(b == 4){
//     console.log("b is equal");
// }
// else{
//     console.log("a is not equal");
// }

// ternary operator
// var a = 10
// if(a == 5){
//     console.log("a is equal")
// }else{
//     console.log("no match")
// }

// console.log("ternary operator",a == 5? "1st part" : "2nd part");

// // comma operator
// var a = 11
// var comma2 = (a++,a)
// var commaOp = (2,3,4)
// console.log("comma",commaOp);
// console.log("comma",comma2);

// var x = 12
// var y = 13

// console.log("are they equal",x==y);

// var month = december;
// var airMonth;

// if(month == "jan"){
    
// }
// if(month == "feb"){

// }
// if(month == "march"){

// }
var month = "sep";
var date = 12;

switch(month){
    case "jan": console.log("month is january")
    break;
    case "feb":  console.log("month is february")
    break;
    case "march": console.log("month is march")
    break;

    default: console.log("by default");
}

switch(date){
    case 1: console.log("day1");break;
    case 2: console.log("day2");break;
    case 3: console.log("day3");break;
    case 4: console.log("day4");break;
    case 5: console.log("day5");break;
    default: console.log("please enter correct date")
}