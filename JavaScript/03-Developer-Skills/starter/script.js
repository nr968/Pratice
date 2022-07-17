// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*const temperatures = [3, 2, 6, 1, 'error', 9, 13, 17, 15, 14, 9, 5];

const temperatures2 = [10, 9, 8, 7, 6, 'error', 10, 18, 676];

const calcTempAltitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (currentTemp === 'error') continue;
    if (max < currentTemp) max = currentTemp;
    if (min > currentTemp) min = currentTemp;
  }

  console.log(`MAX = ${max} MIN = ${min}`);

  return max - min;
};

const calcTempAltitudeNew = function (temps1, temps2) {
  const temps = temps1.concat(temps2);
  return calcTempAltitude(temps);
};

console.log(calcTempAltitudeNew(temperatures, temperatures2));
*/

// CODING CHALLENGE 1

const printForecast = (arr) => {
  let message = '... ';
  for (let i = 0; i < arr.length; i++) {
    message += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  return message;
};

console.log(printForecast([17, 21, 23]));
