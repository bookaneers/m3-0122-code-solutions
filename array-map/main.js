const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const double = numbers.map(num => num * 2);
console.log(double);

const prices = numbers.map(num => parseFloat(num).toFixed(2));
console.log(prices);

const upperCased = languages.map(lang => lang.toUpperCase());
console.log(upperCased);

const firstLetters = languages.map(lang => lang.slice(0,1));
console.log(firstLetters);
