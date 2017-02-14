var inquirer = require('inquirer')
var Word = require('./Word.js');

var words = ['dooku', 'kenobi', 'anakin', 'vader', 'sidious', 'padme', 'jango'];

var wordToPlay = words[Math.floor(Math.random()*words.length)];

var wordObject = new Word(wordToPlay);
wordObject.makeAndPushLettersIntoWord();
console.log(wordObject.display());

function askLetter(){
    inquirer.prompt([
    {
    type: "input",
    name: "guess",
    message: "Welcome to the Star Wars hangman game! Guess a letter! If you are done, type 'done'."},
    ]).then(function(data){
        if (data.guess != 'done') {
            wordObject.updateLetter(data.guess);

            console.log(wordObject.display());

            askLetter();
        }
    });
}

askLetter();