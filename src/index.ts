
const prompts = require('prompts');
// @ts-ignore
import Character from "./Character";
(async () => {
    const question =  [
        {
            type: 'text',
            name: 'name',
            message: 'Veuillez renseigner votre nom de personnage :'
        },
        {
            type: 'select',
            name: 'gender',
            message: 'Veuillez renseigner le genre de votre personnage F/M/N :',
            choices: [
                { title: 'Female', value: 'Female' },
                { title: 'Male', value: 'Male' },
                { title: 'No-gender', value: 'No-gender' }
            ]
        }

    ];

    const response = await prompts(question);
    let myCharacter: Character =  new Character(response.name,response.gender,100);
    myCharacter.summary();
    console.log('Ennemi en approche !');
    })();



