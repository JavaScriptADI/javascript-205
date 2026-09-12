let score = 10;

function showLocalScore() {
    let score = 50;
    console.log("A:", score);
}
// this will types  A and 50, because in let we have new meaning and 50 is local score now.

function addBonus() {
    score += 5;
    console.log("B:", score);
}
// i guess here will be b , 15, in short, it's given whithout let, so checks what was the initial score in let and than replace it.

function makeMessage() {
    let message = "Well done!";
    console.log("C:", message); 
}
// this console log wont be shown, beacuse it is in local space, unless i call it, it works only there.

console.log("1:", score);
// it will print 1:, 10 / firs let is still 10 here

showLocalScore();
console.log("2:", score);
// since we gave new validation wich is 15 , it prints '2:' and 15.

if (score > 5) {
    let score = 99;
    console.log("3:", score);
}
// prints '3', 99. if condition will be true, because 10 > 5.
console.log("4:", score);
// it prints '4', 10. score is still 10. 

addBonus();
console.log("5:", score);
// '5:', 15

makeMessage();
// console.log("6:", message);
// there is no return and let is in local so it wont show massage.