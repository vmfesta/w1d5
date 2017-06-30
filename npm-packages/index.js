var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
console.log(message);

console.log(chalk.red("This is red") + chalk.white(" with white"));

