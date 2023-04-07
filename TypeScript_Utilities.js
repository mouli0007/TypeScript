// Utility Types !

//  Partial

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign_1: Assignment = {
  studentId: "Comp123",
  title: "Final Project",
  grade: 90,
};

console.log(updateAssignment(assign_1, { grade: 78 }));

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//  Required

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  // Send to database

  return { ...assign };
};

console.log(
  recordAssignment({
    studentId: "co27416",
    title: "Big final Project",
    grade: 90,
    verified: false,
  })
);

// ReadOnly !
//  We cant modify the data
const assignVerified: Readonly<Assignment> = {
  ...assign_1,
  verified: true,
};

console.log(assignVerified.grade);

//  Record Types !!!

const hexColor: Record<string, string> = {
  red: "red",
  green: "green",
  blue: "blue",
};

type students = "Sara" | "Kelly";

type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<students, LetterGrades> = {
  Sara: "B",
  Kelly: "C",
};

console.log(finalGrades);

interface Grades {
  assign1: number;
  assign2: number;
}

const getData: Record<students, Grades> = {
  Sara: { assign1: 89, assign2: 23 },
  Kelly: { assign1: 1, assign2: 12 },
};

console.log(getData);

// Pick and Omit !
// Getting what we want from the object !
type AssignResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignResult = {
  studentId: "co27416",
  grade: 98,
};

Object.values(score).map((key) => console.log(key));

// Omit will do the opposite of Pick !

type AssignPrev = Omit<Assignment, "grade" | "verified">;

const omm: AssignPrev = {
  studentId: "co00000",
  title: "Hatrford",
};

console.log(omm);

//  And Much more Utilities were there

// Return
// Parameters
// Exclude and Extract !
