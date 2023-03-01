"use strict";

// const x = 123;

// if (x == 123) {
// console.log(x);
// }

// const calcAge = (birthYear) => 2037 - birthYear;

const tempretures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps1, temps2) {
  let temps = temps1.concat(temps2);
  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    if (typeof currentTemp !== "number") continue;
    if (currentTemp > max) max = currentTemp;

    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);

  return max - min;
};

const amplitude = calcTempAmplitude([3, 5, 1], [9, 4, 5]);
console.log(amplitude);

/*-------------------------------------- */

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("Degree Celsius")),
  };
  console.log(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

// console.log(measureKelvin());
