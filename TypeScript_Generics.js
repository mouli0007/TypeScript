// Generics in TypeScript !
// Help in building reusable components !

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4, 5]);
let strArray = getArray<string>(["Mouli", "VJ", "Blah"]);

console.log(numArray);

function myown<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numa_ = myown<number>([1, 2, 3, 4, 10]);
console.log(numa_);


Extending the Interface with Generics !
  
  
  interface HasId {
  id: number;
}

const processUser = <T extends HasId>(user: T): T => {
  return user;
};

console.log(processUser({ id: 99, name: "Mouli VJ" }));
