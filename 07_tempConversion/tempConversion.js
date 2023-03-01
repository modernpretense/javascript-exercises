const convertToCelsius = function(fahrenheitInput) {
  
  return Math.round(((fahrenheitInput-32) * (5 / 9)) * 10) / 10;

};



const convertToFahrenheit = function(celciusInput) {

  return Math.round((celciusInput*(9/5)+32) * 10) / 10;
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
