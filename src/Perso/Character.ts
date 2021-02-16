import Enemy from "./Enemy";
import {getRandomInt} from "../function";
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
        console.log('This is your name : '+ this._name +
            '\n and your gender : '+ this._gender )
    }
    public attack(enemy: Enemy){
        let damage : number = getRandomInt(0, 100);
        let enemyLife : number = enemy.life - damage;
        console.log('You inflict '+damage+' damage');
        if (damage>0){
            if (enemyLife <= 0){
                console.log('You win !')
            }
            else {
                console.log('Your enemy has '+enemyLife + '\n Be careful!')
            }
        }
        else{
            console.log('Fly, you fools! \n Your enemy is still alive')
        }
    }
    get name() { return this._name;}

    set name(value) { this._name = value; }

    get gender() { return this._gender; }

    set gender(value) { this._gender = value; }

    get life() { return this._life; }

    set life(value) { this._life = value; }
}
