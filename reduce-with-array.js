const array = [1, 2, 3, 4];
const initialvalue = 0;
const sumwithinitial = array.reduce(
  (previousvalue, currentvalue) => previousvalue + currentvalue,
  initialvalue
);
console.log(sumwithinitial);
