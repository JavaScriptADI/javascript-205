const students = [
    { name: "Nika",  age: 19, grades: [8, 9, 10, 7], paid: true  },
    { name: "Anna",  age: 22, grades: [5, 4, 6, 5],  paid: false },
    { name: "Luka",  age: 25, grades: [10, 10, 9, 9], paid: true  },
    { name: "Marry", age: 20, grades: [6, 7, 6, 8],  paid: false },
    { name: "James", age: 31, grades: [3, 5, 4, 2],  paid: true  },
];
const PRICE = 500;

const names = students.map((s) => s.name);
console.log("1:", names);

function average(grades) {
    return grades.reduce((sum, g) => sum + g, 0) / grades.length;
}
console.log("2:", average([8, 9, 10, 7]));

const withAverage = students.map((s) => ({ name: s.name, average: average(s.grades) }));
console.log("3:", withAverage);

const passed = withAverage.filter((s) => s.average >= 6);
console.log("4:", passed);

function findStudent(name) {
    return students.find((s) => s.name === name) || null;
}
console.log("5:", findStudent("Luka"), findStudent("Bob"));

const debt = students.reduce((total, s) => s.paid ? total : total + PRICE, 0);
console.log("6:", debt);

const topStudent = withAverage.reduce((best, s) => s.average > best.average ? s : best).name;
console.log("7:", topStudent);

function report() {
    return students.map((s) => {
        const avg = average(s.grades);
        const status = avg >= 6 ? "PASSED" : "FAILED";
        const money = s.paid ? "paid" : `owes ${PRICE}`;
        return `${s.name.padEnd(5)} | ${avg.toFixed(2)} | ${status} | ${money}`;
    }).join("\n");
}
console.log("stretch:\n" + report());
