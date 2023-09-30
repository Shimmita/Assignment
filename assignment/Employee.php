<?php 
//QUIZ 4a
//Employee Implementation Using PHP Programming Language showing the OOP concept of Objects and Classes 
//in Addition To The Use of Inheritance capability 
?>

<?php
// person class as the Base Class
class Person {
    public $firstName;
    public $lastName;
    public $dateOfBirth;

    public function __construct($firstName, $lastName, $dateOfBirth) {
        $this->firstName = $firstName;
        $this->lastName = $lastName;
        $this->dateOfBirth = $dateOfBirth;
    }
}

// Employee class  extends class Person
class Employee extends Person {
    public $employeeID;
    public $jobTitle;
    public $studentID;
    
    public function __construct($firstName, $lastName, $dateOfBirth, $employeeID, $jobTitle, $studentID) {
        parent::__construct($firstName, $lastName, $dateOfBirth);
        $this->employeeID = $employeeID;
        $this->jobTitle = $jobTitle;
        $this->studentID = $studentID;
    }
}

// creating an instance of Employee Class
$employee = new Employee("Shimita", "Douglas", "2000-24-09", "EID200", "Software Developer", "SID200");

// showing employee details by help of the instance class created 
echo "Employee Name: {$employee->firstName} {$employee->lastName}\n";
echo "Date of Birth: {$employee->dateOfBirth}\n";
echo "Employee ID: {$employee->employeeID}\n";
echo "Job Title: {$employee->jobTitle}\n";
echo "Student ID: {$employee->studentID}\n";
?>
