exports.min = function min (array) {
  
  if(array === undefined || array.length === 0) {
    return 0
  }
   return Math.min.apply(null, array);
}

exports.max = function max (array) {
  if(array === undefined || array.length === 0) {
    return 0
  }
   return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
  if(array === undefined || array.length === 0) {
    return 0
  }
  var total = array.reduce(function (sum, current) {
    return sum + current;
  });
  return total / array.length;
}

