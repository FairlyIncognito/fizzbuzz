// Linebreak function
let lineBreak = function() {
    document.write("<br>");
}       

// FizzBuzz
let answer = parseInt(prompt("FizzBuzz up to which number?"));

for (let i = 1; i <= answer; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        document.write("FizzBuzz");
        lineBreak(); // new line
    } else if(i % 3 === 0) {
        document.write("Fizz");
        lineBreak(); // new line
    } else if (i % 5 === 0) {
        document.write("Buzz")
        lineBreak(); // new line
    } else {
        document.write(i);
        lineBreak(); // new line
    }
}
