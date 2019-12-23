var numbers = document.querySelectorAll('.number'),
  operations = document.querySelectorAll('.operation'),
  decimalBtn = document.getElementById('comma'),
  equalBtn = document.getElementById('equal'),
  clearBtns = document.querySelectorAll('.clear_btn'),
  factorialBtn = document.getElementById('factorial');


for (let i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  number.addEventListener('click', numberPress)
};

for (let i = 0; i < operations.length; i++) {
  var operationBtn = operations[i];
  operationBtn.addEventListener('click', operation)

};

for (let i = 0; i < clearBtns.length; i++) {
  var clearBtn = clearBtns[i];
  clearBtn.addEventListener('click', function (e) {
    clear(e.srcElement.id);
  })
};

decimalBtn.addEventListener('click', decimal);

equalBtn.addEventListener('click', equal);

factorialBtn.addEventListener('click', factorial);

function numberPress(e) {
  console.log('click to number');
};

function operation(e) {
  console.log('click to operation');
};

function clear(id) {
  console.log('click to ' + id);
};

function decimal(e) {
  console.log('click to decimal');
};

function equal(e) {
  console.log('click to equal');
};

function factorial(e) {
  console.log('click to factorial');
};