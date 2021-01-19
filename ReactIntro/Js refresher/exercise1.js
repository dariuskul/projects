const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]

//1
const arr = []

console.log("Length of array `arr`: ", arr.length);
//2
const array = [1,2,3,4,5,6,7];
const arrayLength = array.length-1;
console.log("Length of array `array`: ", array.length);
console.log(`First item: ${array[0]}, Middle item: ${array[arrayLength/2]}, Last item: ${array[arrayLength]}`);

const mixedDataTypes = [
    `String type`,
    10,
    10.001,
    'a',
    {test: 'test'},
    [12,14,16]
]

console.log(mixedDataTypes.length);

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon'];
console.log("itCompanies: ", itCompanies, " Number of companies: ", itCompanies.length);
console.log(itCompanies.toString());

//--------------OBJECTS----------------
const dog = {
    name: 'Alfred',
    legs: 4,
    color: 'brown',
    age: 5,

    bark: function(){
        return 'Woof woof'
    }
};
console.log("DOG: ", dog.name, dog.legs, dog.color, dog.age, dog.bark());

dog.push({breed: 'Nzn'});

console.log(dog);