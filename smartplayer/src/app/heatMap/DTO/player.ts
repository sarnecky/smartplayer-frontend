export class Player
{
    public _id: number;
    public _firstName: string;
    public _lastName: string;

    constructor(
        private id: number,
        private firstName: string,
        private lastName: string)
    {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
    }
}