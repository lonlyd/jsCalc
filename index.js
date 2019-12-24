var numbers = document.querySelectorAll('.number'),
  operations = document.querySelectorAll('.operation'),
  decimalBtn = document.getElementById('comma'),
  equalBtn = document.getElementById('equal'),
  clearBtns = document.querySelectorAll('.clear_btn'),
  factorialBtn = document.getElementById('factorial'),
  display = document.getElementById('display'),
  MemoryCurrentNumber = 0,
  MemoryNewNumber = false,
  memoryPendingOperation = '';

for (let i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  number.addEventListener('click', function (e) {
    numberPress(e.target.textContent);
  })
};

for (let i = 0; i < operations.length; i++) {
  var operationBtn = operations[i];
  operationBtn.addEventListener('click', function (e) {
    operation(e.target.textContent);
  });

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

function numberPress(number) {
  if (MemoryNewNumber) {
    display.value = number;
    MemoryNewNumber = false;
  } else {
    if (display.value === '0') {
      display.value = number;
    } else {
      display.value += number;
    }
    console.log('click to number ' + number);
  }

};

function operation(op) {
  var localOperationMemory = display.value;
  if (MemoryNewNumber && memoryPendingOperation !== '=') {
    display.value = MemoryCurrentNumber;
  } else {
    MemoryNewNumber = true;
    if (memoryPendingOperation === '+') {
      MemoryCurrentNumber += parseFloat(localOperationMemory);
    } else if (memoryPendingOperation === '-') {
      MemoryCurrentNumber -= parseFloat(localOperationMemory);
    } else if (memoryPendingOperation === '*') {
      MemoryCurrentNumber *= parseFloat(localOperationMemory);
    } else if (memoryPendingOperation === '/') {
      MemoryCurrentNumber /= parseFloat(localOperationMemory);
    } else {
      MemoryCurrentNumber = parseFloat(localOperationMemory);
    };
    display.value = MemoryCurrentNumber;
    memoryPendingOperation = op;
  }
  console.log('click to operation ' + op);
};

function clear(id) {
  if (id === 'ce') {
    MemoryCurrentNumber = 0;
    display.value = 0;
    MemoryNewNumber = 0;
    memoryPendingOperation = '';
  } else if (id === 'c') {
    display.value = 0;
    MemoryNewNumber = true;
  }
  console.log('click to ' + id);

};

function decimal(e) {
  var localDecimalMemory = display.value;
  if (MemoryNewNumber) {
    localDecimalMemory = '0.';
    MemoryNewNumber = false;
  } else {
    if (localDecimalMemory.indexOf('.') === -1) {
      localDecimalMemory += '.';
    };
  };
  display.value = localDecimalMemory;
  console.log('click to decimal');
};

function factorial(e) {
  var localFactoryMemory = display.value,
    result = 1;
  while (localFactoryMemory != 1) {
    result = result * localFactoryMemory;
    localFactoryMemory = localFactoryMemory - 1;
  };
  display.value = result;
}