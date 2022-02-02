function ExampleClass(eclass) {
  this.eclass;
}

ExampleClass.prototype.getClass = function () {
  return this.eclass;
}

const example = new ExampleClass('coding 101');

console.log('typeof example:', typeof example);
console.log('value of example:', example);

console.log('typeof example.__proto__', typeof example.__proto__);
console.log('value of example.__proto__', example.__proto__);

console.log('typeof ExampleClass.prototype:', typeof ExampleClass.prototype);
console.log('value of ExampleClass.prototype:', ExampleClass.prototype);

console.log('example instanceof ExampleClass', example instanceof ExampleClass);
