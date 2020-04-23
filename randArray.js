var array = [];

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rArray(arr) {
  var i = 10;
  for (var j = 0; j < i; j++) {
    var value = getRandom(1, 100);
    arr.push(value);
    console.log(value);
  }
}
rArray(array);