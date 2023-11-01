class Subject {
  constructor(name) {
    this.name = name;
  }
  printUser() {
    return this.name;
  }
  static newUser() {
    console.log("I am strict no one can use me");
  }
}

class Teacher extends Subject {
  constructor(name, description) {
    super(name);
    this.description = description;
  }
  addCourse() {
    console.log(`This course was added by ${this.name}`);
    return this.name;
  }
}

const subject = new Subject("Python");
const addedBy = new Teacher("Arbab", "lorem Ipsum");

console.log("Teacher Class: ", subject.printUser());
console.log("Teacher Class: ", addedBy.addCourse());
// console.log("Subject Calling Static: ", subject.newUser());
// console.log("Teacher Calling Static: ", addedBy.newUser());
console.log("Subject Class: ", subject.name);
console.log("Teacher Class: ", addedBy.name);
console.log("Teacher Class: ", addedBy.description);
console.log("Instance Check: ", subject instanceof Subject);
console.log("Instance Check: ", subject instanceof Teacher);
console.log("Instance Check: ", addedBy instanceof Subject);

//! behind the scenes using Call method

// function SubjectF(name) {
//   this.name = name;
// }

// SubjectF.prototype.printUser = function () {
//   console.log(`subject ${this.name}`);
//   return this;
// };

// function TeacherF(name, description) {
//   SubjectF.call(this, name);
//   this.description = description;
// }

// TeacherF.prototype.addedBy = function () {
//   console.log(`Added By ${this.name}, Description: ${this.description}`);
//   return this;
// };

// const subject1 = new SubjectF("Django");
// const teacher1 = new TeacherF("Arbab", "Jani parh lo");
// console.log(subject1.name);
// console.log(subject1.printUser());
// console.log(teacher1.name);
// console.log(teacher1.addedBy());
// console.log(subject1 instanceof SubjectF);
// console.log(teacher1 instanceof SubjectF);
