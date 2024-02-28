'use strict';

const degrees = prompt('Enter degrees:');

if (isNaN(+degrees)) {
  alert(`Cannot convert ${degrees}. It must be a number`);
} else {
  const scale = prompt('Enter the scale (C or F):');
  alert(convertTemperatureString(degrees, scale));
}

function fahrenheitToCelsius(degrees) {
  return ((degrees - 32) * 5) / 9;
}
function celsiusToFahrenheit(degrees) {
  return (degrees * 9) / 5 + 32;
}

function convertTemperatureString(degrees, scale) {
  if (scale === 'F') {
    return `${degrees} \u00B0F --> ${fahrenheitToCelsius(degrees)} \u00B0C`;
  } else if (scale === 'C') {
    return `${degrees} \u00B0C --> ${celsiusToFahrenheit(degrees)} \u00B0F`;
  } else {
    return 'Unknown scale';
  }
}
