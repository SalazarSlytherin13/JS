const accountId = 1442288
let accountMail = "vanya@google.com"
var accountPassword = "224466"
accountCity = "Kanpur"

// accountId = 2334455 // const can't change once fixed

// console.log(accountId);

console.table([accountId,accountMail,accountPassword,accountCity])

accountMail = "vanya@chrome.com"
accountPassword = "113355"
accountCity = "Ghaziabad"

console.table([
    {
    accountId,
    accountMail,
    accountPassword,
    accountCity,

}
]);

// let is now preferred over var //