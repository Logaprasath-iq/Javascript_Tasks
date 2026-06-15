// Task 1
let salary = 30000, exp = 5;
let bonus = exp >= 5 ? salary * 0.20 : exp >= 2 ? salary * 0.10 : salary * 0.05;
console.log(salary + bonus);

// Task 2
let age = 18, per = 70;
if (age >= 17) {
    if (per >= 60) console.log("Admission Approved");
    else console.log("Rejected");
} else console.log("Rejected");

// Task 3
let choice = 1;
switch(choice){
    case 1: console.log("Pizza"); break;
    case 2: console.log("Burger"); break;
    case 3: console.log("Shawarma"); break;
    case 4: console.log("Fried Rice"); break;
}

// Task 4
let students = ["A","B","C","D","E","F","G","H","I","J"];
for(let s of students) console.log(s);
console.log(students.length);

// Task 5
let cart = [
 {product:"Mobile",price:15000},
 {product:"Headset",price:2000},
 {product:"Charger",price:1000}
];
let total = 0, max = cart[0];
for(let i of cart){
 total += i.price;
 if(i.price > max.price) max = i;
}
console.log(total, max.product);

// Task 6
let balance = 10000;
function deposit(a){ balance += a; }
function withdraw(a){ balance -= a; }
function checkBalance(){ console.log(balance); }
deposit(2000);
withdraw(1000);
checkBalance();

// Task 7
let a = 25;
if(a < 5) console.log("Free");
else if(a <= 18) console.log("100");
else if(a <= 60) console.log("200");
else console.log("120");

// Task 8
let amount = 6000;
let dis = amount > 5000 ? 20 : amount > 3000 ? 10 : amount > 1000 ? 5 : 0;
console.log(amount, dis+"%", amount-(amount*dis/100));

// Task 9
let items = ["Rice","Oil","Sugar","Milk","Egg"];
items.push("Tea","Bread");
items.shift();
items.pop();
console.log(items.includes("Milk"));
console.log(items);

// Task 10
let patient = {patientName:"Ravi",age:30,disease:"Fever",doctor:"Kumar"};
for(let key in patient) console.log(key, patient[key]);
let {patientName, disease} = patient;
console.log(patientName, disease);

// Task 11
function sendSMS(){ console.log("SMS Sent"); }
function placeOrder(cb){
 console.log("Order Placed");
 cb();
}
placeOrder(sendSMS);

// Task 12
function* offers(){
 yield "10% Cashback";
 yield "20% Cashback";
 yield "Free Delivery";
 yield "Buy 1 Get 1";
}
let o = offers();
console.log(o.next().value);
console.log(o.next().value);
console.log(o.next().value);
console.log(o.next().value);

// Task 13
let emp = [
 {id:1,name:"Rahul",salary:25000},
 {id:2,name:"Kavin",salary:30000},
 {id:3,name:"John",salary:40000}
];
let sum = 0, high = emp[0];
for(let e of emp){
 console.log(e.name);
 sum += e.salary;
 if(e.salary > high.salary) high = e;
}
console.log(sum, high.name);

// Task 14
let seats = 50;
function book(n){
 if(n <= seats){
  seats -= n;
  console.log("Booked");
 } else console.log("Not Available");
}
book(5);
console.log(seats);

// Task 15
let products = {Mobile:15000,Laptop:50000,Headphone:2000,Smartwatch:3000};
let totalAmt = products.Mobile + products.Headphone;
let gst = totalAmt * 0.18;
console.log(totalAmt, gst, totalAmt + gst);