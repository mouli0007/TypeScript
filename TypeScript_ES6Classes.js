// ##########################
// Classes

class Person {
  first: string;
  last: string;
  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
  print() {
    console.log(this.first, this.last);
  }
}

const brad = new Person("Brad", "Traversy");

brad.print();


//  Data Modifiers Making this Private or protected or public 

// Syntax 
class Person {
  
//   Cannot be accessed outside 
  protected first: string;
  private last: string;
  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }


// Interface with Classes !

interface PersonInterface {
  fName: string;
  lName: string;
  register(): string;
}

class Person implements PersonInterface {
  first: string;
  last: string;
  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }

  register() {
    return `${this.first} ${this.last} is now registered`;
  }
}

const brad = new Person("Brad", "Traversy");

console.log(brad.register());



// Extending the  classes !

class Employee extends Person {
  position: string;

  constructor(fName: string, lName: string, position: string) {
    super(fName, lName);
    this.position = position;
  }

  print() {
    console.log(this.position);
  }
}

const e1 = new Employee("Mouli", "VJ", "Front_End-Dev");

e1.print();
console.log(e1.register());
