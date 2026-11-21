// crate arr in TSC  as type string 
let arr = ["hello", "world"];
// create array with multi types 
let arr2 = ["mostafa", "mohamed", 29, 44];
// array in array with multi types 
let arr3 = ["hello ", "test", 20, ["mostafa", "tests", true, 3]];
// tuple == > like array 
let x = ["mostafa", 34];
let arr4 = [10, 30, 40];
// arr4.push(30) == error
// readonly  i can't change anything from array when i put it  (readonly)
// console.log(arr4);
//!object
// option one 
let y = {
    name: "mohamed",
    age: 10,
    isValid: true
};
let userObj = {
    age: 40,
    email: "mos@gmail.com",
    isValid: true,
    phone: "01222222222",
    password: "hello@password",
    isVerified: false,
    name: "mo"
};
//! function 
function sum(n1, n2, n3) {
    return (n2 + n1) * n3;
}
let result = sum(1, 2, 3);
// console.log(result);
// function with object parameter 
function sum2({ n1, n2, n3 }) {
    return n1 + n2 + n3;
}
let res = sum2({ n1: 2, n2: 2, n3: 2 });
// return  void ==> void we put it when the function has end of logic  like function print thing tho something , function to sum two nums , function crate some thing and end then return back to the line that makes call to this function
// return never ==> function return never cannot have a returnable end point (has no end point ) server fun, wile(true) {} , in js we have throw Error is function return never =>it dose not stop when you throw Error the server will stop if you did not  handle it
// return void > function has end point and return (undefined)
// return never > function has no end pint it will working all times  
//!class
class Sum {
    num1;
    num2;
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    // function or method in opp to sum two nums 
    sum() {
        return this.num1 + this.num2;
    }
}
// Instances 
let s = new Sum(1, 2);
class Calc {
    num1;
    num2;
    age;
    constructor(num1, num2, age) {
        this.num1 = num1;
        this.num2 = num2;
        this.age = age;
    }
    // function or method in opp to sum two nums 
    sum() {
        return this.num1 + this.num2 + this.age;
    }
}
let classResult = new Calc(1, 2, 3);
// console.log(classResult.sum());
//! short hand  
class CalcShort {
    num1;
    num2;
    age;
    constructor(num1, num2, age) {
        this.num1 = num1;
        this.num2 = num2;
        this.age = age;
    }
    // function or method in opp to sum two nums 
    sum() {
        return this.num1 + this.num2 + this.age;
    }
}
//!Encapsulation
class BankAccount {
    // cannot access balance from any place just from this class only
    balance;
    constructor(balance) {
        this.balance = balance;
    }
    deposit(value) {
        this.balance = +value;
    }
    // getter 
    getBalance() {
        return this.balance;
    }
    // setter // we can set data from getter or constructor 
    setBalance(balance) {
        this.balance = balance;
    }
}
let bank = new BankAccount(100);
// in bank i can not access balance > it's private var
// just i can access it using getter and setter functions
// console.log(bank.getBalance());
//!Inheritance
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} is Eating`);
    }
}
class Dog extends Animal {
    constructor(name) {
        // if i did't use constructor the child class will send data to parent 
        // if i used constructor i should user super(send data to child constructor) 
        super(name);
    }
    sound() {
        console.log("Woof");
    }
}
let dog = new Dog("max");
// console.log(dog.eat());
//!Polymorphism
// i parent class i have method in child class i can user same method to make diff output ==>(overriding)
class AAnimal {
    makeSound() {
        console.log("some sound");
    }
}
class Dpg extends AAnimal {
    // override 
    makeSound() {
        console.log("Dog sound");
    }
}
class Cat extends AAnimal {
    // override
    makeSound() {
        console.log("Cat sound");
    }
}
// Abstraction 
// the database Repo is class we use it to  make connection with db from only one place  and we will use it in all request to the db from and service file 
class DatabaseRepo {
    // model 
    crate() {
        // this.model.crate(body)
        return "done";
    }
    findOne() {
        // this.model.findOne({_id:id}) <= this function from mongoose 
        return "done";
    }
    findAll() {
        //this.model.find()
        return "done";
    }
}
//!Association two classes has relation 
class Student {
    name;
    constructor(name) {
        this.name = name;
    }
}
// Teacher class 
class Teacher {
    name;
    constructor(name) {
        this.name = name;
    }
    teaches(student) {
        console.log(`${this.name} teaches ${student.name}`);
    }
}
let student = new Student("mohamed");
let teacher = new Teacher("Mostafa");
// console.log(teacher.teaches(student));
//* in association if i deleted some of classes another class has no effect
//* both objects can exist independently
//!Composition strong HAS-A  relationship 
// house and rooms 
class Room {
    name;
    constructor(name) {
        this.name = name;
    }
}
class House {
    rooms;
    constructor() {
        this.rooms = [
            new Room("BedRoom"),
            new Room("Kitchen")
        ];
    }
}
// if i deleted some class another class will be no working
// House created using room class
//!Generic ==> datatype will be send from arg
function h(n1, n2) {
    console.log(n1, n2);
}
h(3, 3); // to arg must be same datatype if dif will be ts error
export {};
