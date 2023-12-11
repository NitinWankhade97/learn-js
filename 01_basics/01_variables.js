const accountId = 133231
let accountEmail = "nitin@gmail.com"
var accountPassword = "24214"
accountCity = "Akola"
let accountState;

// accountId = 2 // not allowed

/*
Prefer not to use var because of issue in block scope and functional scope
*/

accountEmail = "abcd@mail.com"
accountPassword = "331"
accountCity = "Pune"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword, accountCity, accountState])