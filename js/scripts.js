function naturalNumbers(number) {
  var total = 0;
  for (var i = 1; i <= 1000; i ++) {
    if ((i % 5) === 0 || (i % 3) === 0) {
      total += (i);
    }
  }
  return total;
}

$(document).ready(function() {
  var total = naturalNumbers(total);
  $("#answer").text(total);
});
