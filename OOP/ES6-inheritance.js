/* practice example 1 */
class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User {
    // overriding constructor
    constructor(username, email, password){
        super(username) // accesing username property from User class

        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course is added by a ${this.username}`);
    }
}

const chai = new Teacher('Max', 'max@gmail.com', 'jhdkjf')

chai.addCourse()
 

/* practice example 2 */

class Company {
    constructor(name, age, companyName) {
      this.name = name;
      this.age = age;
      this.companyName = companyName;
    }
  
    greet() {
      console.log(`Hello, ${this.name}, Welcome to ${this.companyName}.`);
    }
  
    getAge() {
       console.log(this.age);
    }
  
    celebrateBirthday() {
      this.age++;
      console.log("Happy birthday, " + this.name + "! You are now " + this.age + " years old.");
    }

}


class Employee extends Company {
    constructor(name, age, empId, jobTitle, dateOfJoining, task, companyName) {
        super(name, age, companyName)

        this.empId = empId;
        this.jobTitle = jobTitle;
        this.dateOfJoining = dateOfJoining;
        this.task = task;
    }

    // Method to print employee description
    printDetails() {
        console.log(`HI, I am ${this.name}, ${this.age} years old and I joined ${this.companyName} on ${this.dateOfJoining} as ${this.jobTitle}`);
    }

    assignTask(){
        console.log(`Hey, ${this.name} you have been assigned this ${this.task}.`);
    }



}

const newEmp = new Employee('Charukirti', 21, '12345', 'Frontend Developer', '15-Nov-2024', 'Create card component', 'Infobyte');

newEmp.greet()

newEmp.assignTask()

newEmp.getAge()

newEmp.celebrateBirthday()

newEmp.getAge()

newEmp.printDetails()