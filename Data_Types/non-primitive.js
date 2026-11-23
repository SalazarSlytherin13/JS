let even=[2,4,6,8];
console.log(even);

even[2]=10;
console.log(even);

let nums=[1,2,3];
let number=[1,2,3];

console.log(nums==number);

let userOne={
    'name':'Alex',
    'age': 28,
    'roll no.': 34
}

let userTwo={
    'name':'Alex',
    'age': 28,
    'roll no.': 34
}

console.log(userOne==userTwo);

let userThree=userOne;

console.log(userThree==userOne);
console.log(userThree==userTwo);