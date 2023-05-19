//19. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

const isEven = (number) => {
  // if empty string was passed
  if (typeof number === "string" && number.length === 0) {
    return "Enter Valid Number";
  }
  //checking that passed argument is valid number or not
  if (isNaN(number)) {
    return "Enter Valid Number";
  }

  if (parseInt(number) % 2 === 0) {
    return `${number} is even number`;
  } else {
    return `${number} is not even number`;
  }
};
console.log(`
    \t (Ans 19.) ${isEven(8)}
`);
