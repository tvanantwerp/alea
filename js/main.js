function iacto() {
  var words = document.getElementById('words').value,
      list = ['a', 'b', 'c'],
      passwordDisplay = document.getElementById('password'),
      passwordResult = '';

  for (var word = 0, count = words; word < count; word++) {
    passwordResult += list[Math.floor(Math.random() * 3)];
  }

  passwordDisplay.innerHTML = passwordResult;
}