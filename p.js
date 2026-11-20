const numbers = [2, 4, 6];
const same = numbers;
const copy = [...numbers];

same[0] = 99;
copy[1] = 40;

console.log(numbers);
console.log(same === numbers, copy === numbers); 