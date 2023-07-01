// calculation.js
function calculateFormula(x, y) {
  var numerator = Math.sin(x) + Math.cos(y);
  var denominator = Math.cos(x) - Math.sin(y);
  var tangent = Math.tan(x * y);
  return numerator * tangent / denominator;
}
