// Assignment 3: Array of Objects Operations
// Objective: Practice adding, removing, and updating values in an array of objects.


// 1. Create an empty array called "cars" 
const cars = new Array();

// 2.  Add three car objects to the "cars" array. Each car object should have the following properties: 
cars.push({
    make: "Toyota",
    model: "Camry",
    year: 2018
},
    {
        make: "Tata",
        model: "Nexon",
        year: 2020
    },
    {
        make: "Suzuki",
        model: "Swift",
        year: 2008
    })


// 3. Remove the first car Object from the "cars" array 
cars.shift();

// 4. Add new car object to the "Cars array" 
cars.push({
    make: "Honda",
    model: "Civic",
    year: 2020
})

// 5. update the "model" property of the second car object in the array to "Accord" 
cars[1].model = "Accord";

// 6. Print the final "cars" array after performing the above operations.
console.log(cars);