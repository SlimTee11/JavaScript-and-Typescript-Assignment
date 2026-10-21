"use strict";
const student1 = {
    id: 1,
    name: "Adesewa",
    age: 22,
    course: "Web Development",
    isActive: true
};
const student2 = {
    id: 2,
    name: "Tola",
    age: 21,
    course: "Frontend Development",
    isActive: true
};
console.log(student1);
console.log(student2);
function introduceInstructor(instructor) {
    return `${instructor.name} teaches Cohort ${instructor.cohort} and covers: ${instructor.subjects.join(",")}`;
}
const instructor1 = {
    name: "Stanley",
    cohort: 8,
    subjects: ["HTML", "CSS", "JavaScript"]
};
console.log(introduceInstructor(instructor1));
