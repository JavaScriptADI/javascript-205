let khinkaliCounter = 0

function makeRawKhinkali() {
    console.log("ვამზადებ ცომს");
    console.log("დავდოთ ხორცი ცომზე");
    console.log("მოვახვიოთ");
    return khinkaliCounter++;
}

const plate = [];

for (let i = 0; i < 10; i++) {
    plate.push(makeRawKhinkali());
}

console.log(plate);
