var arg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function amount(x, y, z = 10) {
  return x + y * z;
};
var func = function(x) {

  for (i = 0; i <= arg.length; i++) {
    if (x == arg[i]) {
      console.log(`Value ${x} is included to this array.`);
    } else {
      console.log(arg[i]);
    }
  }
};
console.log(amount(10, 5));
func(4);
