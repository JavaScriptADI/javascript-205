function add(a,b) {
    return a+b;
}
function multiply(a,b) {
    return a*b;
}
function fullname(firstname, lastname) {
    return firstname + "  " +lastname;
}
function celsiusToFahrenheit(celsius) {
    return celsius * 9/5 + 32;
}
console.log(add(3, 4));
console.log(multiply(3, 4));
console.log(fullname("Nino", "Beridze"));
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(100));
console.log(add(add(1, 2), 3));