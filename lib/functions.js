function square(number) {
  return number * number;
}

const squareArrow = (number) => {
  const answer = number * number;
  return answer;
};


const squareArrowShort = number => number * number;

const sayHi = () => {
  const message = 'Hi';
  return message;
};

// Inspired by:
// f(x) = x + 5

console.log(square(3));
console.log(squareArrow(3));
console.log(squareArrowShort(3));

console.log(sayHi());
