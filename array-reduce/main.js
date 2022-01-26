const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = (total, currentValue) => total + currentValue;
console.log(numbers.reduce(sum));

const multiply = (total, currentValue) => total * currentValue;
console.log(numbers.reduce(multiply));

const balance = (total, currentValue) => {
  if (currentValue.type === 'deposit') return total + currentValue.amount;
  if (currentValue.type === 'withdrawal') return total - currentValue.amount;
};
console.log(account.reduce(balance, 0));

const finalObj = (key, value) => {
  // console.log(key);
  // console.log(value);
  Object.assign(key, value);
  return key;
}

console.log(traits.reduce(finalObj))
