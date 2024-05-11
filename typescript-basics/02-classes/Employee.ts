class Employee {
    firstName: string;
    lastName: string;

    constructor(theFirstName: string, theLastName: string){
        this.firstName = theFirstName;
        this.lastName = theLastName;
    }
}

let myEmployee = new Employee('test','best');
myEmployee.firstName = 'Ramesh';
myEmployee.lastName = 'Singh'
console.log(`Employee full name is : ${myEmployee.firstName} ${myEmployee.lastName}`);


