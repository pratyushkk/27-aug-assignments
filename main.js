//24. Create a separate countries.js file and store the countries array in to this file,
// create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

import { countries } from "./countries.js";
import { webTechs } from "./web_techs.js";
console.log(countries);
console.log(webTechs);

/**
25. In the following shopping cart add, remove, edit items
    => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    - add 'Meat' in the beginning of your shopping cart if it has not been already added
    - add Sugar at the end of you shopping cart if it has not been already added
    - remove 'Honey' if you are allergic to honey
    - modify Tea to 'Green Tea'
  */
const store = {
  shoppingCart: ["Milk", "Coffee", "Tea", "Honey"],
  addAtStart: function (prod) {
    if (!this.shoppingCart.includes(prod)) {
      this.shoppingCart.unshift(prod);
    } else {
      console.log(`${prod} Already added`);
    }
  },
  addAtEnd: function (prod) {
    if (!this.shoppingCart.includes(prod)) {
      this.shoppingCart.push(prod);
    } else {
      console.log(`${prod} Already added`);
    }
  },
  removeHoney: function (isAllergic) {
    if (isAllergic) {
      const index = this.shoppingCart.indexOf("Honey");
      if (index !== -1) {
        this.shoppingCart.splice(index, 1);
      } else {
        console.log(`Honey Already Removed!`);
      }
    }
  },
  modifyTea: function () {
    const index = this.shoppingCart.indexOf("Tea");
    if (index !== -1) {
      this.shoppingCart.splice(index, 1, "Green Tea");
    }
  },
};

store.addAtStart("Meat");
store.addAtEnd("Sugar");
store.removeHoney(true);
store.modifyTea();
console.log(store.shoppingCart);

/**
 * 26. In countries array check if 'Ethiopia' exists in the array
 * if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
 */
if (countries.includes("Ethiopia")) {
  console.log(countries.find((e) => e === "Ethiopia").toUpperCase());
} else {
  countries.push("Ethiopia");
  console.log(countries);
}

/**
 * 27. The following is an array of 10 students ages:
    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    - Sort the array and find the min and max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use abs() method
 */
const studentAges = {
  ages: [19, 22, 19, 24, 20, 25, 26, 24, 25, 24],
  sort: function () {
    this.ages.sort((a, b) => a - b);
  },
  min: function () {
    return this.ages[0];
  },
  max: function () {
    return this, this.ages.at(-1);
  },
  medianAge: function () {
    if (this.ages.length % 2 === 0) {
      const middleIndex = Math.floor(this.ages.length / 2);
      return (this.ages[middleIndex - 1] + this.ages[middleIndex]) / 2;
    } else {
      const middleIndex = Math.floor(this.ages.length / 2);
      return this.ages[middleIndex];
    }
  },
  averageAge: function () {
    const sum = this.ages.reduce(
      (prevValue, currentValue) => prevValue + currentValue,
      0
    );
    return sum / this.ages.length;
  },
  ageRange: function () {
    return this.max() - this.min();
  },
  compare: function () {
    const minAvgAge = Math.floor(Math.abs(this.min() - this.averageAge()));
    const maxAvgAge = Math.floor(Math.abs(this.max() - this.averageAge()));
    if (minAvgAge === maxAvgAge) {
      console.log("Matched");
    }
  },
};

studentAges.sort();
console.log(`Min age ${studentAges.min()}`);
console.log(`Max age ${studentAges.max()}`);
console.log(`Median Age ${studentAges.medianAge()}`);
console.log(`Average Age ${studentAges.averageAge()}`);
console.log(`Age ranges ${studentAges.ageRange()}`);
studentAges.compare();

/**
 * 28. Use for loop to iterate from 0 to 100 and print only prime numbers
 */
const isPrime = (number) => {
  if (number === 0 || number === 1) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

for (let i = 0; i <= 100; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

/**
 * 29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
 */

const sumOfEvenOdds = () => {
  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
      evenSum += i;
    } else {
      oddSum += i;
    }
  }
  return `Sum of even ${evenSum} & Sum of odd ${oddSum} from 0 to 100`;
};

