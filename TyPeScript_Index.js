//  Index Signature and Key of Assertion

interface Obj {
  readonly [index: string]: number | string;
}

const ob: Obj = {
  Pizza: 12,
  Books: 13,
  Job: 14,
};

console.log(ob.Books);

let prop: string = "Pizza";
console.log(ob[prop]);

// Another Example !

// Interface Student

interface Student {
  [key: string]: string | number | number[] | undefined;
}

const student: Student = {
  name: "Mouli VJ",
  GPA: 4.0,
  classes: [100, 200],
};

console.log("Mouli");
for (const key in student) {
  console.log(`${key} : ${student[key as keyof Student]}`);
}

Object.keys(student).map((key) => {
  console.log(student[key]);
});

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Studemt ${key} : ${student[key]}`);
};

logStudentKey(student, "GPA");

// Another
type streams = "salary" | "bonus" | "sideHustle";

type Incomes = Record<streams, number | string>;

const monInc: Incomes = {
  salary: 1500000,
  bonus: 12000000,
  sideHustle: 1300000,
};

console.log(monInc);

for (const revenue in monInc) {
  console.log(monInc[revenue as keyof Incomes]);
}
