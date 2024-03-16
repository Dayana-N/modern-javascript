// Challenge 1
// Function expression
function getCelsius(n) {
  const celsius = ((n - 32) * 5) / 9;
  return Math.round(celsius);
}

// Arrow function
// const getCelsius = (n) => ((n - 32) * 5) / 9;

console.log(`The temperature is ${getCelsius(39)} \xB0C`);

// Challenge 2
arr = [1, 2, 3, 4, 5, 6];

const minMax = (array) => {
  let min = Math.min(...array);
  let max = Math.max(...array);
  return { min, max };
};

console.log(minMax(arr));

// Challenge 3
((length, width) => {
  console.log(
    `The area of a rectangle with a length of ${length} and a width of ${width} is ${
      length * width
    }.`
  );
})(3, 5);
