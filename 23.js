//23. Write a program which tells the number of days in a month, now consider leap year.
const getNumberOfDaysInMonthLeapYear = (year, month) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const daysInMonth = new Date(year, month, 0).getDate();

  if ((year % 4 === 0 || year % 400 === 0) && year % 100 !== 0) {
    // using zero in plcae of days it will return last day of previous month
    return `There are ${daysInMonth} days in ${months[month - 1]} (Leap Year)`;
  }
  return `There are ${daysInMonth} days in ${months[month - 1]}`;
};
console.log(`\t (Ans 23) ${getNumberOfDaysInMonthLeapYear(2024, 2)}`);
