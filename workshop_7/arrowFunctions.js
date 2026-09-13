const f = (x) => {
    console.log(x + 2);
    console.log(x + 3);
    return x + 1;
};

console.log(f(5));

// const c = n => { 
//     n * 2;
// }

// console.log(c(5));
// const a = () => 42;
// console.log(a());

const createPerson = (n, age) => ({"name": n, "age": age});

console.log(createPerson("Gigi", 25)) // {name: "Gigi", age:}
console.log(createPerson);
