const name = "Chitransh"
const repoCount = 20

//console.log(name + repoCount +" Value");  //old style

console.log(`Hello my name is ${name} and my repo is ${repoCount}`);  //new style

const gameName = new String ('chitrans')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8 ,4)
console.log(anotherString);

const newStringOne = "    chitrans   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://DesignInframe.in/chitrans%07yadav"
console.log(url.replace('%07' , '-'))

console.log(url.includes('DesignInframe'))

console.log(gameName.split('-'));






