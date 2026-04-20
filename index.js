let code1; // Q1
code1 = 7 + 3; // Q2 == 10

const code2 = (100 - 20) / 2; // Q3 == 40
const code3 = 30 + (19 % 10); // Q4 == 39

const message = "The vault has been secured. The combination is: "; // Q5

const codeA = code1 + "-" + code2 + "-" + code3; // Q6 == "10-40-39"
const codeB = `${code1}-${code2}-${code3}`; // Q7 == "10-40-39"

console.log(message, codeA, codeB); // Q8
