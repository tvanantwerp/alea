function iacto() {
  var words = document.getElementById('words').value,
      wordlist = 'data/wordlist.csv',
      passwordDisplay = document.getElementById('password'),
      xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {

    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

      var passwordLookup = [],
          passwordResult = '',
          theList = csvToObj(xmlhttp.responseText);

      for (var word = 0, count = words; word < count; word++) {
        var digits = [];

        for (var i = 0, j = 5; i < j; i++) {
          digits.push(Math.floor((Math.random() * 6) + 1));
        }

        passwordLookup.push(digits.join(''));
      }

      for (var m = 0, n = passwordLookup.length; m < n; m++) {
        passwordResult += ('<span class="single-word">' + theList[passwordLookup[m]] + '</span>');
      }

      passwordDisplay.innerHTML = passwordResult;

    } else if (xmlhttp.readyState == 4 && xmlhttp.status != 200) {
      passwordDisplay.innerHTML = "Something went wrong";
    }
  };

  xmlhttp.open('GET', wordlist, true);
  xmlhttp.send();
}

function csvToObj(csv) {
  var lines = csv.split(/\r\n|\n/),
      result = {};

  for (var i = 0, j = lines.length; i < j; i++) {
    var line = lines[i].split(',');
    result[line[0]] = line[1];
  }

  return result;
}
