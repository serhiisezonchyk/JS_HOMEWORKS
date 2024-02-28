'use strict';

const fahrenheitToCelsius = (degrees) => ((degrees - 32) * 5) / 9;

const celsiusToFahrenheit = (degrees) => (degrees * 9) / 5 + 32;

const convertTemperatureString = (degrees, scale) => {
  if (scale === 'F') {
    return `${degrees} \u00B0F --> ${fahrenheitToCelsius(degrees)} \u00B0C`;
  } else if (scale === 'C') {
    return `${degrees} \u00B0C --> ${celsiusToFahrenheit(degrees)} \u00B0F`;
  } else {
    return 'Unknown scale';
  }
};

const degrees = prompt('Enter degrees:');

if (isNaN(+degrees)) {
  alert(`Cannot convert ${degrees}. It must be a number`);
} else {
  const scale = prompt('Enter the scale (C or F):');
  alert(convertTemperatureString(degrees, scale));
}
