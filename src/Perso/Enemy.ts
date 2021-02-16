
import {getRandomInt} from "../function";
export default class Enemy{

    private _life : number = getRandomInt(1, 100) ;

    constructor() {
    }

    get life(): number {
        return this._life;
    }

    set life(value: number) {
        this._life = value;
    }

}