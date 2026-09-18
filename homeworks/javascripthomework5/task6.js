const students = [
  { name: "Nino", age: 19, score: 91 },
  { name: "Giorgi", age: 17, score: 68 },
  { name: "Mariam", age: 22, score: 75 },
  { name: "Luka", age: 20, score: 55 },
  { name: "Ana", age: 18, score: 83 },
  { name: "Dato", age: 21, score: 70 },
];


const names = students.map(s => s.name);
console.log("Names:", names);

const passed = students.filter(s => s.score >= 70).map(s => s.name);
console.log("Passed:", passed);


const mariam = students.find(s => s.name === "Mariam");
console.log("Mariam's score:", mariam.score);


const anyoneUnder18 = students.some(s => s.age < 18);
console.log("Anyone under 18?", anyoneUnder18);


const everyoneAbove50 = students.every(s => s.score > 50);
console.log("Everyone above 50?", everyoneAbove50);


const averageScore = (students.reduce((sum, s) => sum + s.score, 0) / students.length).toFixed(1);
console.log("Average score:", averageScore);


const bestStudent = students.reduce((best, s) => (s.score > best.score ? s : best), students[0]);
console.log("Best student:", bestStudent.name);