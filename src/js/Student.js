function Student(name, surname, birthYear) {
  if (typeof name !== 'string') throw new Error('Name should be a string');
  if (typeof surname !== 'string') throw new Error('Surname should be a string');
  if (typeof birthYear !== 'number') throw new Error('Birth Year should be a number');
  if (birthYear < 1900 || birthYear > 2024) throw new Error('Birth Year should be real');

  this.name = name;
  this.surname = surname;
  this.birthYear = birthYear;
  this.marks = new Array();
  this.attendance = new Array();

  Student.prototype.getFullName = function () {
    return `${this.name} ${this.surname}`;
  };
  Student.prototype.getAge = function () {
    return new Date().getFullYear() - this.birthYear;
  };
  Student.prototype.addMark = function (mark) {
    if (mark < 0 || mark > 100) throw new Error(`Mark should be [0...100] (Your: ${mark})`);
    this.marks.push(mark);
  };
  Student.prototype.removeLastMark = function () {
    if (this.marks.length === 0) throw new Error('Empty array of marks');
    this.marks.pop();
  };
  Student.prototype.avgMark = function () {
    if (this.marks.length === 0) return 0;
    return this.marks.reduce((acc, curr) => acc + curr, 0) / this.marks.length;
  };
  Student.prototype.avgAttendance = function () {
    if (this.attendance.length === 0) return 0;
    return this.attendance.reduce((acc, curr) => (curr ? (acc += 1) : acc), 0) / this.attendance.length;
  };
  Student.prototype.absent = function () {
    if (this.attendance.length === 25) throw new Error('Attendance list should contain 25 records');
    this.attendance.push(false);
  };
  Student.prototype.present = function () {
    if (this.attendance.length === 25) throw new Error('Attendance list should contain 25 records');
    this.attendance.push(true);
  };

  Student.prototype.summary = function () {
    const avgMark = this.avgMark();
    const avgAttendance = this.avgAttendance();
    if (avgMark >= 90 && avgAttendance >= 0.9) return 'Excellent';
    else if (avgMark < 90 && avgAttendance < 0.9) return 'Bad';
    else return 'Good';
  };
}
export default Student;
