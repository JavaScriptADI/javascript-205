const age = 15;

// ასაკი მეტია 13 და ასაკი ნაკლებია 20
// console.log(age > 13 && age < 20);
const isTeenager = 13 < age && age < 20;
console.log(isTeenager);

// ასაკი ნაკლებია 13 ან ასაკი მეტია ან ტოლია 20

const isNotTeenager = age < 13 || 20 <= age;
console.log(isNotTeenager);

console.log(!isTeenager);
