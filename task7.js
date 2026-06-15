// Task 1: 
let signal = "red";
switch (signal) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Ready");
        break;
    case "green":
        console.log("Go");
        break;
}

// Task 2:
for (let i = 1; i <= 30; i++) {
    console.log(`Employee ${i} Present`);
}

// Task 3: 
let balance = 10000;
while (balance > 0) {
    balance -= 500;
    console.log("Remaining Balance:", balance);
}

// Task 4: 
let age = 19;
let percentage = 75;
let examPassed = true;

if (age >= 18) {
    if (percentage >= 70) {
        if (examPassed) {
            console.log("Admission Approved");
        } else {
            console.log("Entrance Exam Not Passed");
        }
    } else {
        console.log("Percentage Below 70");
    }
} else {
    console.log("Age Below 18");
}

// Task 5: 
function foodDelivery(customerName, foodItem, address) {
    console.log(`${foodItem} delivered to ${customerName} at ${address}`);
}
foodDelivery("Loga", "Pizza", "Coimbatore");

// Task 6: 
function calculateSalary() {
    return 30000;
}
function calculateBonus(salary) {
    return salary + 5000;
}
console.log("Total Salary:", calculateBonus(calculateSalary()));

// Task 7:
function applyDiscount(amount, callback) {
    let finalAmount = amount - 1000;
    callback(finalAmount);
}
function generateInvoice(amount) {
    console.log("Invoice Amount:", amount);
}
applyDiscount(10000, generateInvoice);

// Task 8: 
function* offers() {
    yield "10% OFF";
    yield "20% OFF";
    yield "Free Delivery";
    yield "Buy 1 Get 1";
}
let offer = offers();
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);

// Task 9: 
let scienceStudents = ["Arun", "Kumar"];
let commerceStudents = ["Ravi", "Priya"];
let students = [...scienceStudents, ...commerceStudents];
console.log(students);

// Task 10:
function totalMarks(studentName, ...marks) {
    let total = marks.reduce((a, b) => a + b, 0);
    console.log(studentName, total);
}
totalMarks("Loga", 80, 90, 85);

// Task 11:
let employee = {
    name: "John",
    department: "IT",
    salary: 50000,
    experience: 3
};
let { name, department, salary, experience } = employee;
console.log(name, department, salary, experience);

// Task 12:
let products = [
    { name: "Mobile", price: 15000 },
    { name: "Mouse", price: 500 }
];
console.log(products.filter(p => p.price > 5000));

// Task 13: 
let customers = [
    { name: "A", purchase: 20000 },
    { name: "B", purchase: 60000 }
];
console.log(customers.find(c => c.purchase > 50000));

// Task 14:
let expenses = [1000, 2000, 3000, 4000];
console.log(expenses.reduce((a, b) => a + b, 0));

// Task 15:
let players = [20, 22, 25, 19];
console.log(players.every(age => age > 18));

// Task 16: 
let candidates = ["HTML", "CSS", "React"];
console.log(candidates.some(skill => skill === "React"));

// Task 17: 
let mobile = "9876543210";
console.log(
    mobile.length === 10 &&
    (mobile.startsWith("9") ||
     mobile.startsWith("8") ||
     mobile.startsWith("7") ||
     mobile.startsWith("6"))
);

// Task 18: 
let title = "Learn JavaScript Complete Course";
let slug = title.toLowerCase().split(" ").join("-");
console.log(slug);

// Task 19: 
let employees = [
    { name: "A", salary: 40000 },
    { name: "B", salary: 60000 },
    { name: "C", salary: 50000 }
];

console.log([...employees].sort((a, b) => b.salary - a.salary));
console.log([...employees].sort((a, b) => a.salary - b.salary));

// Task 20: 
let movies = ["Leo", "Vikram", "Master"];
let bookingIds = movies.map((movie, index) => ({
    movie,
    bookingId: `BK${index + 1}`
}));
console.log(bookingIds);