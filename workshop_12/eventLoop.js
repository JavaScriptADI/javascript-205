console.log(1);

const seconds = 1000;
let data;
let start = new Date();

fetch("https://dummyjson.com/products?limit=5&select=title,price")
    .then(response => {
        console.log(new Date() - start);
        return response.json();
    })
    .then(d => {
        console.log(2);
        console.log(d);
        data = d;
    });


setTimeout(() => {
    console.log(4);
},  180);

console.log(3);

// while (!data) {
//     console.log("Heelp!");
// }
