const argument = process.argv[2];

const size = parseInt(argument);


if (isNaN(size) || size < 0) {
  console.log("Missing size");
} else {
 
  for (let i = 0; i < size; i++) {
    let row = ""; 
    for (let j = 0; j < size; j++) {
      row += "X"; 
    }
    console.log(row); 
  }
}