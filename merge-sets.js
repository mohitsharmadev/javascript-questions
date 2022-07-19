const set1 = new Set(["one", "two"]);
const set2 = new Set(["three", "four"]);

const set3 = new Set([...set1, ...set2]);
console.log(set3);
