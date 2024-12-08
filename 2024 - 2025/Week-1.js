function bitmasking(base, exponent, modulus) {
  let result = 1;
  base = base % modulus;

  while (exponent > 0) {
    if (exponent & 1) {
      result = (result * base) % modulus;
    }

    exponent = exponent >> 1;

    base = (base * base) % modulus;
  }
  return result;
}

function calculate() {
  let max = 0;
  let year = 0;

  for (let i = 1; i <= 45; i++) {
    let square = i * i;

    let answer = bitmasking(square, square, 10000);

    if (answer > max) {
      max = answer;
      year = square;
    }
  }
  console.log(`Year: ${year}, last four digits: ${max}`);
  return year;
}

let year = calculate();
console.log(year);
