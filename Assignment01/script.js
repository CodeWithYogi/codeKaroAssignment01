// Assignment 1: Array Operations
// Objective: Practice adding, removing, and updating values in arrays.

// 1. Create an empty array called "fruits".
const fruits = new Array();

// 2. Add the following fruits to the "fruits" array: "apple", "banana", "orange".
fruits.push("apple", "banana", "orange");

// solution 01
// 3. Remove the first fruit from the array.
fruits.shift();

// 4. Add "grape" to the end of the array.
fruits.push('grape');

// 5. Update the second fruit in the array to "pear".
fruits.splice(0,1,'pear')

// 6. Print the final "fruits" array after performing the above operations.
console.log(fruits);


// solution 02 

// fruits.forEach((item, index)=>{
//     if(index == 0){
//         fruits.shift()
//     }
//     if(index == 0){
//         fruits.splice(0,1,'pear')
//     }
//     if(index == 1){
//         fruits.push('grape')
//     }
// })

// console.log(fruits);