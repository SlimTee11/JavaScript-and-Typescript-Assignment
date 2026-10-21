"use strict";
let studentName = "Tunde";
let studentAge = 21;
let isEnrolled = true;
console.log(studentName);
console.log(studentAge);
console.log(isEnrolled);
//the original code used number for the couse name instead of string
let courseName = "Frontend Development";
console.log(courseName);
//task 2
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(5, 3));
function isAdult(age) {
    return age >= 18;
}
console.log(isAdult(21));
console.log(isAdult(16));
function getArea(width, height) {
    return width * height;
}
console.log(getArea(8, 5));
const names = ["Ada", "Bola", "Chidi"];
const scores = [78, 90, 55, 88];
console.log(names);
console.log(scores);
function formatId(id) {
    return String(id);
}
console.log(formatId(123));
console.log(formatId("STU-001"));
