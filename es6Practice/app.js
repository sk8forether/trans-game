// Replace all the `var`s with `let` and `const`. Alter the code however necessary to make sure this continues to work (so the pet's name **isn't** `"John"`, but instead `"spot"` is returned). You only need to delete `var` and insert `let` and `const`

// John is the pet owner, and his name should be stored differently than the other names.

// const manName = "John"
// const age = 101

// function runForLoop(pets) {
//     const petObjects = []
//     for (let i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         if (pets[i] === "cat") {
//             pet.name = "fluffy"
//         } else {
//             pet.name = "spot"
//         }
//         console.log("pet name: ", pet.name)
//         petObjects.push(pet)
//     }
//     console.log("man name: ", manName)
//     return petObjects
// }

// runForLoop(["cat", "dog"])

// Re-write this `.map()` using an arrow function:

// Be aware that if JavaScript sees a `{` directly after the `=>` it will think it's starting a function, and not starting an object, so the `:` will be an unexpected symbol.

// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(carrot => {
//         return { type: "carrot", name: carrot }
//     })
// }
// console.log(mapVegetables(carrots))


// Re-write this .filter() ’s callback function using an arrow function:

// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// function filterForFriendly(arr) {
//     return arr.filter(person => person.friendly)
// }

// console.log(filterForFriendly(people))

// Re-write the following functions to be arrow functions:

// let doMathSum = (a, b) => a + b
// let produceProduct = (a, b) => a * b

// console.log(doMathSum(5,9))
// console.log(produceProduct(3, 4))


// Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:

// function printString(firstName = "Jane", lastName = "doe", age = 100) {
//     return `Hi ${firstName} ${lastName}, how does it feel to be ${age}`
// }
// console.log(printString("Noah", "Berlove", 34))

// Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.

// const animals = [
//     {
//         type: "dog",
//         name: "theodore"
//     },
//     {
//         type: "cat",
//         name: "whiskers"
//     },
//     {
//         type: "pig",
//         name: "piglette"
//     },
//     {
//         type: "dog",
//         name: "sparky"
//     }
//  ];
 
//  function filterForDogs(arr) { return arr.filter(animal => animal.type === "dog") }

//  console.log(filterForDogs(animals))
 
// Using template literals, write a function that takes location and name parameters and outputs a message formatted like this: 

// Hi Janice!

// Welcome to Hawaii.

// I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.
let greeting = (location, name) => `Hi ${name}! \n\nWelcome to ${location}. \n\nI hope you enjoy your stay. Please ask the president of ${location} if you need anything.`

console.log(greeting("California", "Noah"))



