const numbers = [3, 22, 12, 17, 24];
const evenNumbers = numbers.filter(number => number % 2 === 0&& number > 10);
const negativeNumbers = numbers.filter(number => number <0 &&number/3==0);
console.log(evenNumbers);
console.log(negativeNumbers);