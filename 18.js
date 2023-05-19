//18. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

try {
  const yourAge = parseInt(prompt("Enter Your Age: "));
  if (yourAge >= 18) {
    console.log(`You are old enough to drive`);
  } else {
    let remainingAge = 18 - yourAge;
    console.log(`
            \t you'll have to wait ${remainingAge} years to turn 18.
            `);
  }
} catch (error) {
  console.log(`\n\t Enter Valid Input ${error.message}`);
}
