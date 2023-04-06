// Interfaces
//  Its a specific structure to a object or a function !
//  Interface cannot be used to a single primitive value

interface UserInterface {
  readonly id: number;
  name: string;
  email? : string;
}

const userDetails: UserInterface = {
  id: Math.random() * 10,
  name: "Mouli VJ",
  email: "mouli.vj@gmail.com",
};

console.log(userDetails);

// #### Cannot Use Interface here
type Point = number | string;
const p1: Point = 10;

  
//  Interface with funcitons

interface MathFunc {
  (x: number, y: number): number;
}

const addSum: MathFunc = (x: number, y: number): number => x + y;

console.log(addSum(12, 12));
