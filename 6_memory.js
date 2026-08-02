//We have two portions of memory:- Stack (Primitive), Heap (Non-Primitive)


// Call By Value :-
let myYoutubeName = "cruisaderchris";

let anotherName = myYoutubeName;
anotherName = "ethicalhackingcom";

console.log(myYoutubeName);
console.log(anotherName);


// Call By Reference :- 
let userOne = {
    name: "Rakesh",
    email: "rakesh@google.com",   // userOne is object
    password: "25674"
}

let userTwo = userOne;

userTwo.name = "Suraj";
userTwo.email = "suraj12@google.com"

console.log(userTwo.name);
console.log(userOne.name);
console.log(userOne.email);

