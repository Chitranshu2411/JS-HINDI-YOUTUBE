const accountId = 144553
let accountEmail ="chitrans@google.com"
var accountPassword = "12345"
accountCity ="Bhopal"
let accountState;

// accountId = 2 //not allowed

accountEmail = "yadav@2411.com"
accountPassword = "934067"
accountCity ="Bhopal"

console.log(accountId);

/*
Prefer not a use var because of issue in block scope and functional scope 
*/

console.table([accountId , accountEmail,accountPassword,accountCity,accountState])
