// singleton 
// Object.create

// objects literals 

const mySym = Symbol("key1")

const JsUser = {
    name: "Chitransh",
    [mySym]: "mykey1",
    age: 18,
    location: "Bhopal",
    email:"chitransh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" ,"Saturday"]
}  

// Objects Access

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log( typeof JsUser[mySym])

JsUser.email ="chitrans@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "chitrans@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


