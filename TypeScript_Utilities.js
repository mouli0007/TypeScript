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

const assign_2: Assignment = {
  studentId: "Comp",
  title: "Final Project",
  grade: 0,
};

console.log(updateAssignment(assign_1, { grade: 78 }));

const another = (obj: Assignment, props: Partial<Assignment>): Assignment => {
  return { ...obj, ...props };
};

console.log(another(assign_2, { grade: 12, title: "Mid-Year Project !" }));
