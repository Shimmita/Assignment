
//QUIZ 4a
//Employee Implementation Using Javascript Programming Language show casing  the OOP concept of Objects and Classes 
//in Addition To The Use of Inheritance capability 

// Person class
class Person {
    constructor(firstName, lastName, dateOfBirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
    }
}

// Employee class extends class Person
class Employee extends Person {
    constructor(firstName, lastName, dateOfBirth, employeeID, jobTitle, studentID) {
        super(firstName, lastName, dateOfBirth);
        this.employeeID = employeeID;
        this.jobTitle = jobTitle;
        this.studentID = studentID;
    }
}

// Creating an Instance of Employee Classs
const employee = new Employee("SHIMITA", "DOUGLAS", "24/09/2000", "E1D2000", "Software DEVELOPER", "SID2000");

// showing employee details by help of the instance class created 
console.log(`Employee Name: ${employee.firstName} ${employee.lastName}`);
console.log(`Date of Birth: ${employee.dateOfBirth}`);
console.log(`Employee ID: ${employee.employeeID}`);
console.log(`Job Title: ${employee.jobTitle}`);
console.log(`Student ID: ${employee.studentID}`);
