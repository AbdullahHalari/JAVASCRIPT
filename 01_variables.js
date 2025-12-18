const accountId = 123456;
let accountEmail = "abc@gmail.com";
var accountPassword = "123456";
accountCity = "karachi";

// accountId = 2 //not allowed 

accountEmail = "qwe@gmail.com";
accountPassword = "12454";
accountCity = "lahore";
let accountState;


/*
Prefer not to use var
because of issue in block scope and functional scope 
*/

console.log(accountId);

console.table([accountEmail,accountId,accountPassword, accountCity, accountState]);