// Primitive 

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber =  99926339340n 

// Reference( Non Primitive)

// Array , Objects , Functions

//Array Example
const heros = [ "shaktiman" , "naagraj" , "doga"];

//Objects Example
let myObj = {
    name : "Chitranshu",
    age : 22,
}

//Functions Example 
const myFunction = function (){
    console.log("hello world");
}

console.log(typeof scoreValue);

// ******************* Memory ********************

// Stack( Primitive) , Heap(Non-Primitive)

let myYoutubename = "codetogether07"
let anothername = myYoutubename 
anothername = "DesignInframe"

console.log(myYoutubename);
console.log(anothername);

let user = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "chiranshu@google.com"

console.log(userOne.email);
console.log(userTwo.email);
