document.write("<h1>Hello Nigga!😁</h1>")
console.log("Hello world!");
// External javascript is more usefull!
// Js is dyanmically typed
var x=5;
let y=10;//recent added it is usecase for variables
console.log(typeof(y));

//only string datatype, no character datatype
let string = "hello"
let char = 's'
console.log(typeof(string))
console.log(typeof(char))

//array is in type of object
let my_array = [4,6,8];
console.log(typeof(my_array));

//length of array
console.log(my_array.length);//don't use paranthesis after length since it is a property not a function!

//local and global scope

//const keyword : makes a variable as a constant
const z=10;

// //Special values: null and undefined
let a;
//console.log(b); undefined
console.log(a);

//concatenation
let fn= "manohar"
let ln= "p"
console.log(fn +" "+ln);

//Split methods
let my_string = "call me sir, yes sir, ok sir.."
let splitted = my_string.split(" ");
console.log(splitted);

//nested array
let array1 = [1,4,3];
let array2 = [2,8,6];
let merge = [...array1,...array2];// using split in array
// let merge = [array1,array2]; inside array1 elements will be nested
console.log(merge)

//shift method: poping of element
let array3=[1,4,3];
let shift = array1.shift(1);
console.log(shift);

//commenting : anything written inside this is a comment
/*this is a multiline comment*/


//functions
function my_function(l,m){
    let sum = l + m;
    console.log("Sum = "+ sum);
}
my_function(5,10);
//hostic feature : it takes the declaration and moves it to top of the program. therefore functions can be invoked anywhere

//assign a function to a variable
let my_function1 = function(l,m){
    let sum = l + m;
    console.log("Sum = "+ sum);
}
my_function(300,12);

//arrow function : consice way of delarating function
let arrow_function = (p,q) =>{
    let sum = p+q;
    console.log(sum);

}
arrow_function(500,400);

//call back functions and closure
/*let inner = (k) =>{
    return
}

let outerFunction = (inner) =>{
    let factor = 10;
    return inner(10);
}*/

//clousure : function returns functions
function multiplyBy(factor){
    return function(number){
        return number*factor;
    }
}

let double = multiplyBy(2);//variable invoking a function
console.log(double(5));//hence double becomes a function      

//Data object : collection of key value pair(also called as property) like dictnary
let person = {
    name : "Manohar",
    age : 20,
    work: "student",
    
}
console.log(person);
console.log(person.age);

//Function inside a data object
let person1 = {
    name : "Manohar",
    age : 20,
    work: "student",
    add : function(v){
        console.log(this.age + v);
    }
}
console.log(person);
console.log(person.add(10));


//DOM(Document Object Model) and Event Handling
//gdsc-DOM.vercel.app/1



