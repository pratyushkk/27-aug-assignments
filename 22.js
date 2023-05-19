//22. Write a program which tells the number of days in a month.
const getNumberOfDaysInMonth = (month) => {
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

  const dateObj = new Date();
  // using zero in plcae of days it will return last day of previous month
  return [
    months[month - 1],
    new Date(dateObj.getFullYear(), month, 0).getDate(),
  ];
};
const curMonth = 2;
console.log(
  `\t (Ans 22) There are ${getNumberOfDaysInMonth(curMonth)[1]} days in ${
    getNumberOfDaysInMonth(curMonth)[0]
  }`
);
