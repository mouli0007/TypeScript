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
  
  

//  Generic Extension !

interface HasId {
  id: number;
}

const processUser = <T extends HasId>(user: T): T => {
  return user;
};

console.log(processUser({ id: 99, name: "Mouli VJ" }));

const ownProcessor = <T extends HasId>(na: T): T => {
  console.log(na);
  return na;
};

ownProcessor({ id: 89, name: "Cobra", job: "Assasian" });

// Generic Extension with classes !

class StateObj<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }

  get state(): T {
    return this.data;
  }

  set state(value: T) {
    this.data = value;
  }
}

const store = new StateObj("Mouli VJ");

const myState = new StateObj<string | number | boolean | number[]>(
  "Can Accept Anything !"
);
console.log(store.state);
store.state = "Alison";
console.log(store.state);
