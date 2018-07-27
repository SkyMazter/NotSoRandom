/*
function random(max) {
    min = Math.ceil(0);
    max = Math.floor(max);
    answer =  Math.floor(Math.random() * (max - 0)) + 0;
    console.log(answer);
  }
random(100);
*/
function randomLetter(word) {

i = word.length - 1
letter = word.charAt(i);
console.log(letter)
}
randomLetter("happy");
