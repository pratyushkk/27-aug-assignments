//16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
try {
  const PI = 3.14;
  const radius = prompt("Enter Radius: ");
  const areaOfCircle = PI * (radius * radius);
  const circumference = 2 * (PI * radius);
  console.log(areaOfCircle);
  console.log(circumference);
} catch (error) {
  console.log("Enter Valid Input!", error.message);
}
