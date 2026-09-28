// console.log(new Date());
let start = new Date();
setInterval(() => {
    console.log("Hi there");
    let end = new Date();
    console.log(end - start);
    // for (let i = 0; i < 1000; i++) {
    //     console.log(i);
    // }
    start = new Date();
}, 1000);