const screenSize = [1920, 1080];
const person = {
    name: "George",
    lastName: "Washington"
};
// const width = screenSize[0];
// const height = screenSize[1];
// destructure
const [width, height] = screenSize;
const {name, lastName} = person;

console.log(width, height);
console.log(name, lastName);
