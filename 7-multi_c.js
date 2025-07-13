const argument = process.argv[2];

// Convert the argument to an integer.
const x = parseInt(argument);

// Check if 'x' is NaN (Not-a-Number).
// This condition covers cases where the argument is missing or cannot be converted to a number.
if (isNaN(x)) {
  console.log("Missing number of occurrences");
} else {
  // If 'x' is a valid number (including negative numbers or zero), proceed.
  // The loop will execute only if 'x' is a positive integer.
  // If 'x' is 0 or negative, the loop condition (i < x) will immediately be false,
  // resulting in no output, which matches the required behavior for negative inputs.
  for (let i = 0; i < x; i++) {
    console.log("C is fun");
  }
}
