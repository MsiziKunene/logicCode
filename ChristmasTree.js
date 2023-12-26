function drawTree(height) {
  for (let i = 0; i < height; i++) {
    // Create a string of spaces for indentation
    const spaces = " ".repeat(height - i - 1);

    // Create a string of stars for the tree's branches
    const stars = "*".repeat(2 * i + 1);

    // Print the spaces and stars to form the tree shape
    console.log(spaces + stars);
  }

  // Add the trunk
  const trunkBase = " ".repeat(height - 1);
  console.log(trunkBase + "I");
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("How old are you ", (value) => {
  console.log(value);
  readline.close();
});
