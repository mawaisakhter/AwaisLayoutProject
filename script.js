const _= require("lodash");
//  Shallow copy method
let student = {
    fname: "abc",
    lname: "bac",
    age: 21,
    city: "xyz"
}

let student2 = {...student}; // shallow copy  
console.log(student); // output { fname: 'abc', lname: 'bac', age: 21, city: 'xyz' }

student2.fname= "Awais";
student2.lname= "Owais";
console.log(student2); // output { fname: 'Awais', lname: 'Owais', age: 21, city: 'xyz' }

// Deep copy method

const original = {
    fname: "Awais",
    lname: "Owais",
    age: 21,
    subjects: ["PF", "OOP", "DB", "DSA "],
    address: { city: "Lahore", country: "Pakistan" },
    getDetails: (fname, city) => `${fname} from ${city}`
};

const deepCopy = _.cloneDeep(original);

deepCopy.address.city = "Okara";
deepCopy.subjects.push("SE");

console.log("Original data:", original);
// Output
// Original data: {
//     fname: 'Awais',
//     lname: 'Owais',
//     age: 21,
//     subjects: [ 'PF', 'OOP', 'DB', 'DSA ' ],
//     address: { city: 'Lahore', country: 'Pakistan' },
//     getDetails: [Function: getDetails]
//   }

console.log("Deep Copy data:", deepCopy);
// Out put
// Deep Copy data: {
//     fname: 'Awais',
//     lname: 'Owais',
//     age: 21,
//     subjects: [ 'PF', 'OOP', 'DB', 'DSA ', 'SE' ],        
//     address: { city: 'Okara', country: 'Pakistan' },      
//     getDetails: [Function: getDetails]
//   }

console.log(original.getDetails(original.fname, original.address.city));  // Awais from Lahore
console.log(deepCopy.getDetails(deepCopy.fname, deepCopy.address.city));  // Awais from Okara