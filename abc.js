var size = 8;
var line = '';

for(var i = 0; i < size; i++) {
  if (i % 2 == 0) {
    line = '#';
  }
  else {
    line = ' ';
  }

  for(var j = 0; j < size; j++) {
    if (line.slice(-1) == '#') {
      line = line + ' ';
    }
    else {
      line = line + '#';
    }
  }
  console.log(line);
}
