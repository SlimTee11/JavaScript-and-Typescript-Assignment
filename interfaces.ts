//task 3
interface Student {
    id: number;
    name: string;
    age: number;
    course: string;
    isActive: boolean;
}

const student1: Student = {
    id: 1,
    name: "Adesewa",
    age: 22,
    course: "Web Development",
    isActive: true
};

const student2: Student = {
    id: 2,
    name: "Tola",
    age: 21,
    course: "Frontend Development",
    isActive: true
};

console.log(student1);
console.log(student2);

interface Instructor {
    name: string;
    cohort: number;
    subjects: string[];
}

function introduceInstructor(instructor: Instructor): string {
    return `${instructor.name} teaches Cohort ${instructor.cohort} and covers: ${instructor.subjects.join(",")}`;
}

const instructor1: Instructor = {
    name: "Stanley",
    cohort: 8,
    subjects: ["HTML", "CSS", "JavaScript"]
};

console.log(introduceInstructor(instructor1));