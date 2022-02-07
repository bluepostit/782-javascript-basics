const student = {
  firstName: "Boris",
  lastName: "Paillard"
};

console.log(typeof student);
// => "object"

console.log(student);

// Can't do this, as it's a constant!
// student = { firstName: 'Sally', lastName: 'Jones' };


// C-reate
student.age = 30;
// valid, but not preferred:
student['age'] = 30;
console.log(student);

// R-ead
console.log(`The student's first name is ${student.firstName}`);

// U-pdate
student.age = 31;
student.firstName = 'Andrea';
console.log(student);

// D-elete
delete student.lastName;
console.log(student);
