const numbers = [-9, 6, -2, 2];
const double = numbers.reduce((previousvalue, currentvalue) => {
  if (currentvalue > 0) {
    const double = currentvalue * 2;
    previousvalue.push(double);
  }
  return previousvalue;
}, []);
console.log(double);
