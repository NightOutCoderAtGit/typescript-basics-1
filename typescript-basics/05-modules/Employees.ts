export class Employees {

    constructor(private _firstName: string, private _lastName: string){
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



