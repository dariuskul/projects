let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let words = text.replace(".","").split(' ');
console.log(words)
console.log(words.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

if(shoppingCart.indexOf('Meat') == -1){
    shoppingCart.unshift('Meat');
}
if(shoppingCart.indexOf('Sugar') == -1){
    shoppingCart.push('Sugar');
}

let teaIndex = shoppingCart.indexOf('Tea');

shoppingCart[teaIndex] = 'Green Tea';

console.log(shoppingCart);
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }

  }
let count = 0;

for(let [key,value] of Object.entries(users)){
    if(value.points >= 50 && value.isLoggedIn){
        count++; 
    }
}

console.log(count);
let filtered = [];
for(let [key,value] of Object.entries(users)){
    if(value.skills.includes("MongoDB") ){
        filtered.push([key,value]);
    }
}

console.log(filtered);

let myName = Object.assign({}, users);

myName = {
    ...myName,
    'Darius': {
        email: "teest",
        skills: ['HTML','CSS'],
        age: 21,
        isLoggedIn: true,
        points:100
    }
}

console.log(myName);