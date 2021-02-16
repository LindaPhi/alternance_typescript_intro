import Enemy from "./Perso/Enemy";

const prompts = require('prompts');
// @ts-ignore
import Character from "./Perso/Character";
import * as Console from "console";
(async () => {
    const choiceYourCharacter =  [
        {
            type: 'text',
            name: 'name',
            message: 'Enter your character name :'
        },
        {
            type: 'select',
            name: 'gender',
            message: 'Which gender ? :',
            choices: [
                { title: 'Female', value: 'Female' },
                { title: 'Male', value: 'Male' },
                { title: 'No-gender', value: 'No-gender' }
            ]
        }

    ];

    const response1 = await prompts(choiceYourCharacter);
    let myCharacter: Character =  new Character(response1.name,response1.gender,100);
    myCharacter.summary();
    console.log('ENEMY IS COMING !');
    const fightOrFail =  [
        {
            type: 'select',
            name: 'fightOrFail',
            message: 'Fight or fail ? :',
            choices: ['Fight', 'Fail']
        }
    ]
    const response2 = await prompts(fightOrFail);

    if (response2.choices == 'Fail'){
        console.log('GAME OVER')
    }
    else{
        let myEnemy = new Enemy();
        console.log('Your enemy has '+myEnemy.life);

        myCharacter.attack(myEnemy);
    }
    })();



