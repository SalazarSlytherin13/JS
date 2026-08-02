// console.log(2>3);
// console.log(2<3);
// console.log(2>=3);
// console.log(2<=3);
// console.log(2==3);
// console.log(2!=3);


//************Comparison of different data types **************//

// console.log("2" > 3);
// console.log("02" < 3);
// console.log("2" == 3);
// console.log("2" >= 3);
// console.log("2" <= 3);
// console.log("2" != 3);


// console.log(null > 0);
// console.log(null < 0);
// console.log(null == 0);
// console.log(null >= 0);
// console.log(null <= 0);

/*Equal operator does not convert null whereas comparison operator converts null into a number i.e. null = Number(null)
which is 0*/

console.log(undefined > 0);
console.log(undefined < 0);   //undefined is converted to NaN during any numeric conversions
console.log(undefined == 0);  //any comparison with NaN gives zero

let convert = Number(undefined);
console.log(convert);    //gives NaN

// strict equality:- compares data type as well as value //

console.log("2" === 2);