console.log(sumOfEvenOdds());

/**
 * 30. Write a script which generates a random hexadecimal number.
 */
const getRandomHexaDecimalNumber = () => {
  const chars = "0123456789abcdef";
  const number = [];
  for (let i = 0; i < 10; i++) {
    number.push(chars[Math.floor(Math.random() * 16)]);
  }
  return number.join("");
};
console.log(`Random Hexadecimal number ${getRandomHexaDecimalNumber()}`);

/**
 * 31. Sort the webTechs array and mernStack array
    countries Array : https://gist.github.com/incredimike/1469814
 */
countries.sort();
console.log(countries);

/**
 * 32. Array Questions
    - Extract all the countries contain the word 'land' from the countries array and print it as array
    - Find the country containing the hightest number of characters in the countries array
    - Extract all the countries contain the word 'land' from the countries array and print it as array
    - Extract all the countries containing only four characters from the countries array and print it as array
    - Extract all the countries containing two or more words from the countries array and print it as array
    - Reverse the countries array and capitalize each country and stored it as an array

 */

// Ans 1.
const filteredCountries = countries.filter((country) => {
  if (country.includes("land")) {
    return true;
  } else {
    return false;
  }
});
// Ans 2.
let hightestCharacters = countries[0].length;
for (let country of countries) {
  if (country.length > hightestCharacters) {
    hightestCharacters = country.length;
  }
}
// Ans 3
const countriesWithFourChars = countries.filter((country) => {
  if (country.length === 4) {
    return true;
  } else {
    return false;
  }
});
// Ans 4
const countriesWithTwoOrMoreWords = countries.filter((country) => {
  if (country.split(" ").length >= 2) {
    return true;
  } else {
    return false;
  }
});
// Ans 5
countries.reverse();
const newCountries = countries.map((country) => country.toUpperCase());
newCountries.sort();
console.log(filteredCountries);
console.log(hightestCharacters);
console.log(countriesWithFourChars);
console.log(countriesWithTwoOrMoreWords);
console.log(newCountries);

/**
 * 33. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. 
 * Write a function which calculates bmi. BMI is used to broadly define different weight groups 
 * in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese 
 * based the information given below.
    - The same groups apply to both men and women.
    - Underweight: BMI is less than 18.5
    - Normal weight: BMI is 18.5 to 24.9
    - Overweight: BMI is 25 to 29.9
    - Obese: BMI is 30 or more
 */
const calculateBMI = (weight, height) => {
  const bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);

  if (bmi < 18.5) {
    return `Underweight: BMI is less than 18.5`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return `Normal weight: BMI is ${bmi}`;
  } else if (bmi >= 25 && bmi <= 29.9) {
    return `Overweight: BMI is ${bmi}`;
  } else if (bmi >= 30) {
    return `Obese: BMI is 30 or more`;
  }
};

console.log(calculateBMI(55, 168));

/**
 * 34. Linear equation is calculated as follows: ax + by + c = 0.
 * Write a function which calculates value of a linear equation, solveLinEquation.
 */
const solveLinEquation = (a, b, c) => {
  let flag = false;
  // traverse for all possible values
  for (let i = 0; i * a <= c; i++) {
    // check if it is satisfying the equation
    if ((c - i * a) % b == 0) {
      flag = true;
      console.log(`x = ${i} y = ${(c - i * a) / b}`);
    }
  }
  if (!flag) {
    console.log("No solution");
  }
};
solveLinEquation(4, 8, 12);

/**
 * 35. Write a functions which checks if all items are unique in the array.
 */
const isArrayUnique = (array) => {
  // return array.length === new Set(array).size;

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        return "Given array is not unique!";
      }
    }
  }
  return "Given array is unique";
};

console.log(isArrayUnique([1, 2, 3, 4, 5]));
