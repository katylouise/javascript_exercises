function masterSum() {
  var result = 0;
  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}

function sum() {
  return masterSum.apply(this, arguments);
}

console.log(sum(1, 2, 3, 4, 5, 6));