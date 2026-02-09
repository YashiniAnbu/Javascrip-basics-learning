//Calculator logics

let num1 = 20;
let num2 = 4;
let operator = "/";

if (operator === "+") {
    console.log (num1 + num2);
}
else if (operator === "-") {
    console.log(num1 - num2);
}
else if (operator === "*") {
    console.log(num1 * num2);
}
else if (operator === "/") {

    if (num2 === 0) {
        console.log("Error: Division by zero");
    } else {
        console.log(num1 / num2);
    }
}
else if (operator === "%") {
    console.log(num1 % num2);
}
else {
    console.log("Invalid operator");
}

//Grade logics
let marks = 72;
marks += 5;
let grade="";

if (marks >= 90 && marks <= 100) {
    grade = "A";
}
else if (marks >= 70 && marks <= 89) {
    grade = "B";
}
else if (marks >= 50 && marks <= 69) {
    grade = "C";
}
else {
    grade = "F";
}

let result = (marks >= 50) ? "Pass" : "Fail";
let remark="";

switch (grade) {
    case "A":
        remark = "Excellent!";
        break;
    case "B":
        remark = "Good";
        break;
    case "C":
        remark = "Average";
        break;
    case "F":
        remark = "Needs Improvement";
        break;
    default:
        remark = "Invalid";
}
console.log("Marks  :", marks);
console.log("Grade  :", grade);
console.log("Result :", result);
console.log("Remark :", remark);