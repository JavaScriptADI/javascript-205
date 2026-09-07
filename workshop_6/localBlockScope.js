let x = 2; 

if (true) {
    let x = 4;          // new x, block only
    let y = 7;

    console.log(x);
    console.log(y);     
}


console.log(x);
console.log(y);