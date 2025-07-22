function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

const student1 = new Student("Алексей", "мужской", 21);  
const student2 = new Student("Михаил", "мужской", 24);  
const student3 = new Student("Елена", "женский", 19);  


Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if(!this.marks) {
        return;
    }
    this.marks.push(...marks);
}

Student.prototype.getAverage = function () {
    if(!this.marks || this.marks.length === 0) {
        return 0;
    }
    const sum = this.marks.reduce((acc, marc) => acc + marc, 0);
    return sum/this.marks.length;
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
