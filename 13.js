//13. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

try {
  let base = parseInt(prompt("Enter Base: "));
  let height = parseInt(prompt("Enter Height: "));
  let area = 0.5 * (base * height);
  console.log("Area of triangle: ", area);
} catch (error) {
  console.log("Enter Valid Input!", error.message);
}
