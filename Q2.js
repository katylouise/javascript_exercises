String.prototype.camelCase = function() {
  var arr = this.split(" ");
  for (var i = 1; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
  }
  return arr.join("");
}

console.log('your soul is mine'.camelCase());
console.log(' Get over      here! '.camelCase());