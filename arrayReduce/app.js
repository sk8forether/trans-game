// // 1) Turn an array of numbers into a total of all the numbers

// function total(arr) {
//     arr = arr.reduce((final, num) => {
//         final += num;
//         return final
//     })
//     return arr
//  }
 
//  console.log(total([1,2,3])); // 6

// //  2) Turn an array of numbers into a long string of all those numbers.

// function stringConcat(arr) {
//     arr = arr.reduce((final, num) => {
//         final = final + `${num}`
//         return final
//     }, "")
//     return arr
//  }


// // function stringConcat(arr) {
// //     arr = arr.join("")
// //     return arr
// //  }

//  console.log(stringConcat([1,2,3])); // "123"
 
// //  3) Turn an array of voter objects into a count of how many people voted

// function totalVotes(arr) {
//     arr = arr.reduce((final, voter) => {
//         if (voter.voted) {
//             final++
//         }
//         return final
//     }, 0)
//     return arr
//  }
 
//  var voters = [
//      {name:'Bob' , age: 30, voted: true},
//      {name:'Jake' , age: 32, voted: true},
//      {name:'Kate' , age: 25, voted: false},
//      {name:'Sam' , age: 20, voted: false},
//      {name:'Phil' , age: 21, voted: true},
//      {name:'Ed' , age:55, voted:true},
//      {name:'Tami' , age: 54, voted:true},
//      {name: 'Mary', age: 31, voted: false},
//      {name: 'Becky', age: 43, voted: false},
//      {name: 'Joey', age: 41, voted: true},
//      {name: 'Jeff', age: 30, voted: true},
//      {name: 'Zack', age: 19, voted: false}
//  ];
//  console.log(totalVotes(voters)); // 7
 
// //  4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

// function shoppingSpree(arr) {
//     arr = arr.reduce((final, item) => {
//         final = final + item.price
//         return final
//     }, 0)
//     return arr
//  }
 
//  var wishlist = [
//      { title: "Tesla Model S", price: 90000 },
//      { title: "4 carat diamond ring", price: 45000 },
//      { title: "Fancy hacky Sack", price: 5 },
//      { title: "Gold fidgit spinner", price: 2000 },
//      { title: "A second Tesla Model S", price: 90000 }
//  ];
 
//  console.log(shoppingSpree(wishlist)); // 227005
 
// //  5) Given an array of arrays, flatten them into a single array

// function flatten(arr) {
//     arr = arr.reduce((final, array) => {
//         final = final.concat(array)
//         return final
//     })
//     return arr
//  }
 
//  var arrays = [
//      ["1", "2", "3"],
//      [true],
//      [4, 5, 6]
//  ];
 
//  console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];
 
// //  6) Given an array of potential voters, return an object representing the results of the vote



// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];

// function voterResults(arr) {
//    arr = arr.reduce((final, voter) => {
//         if (voter.age >= 18 && voter.age <= 25) {
//             if (voter.voted) {
//                 final.numYoungVotes++
//                 final.numYoungPeople++
//             } else  {
//                 final.numYoungPeople++
//             }}
//         else if (voter.age >= 26 && voter.age <= 35) {
//             if (voter.voted) {
//                 final.numMidVotes++
//                 final.numMidPeople++
//             } else {
//                 final.numMidPeople++
//             }}
//         else if (voter.age >= 36 && voter.age <= 55) {
//             if (voter.voted) {
//                 final.numOldVotes++
//                 final.numOldPeople++
//             } else  {
//                 final.numOldPeople++
//             }}
//             return final
//         }          
//    , {
//   numYoungVotes: 0,
//   numYoungPeople: 0,
//   numMidVotes: 0,
//   numMidPeople: 0,
//   numOldVotes: 0,
//   numOldPeople: 0
// })
// return arr
// }

// console.log(voterResults(voters)); // Returned value shown below:
// /*
// { numYoungVotes: 1,
//   numYoungPeople: 4,
//   numMidVotesPeople: 3,
//   numMidsPeople: 4,
//   numOldVotesPeople: 3,
//   numOldsPeople: 4
// }
// */


function filterArray(arr) {
    return arr.filter(num => (typeof num === "number"))
}
  
  console.log(filterArray([1, "a", "b", 0, 15]))