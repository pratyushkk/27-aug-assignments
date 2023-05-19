//21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//    - September, October or November, the season is Autumn.
//    - December, January or February, the season is Winter.
//    - March, April or May, the season is Spring
//    - June, July or August, the season is Summer

const checkSeason = (season) => {
  switch (season.toLowerCase()) {
    case "september":
    case "october":
    case "november":
      return "Autumn";

    case "december":
    case "january":
    case "february":
      return "Winter";

    case "march":
    case "april":
    case "may":
      return "Spring";

    case "june":
    case "july":
    case "august":
      return "Summer";
    default:
      return "Invalid Season";
  }
};

console.log(`\t (Ans 21) ${checkSeason("december")}`);
