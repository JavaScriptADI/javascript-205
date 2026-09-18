function sumDigits(n) {
  if (n < 10) {
    return n;
  }
  return (n % 10) + sumDigits(Math.floor(n / 10));
}

console.log(sumDigits(1234)); 
console.log(sumDigits(9));    
console.log(sumDigits(99999));


function countUp(from, to) {
  console.log(from);
  if (from >= to) {
    console.log("Done!");
    return;
  }
  countUp(from + 1, to);
}

countUp(3, 7);


function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
}

console.log(power(2, 10)); 
console.log(power(5, 0)); 