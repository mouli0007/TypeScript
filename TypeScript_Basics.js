// BAsic Types

let id: number = 10;
let company: string = "Traversy Media";

let isPublished: boolean = true;

let x: any = "Hellow";
x = 19;
console.log(x);

let age: number;

age: 25;

let ids: number[] = [1, 2, 3, 4, 5];

ids.push(12);

let arr: any[] = [1, true, "Mouli VJ"];

// ###############################z
// ###############################z
// ###############################z

// Tuple

let person: [number, string, boolean] = [1, "Chennai", true];

// Tuple Array

let employee: [number, string][];

employee = [
  [1, "BRAD"],
  [1, "John"],
  [1, "DOE"],
];

console.log(employee);

//  Enums

enum Direction1 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

console.log(Direction1.Left);

// Objects !

type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "John",
};

// ################
// ################

// Type Assertion

let cid: any = 1;

// Type 1
let customerId = <number>cid;
customerId = 10;
console.log(customerId);

// Type 2

let cusId = cid as number;
cusId = 20;
console.log(cusId);

// TypeScript in Functions
// Functions !

function addNum(x: number, y: number): number {
  return x + y;
}

console.log(addNum(110, 210));


// TypeScript in Functions
// Functions !

function addNum(x: number, y: number): number {
  return x + y;
}

console.log(addNum(110, 210));

function log(message: string | number | number[]): void {
  console.log(message);
}

log("Mouli VJ");
log(1);
log([1, 2, 3]);
