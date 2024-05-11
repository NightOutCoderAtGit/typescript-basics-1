class Employees {
    private _firstName: string;
    private _lastName: string;

    constructor(theFirstName: string, theLastName: string){
        this._firstName = theFirstName;
        this._lastName = theLastName;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set firstName(newName: string) {
        this._firstName = newName;
    }

    public set lastName(newName: string) {
        this._lastName = newName;
    }

}

let myEmployees= new Employees('Red','John');
console.log(`Employee full name is : ${myEmployees.firstName} ${myEmployees.lastName}`);


