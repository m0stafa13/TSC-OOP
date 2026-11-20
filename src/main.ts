// crate arr in TSC  as type string 
let arr: string[] = ["hello", "world"]
// create array with multi types 
let arr2: (string | number)[] = ["mostafa", "mohamed", 29, 44]
// array in array with multi types 
let arr3: (string | number | (string | boolean | number)[])[] = ["hello ", "test", 20, ["mostafa", "tests", true, 3]]
// tuple == > like array 
let x: [string, number] = ["mostafa", 34]

let arr4: readonly number[] = [10, 30, 40]
// arr4.push(30) == error
// readonly  i can't change anything from array when i put it  (readonly)
// console.log(arr4);
//!object
// option one 
let y: {
    name: string,
    age: number,
    isValid: boolean
} = {
    name: "mohamed",
    age: 10,
    isValid: true
}

//option two with type 
type userType = {
    name: string,
    age: number,
    isValid: boolean,
    email: string,
    password: string,
    phone: string,
    isVerified: boolean
}
let userObj: userType = {
    age: 40,
    email: "mos@gmail.com",
    isValid: true,
    phone: "01222222222",
    password: "hello@password",
    isVerified: false,
    name: "mo"
}
//! function 
function sum(n1: number, n2: number, n3: number): number {
    return (n2 + n1) * n3
}
let result = sum(1, 2, 3)
// console.log(result);
// function with object parameter 
function sum2({ n1, n2, n3 }: { n1: number, n2: number, n3: number }): number {
    return n1 + n2 + n3
}
let res = sum2({ n1: 2, n2: 2, n3: 2 })
// return  void ==> void we put it when the function has end of logic  like function print thing tho something , function to sum two nums , function crate some thing and end then return back to the line that makes call to this function
// return never ==> function return never cannot have a returnable end point (has no end point ) server fun, wile(true) {} , in js we have throw Error is function return never =>it dose not stop when you throw Error the server will stop if you did not  handle it
// return void > function has end point and return (undefined)
// return never > function has no end pint it will working all times  
//!class
class Sum {
    public num1: number
    public num2: number
    constructor(num1: number, num2: number) {
        this.num1 = num1
        this.num2 = num2
    }
    // function or method in opp to sum two nums 
    sum(): number {
        return this.num1 + this.num2
    }
}
// Instances 
let s = new Sum(1, 2)
// console.log(s.sum());
// !Access modifiers

//public ===> + Accessible from anywhere in the application
//private===> - Accessible strictly inside the declaring class itself
//protected=> # Accessible within the same package and by subclasses (even across different packages).
//!interface
// crate main shape to the class 
interface ICalc {
    num1: number,
    num2: number,
    sum: Function
}
// REOPEN  == > add new thing to interface 
interface ICalc {
    age: number
}

class Calc implements ICalc {
    public num1
    public num2
    public age

    constructor(num1: number, num2: number, age: number) {
        this.num1 = num1
        this.num2 = num2
        this.age = age
    }
    // function or method in opp to sum two nums 
    sum() {
        return this.num1 + this.num2 + this.age
    }
}
let classResult = new Calc(1, 2, 3)
// console.log(classResult.sum());
//! short hand  
class CalcShort implements ICalc {
    constructor(public num1: number, public num2: number, public age: number) {
    }
    // function or method in opp to sum two nums 
    sum() {
        return this.num1 + this.num2 + this.age
    }
}
//!Encapsulation
class BankAccount {
    // cannot access balance from any place just from this class only
    private balance: number
    constructor(balance: number) {
        this.balance = balance
    }
    public deposit(value: number): void {
        this.balance = +value
    }
    // getter 
    getBalance() {
        return this.balance
    }
    // setter // we can set data from getter or constructor 
    setBalance(balance: number) {
        this.balance = balance
    }
}
let bank = new BankAccount(100)
// in bank i can not access balance > it's private var
// just i can access it using getter and setter functions

// console.log(bank.getBalance());
//!Inheritance
class Animal {
    constructor(public name: string) {
    }
    eat(): void {
        console.log(`${this.name} is Eating`);
    }
}
class Dog extends Animal {
    constructor(name: string) {
        // if i did't use constructor the child class will send data to parent 
        // if i used constructor i should user super(send data to child constructor) 
        super(name)
    }
    sound() {
        console.log("Woof");
    }
}
let dog = new Dog("max")
// console.log(dog.eat());
