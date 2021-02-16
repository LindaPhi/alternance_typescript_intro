export default class Character {
    private _name;
    private _gender;
    private _life ;

    constructor(param_name: string, param_gender: string, param_life: number) {
        this._name = param_name;
        this._gender = param_gender;
        this._life = param_life;
    }

    public summary(): void{
        console.log('This is your name : '+ this._name + '\n and your gender : '+ this._gender )
    }
    get name() { return this._name;}

    set name(value) { this._name = value; }

    get gender() { return this._gender; }

    set gender(value) { this._gender = value; }

    get life() { return this._life; }

    set life(value) { this._life = value; }
}
