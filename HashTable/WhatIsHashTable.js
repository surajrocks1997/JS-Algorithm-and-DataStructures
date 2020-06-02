// Hash table is just an object in javascript as shown

let user = {
  name: 'Anthony',
  age: 23,
  magic: true,
  scream: function() {
    console.log('ahhhhh');
  }
}

console.log(user.age);
user.spell = 'hokas pokus';
console.log(user.spell);
console.log(user);

user.scream();