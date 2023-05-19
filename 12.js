// Q12. Use the Date object to do the following activities
//    - What is the year today?
//   - What is the month today as a number?
//    - What is the date today?
//   - What is the day today as a number?
//   - What is the hours now?
//   - What is the minutes now?
//   - Find out the numbers of seconds elapsed from January 1, 1970 to now.

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();
const day = now.getDay();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = Date.now();
console.log(
  `
    \t Year: ${year}
    \t Month: ${month}
    \t Date: ${date}
    \t Day: ${day}
    \t Hours: ${hours}
    \t Minutes: ${minutes}
    \t Seconds: ${seconds}

    `
);
