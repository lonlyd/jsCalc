var buttons = document.getElementsByTagName('button');
var display = document.getElementById('display');

var handleClick = function (e) {
  var value = e.target.textContent;
  display.value = value;
}

for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  button.addEventListener('click', handleClick);

}