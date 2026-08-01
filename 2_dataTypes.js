"use strict" // treats all js codes as newer version

// alert(3+3) we are using js not browser

console.log( 3+
    3  )
// not preferred because less readible

console.log(3+3); console.log("Daemon")  // works but not recommended due to readibility issues
console.log(4+3), console.log("Rhaenyra") // not recommended, better use other line

//*********DATA TYPES***********//

let name = "Tyrion Lannister"  //string => ""
let age = 28                   //number => Range 2^53
let isLoggedIn = true          //boolean => true/false
let state = null               //null = standalone value
let open;                      //undefined
//symbol => unique

console.log(typeof name)
console.log(typeof age)
console.log(typeof isLoggedIn)
console.log(typeof state)    //typeof null is object
console.log(typeof open)     //typeof undefined is undefined


console.table([typeof name, typeof age, typeof isLoggedIn, typeof state, typeof open])

console.table([
    {
        typeof: name,
        typeof: age,
        typeof: isLoggedIn,   //here typeof is getting treated like an object rather than an        operator hence it prints only the latest value assigned to it
        typeof: null,
        typeof: open,

        //an object cannot have multiple properties with the same key

        // key=>typeof  value=>name

        // property= key+value

    }
]);

console.table([
    {
        name: typeof name,
        age: typeof age,
        isLoggedIn: typeof isLoggedIn,
        state: typeof state,
        open: typeof open

    }
])
                               
