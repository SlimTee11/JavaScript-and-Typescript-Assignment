import formatCurrency,{
    add,
    capitalize,
    APP_VERSION
}from "./utils.js";

console.log("My JavaScript assignment has started");
//Arrow function
const square = (n) => n * n;
console.log(square(5));

const greet =(name) => "Hello," + name + "!";
console.log(greet("Victoria"));

const multiply = (a,b) => a * b;
console.log(multiply(4,3));

const getFullName = (firstName, lastName) => firstName + " " + lastName;
console.log(getFullName("Boluwatife", "Victoria"));

//Destructing
const student = {
    name: "Faith",
    age: 22,
    course: "Backend Development",
    city: "Lagos"
};
const {name, course} =student;
console.log(name);
console.log(course);

const {age:studentAge}=student;
console.log(studentAge);

const scores = [88, 72, 95, 60,45];
const[firstScore, secondScore] = scores;
console.log(firstScore);
console.log(secondScore);

//Spread operator
const frontend = ["HTML","CSS", "JavaScript"];
const backend = ["Node.js", "Express", "MongoDB"];
const fullStack = [...frontend, ...backend];
console.log(fullStack);

const userProfile ={
    username: "slim_tee11",
    email : "slim@gmail.com"
};

const updatedProfile = {
    ...userProfile,
    email: "slimtee11@gmail.com"
};
console.log("Initial Profile:", userProfile);
console.log("Updated Profile:", updatedProfile);


//Template literals
const personName = "Fatima";
const age = 24;
const intro = `My name is ${personName} and I am ${age} years old.`;
console.log(intro);

const width = 8;
const height = 5;
const area = width * height;
console.log(`The area of the rectangle is ${area}`);

//Array methods
const  products =[
    {name: "Laptop", price: 450000, inStock: true},
    {name: "Mouse", price: 8000, inStock: true},
    {name: "Monitor", price: 120000, inStock: false},
    {name: "Keyboard", price: 15000, inStock: true}
];
const productNames = products.map(product => product.name);
console.log(productNames);

const availableProducts = products.filter(product => product.inStock);
console.log(availableProducts);

const availableProductNames = products
    .filter(product => product.inStock)
    .map(product => product.name.toUpperCase());

    console.log(availableProductNames);

    //Ternary and logical AND
    const role = "editor"
    const access = role === "admin"
        ? "Full Access" :role === "editor"
            ? "Edit Access" : role === "viewer"
                ? "Read Only" : "No Access";

    console.log(access);

    const cartItems = 0;

    console.log(cartItems && "View Cart");
    console.log(cartItems > 0 && "View Cart");
    //when cartItems is 0, && returns 0 because 0 is falsy.

    console.log(add(5,3));
    console.log(capitalize("Boluwatife"));
    console.log(APP_VERSION);
    console.log(formatCurrency(45000));