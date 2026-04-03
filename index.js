const { add, multiply } = require('./src/math');
const { capitalize } = require('./src/string');

function main() {
    const sum = add(5, 3);
    const product = multiply(4, 2);
    const name = capitalize("yash");

    console.log("Sum:", sum);
    console.log("Product:", product);
    console.log("Name:", name);
}

main();