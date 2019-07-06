//create an array of words
const words = ['thinking', 'workings', 'creating', 'jumping',];
//choose words randomly
let randNum = Math.floor(Math.random() * words.length);
let choosenWord = word[randNum];
let underscore = [];
Console.log(choosenWord);
//create underscores based on lenght of  words
let generateUnderscore = ()=> {
   for(let i =0; i < choosenWord.lenght; 1++ ){
       underscore.puch('_');
   }
   return underscore;
}
console.log(generateUnderscore());
//Get users guess
//check if guess is right 
//if right push to right array
//if wrong push to wrong array