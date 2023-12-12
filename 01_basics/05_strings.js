const name = "nitin"
const repoCount = 1

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

const gameName = new String('nitin-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

const newStringOne = "   nitin    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://asdfb.com/nitin%20wankhade"

console.log(url.replace('%20', '-'))

console.log(url.includes('nitin'))

console.log(gameName.split('-'));