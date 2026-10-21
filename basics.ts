let studentName: string = "Tunde";
let studentAge: number = 21;
let isEnrolled: boolean = true;

console.log(studentName);
console.log(studentAge);
console.log(isEnrolled);

//the original code used number for the couse name instead of string
let courseName: string = "Frontend Development";
console.log(courseName);

//task 2
function addNumbers(a: number, b:number): number{
    return a + b;
}
console.log(addNumbers(5,3));

function isAdult(age: number): boolean{
    return age >= 18;
}
console.log(isAdult(21));
console.log(isAdult(16));

function getArea(width: number, height: number): number{
    return width * height;
}
console.log(getArea(8,5));

const names: string[] = ["Ada", "Bola", "Chidi"];
const scores: number[] = [78, 90, 55, 88];

console.log(names);
console.log(scores);


function formatId(id: string | number): string {
    return String(id);
}
console.log(formatId(123));
console.log(formatId("STU-001"));