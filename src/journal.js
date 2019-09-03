// Backend logic
export function journal(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("My journal");
    } else if (i % 3 === 0) {
      output.push("Hi");
    } else if (i % 5 === 0) {
      output.push("Your journal");
    } else  {
      output.push(i);
    }
  }
  return output;
}
