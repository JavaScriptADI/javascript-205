const person = {
    firstName: "Nick",
    lastName: "Doe",
    age: 45
};

console.log(person.firstName);
console.log(person.lastName);
console.log(person["age"]);

// delete key value pair
delete person.firstName;

console.log(person.firstName);

// adds new key - value pair
person.pet = "Dog";

console.log(person.pet);
