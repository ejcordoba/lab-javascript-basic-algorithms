// Iteration 1: Names and Input
// 1.1 Create a variable hacker1 with the driver's name.
const hacker1 = prompt("Please, insert driver's name:");
// 1.2 Print "The driver's name is XXXX".
alert(`Driver's name is: ${ hacker1 }`);
console.log(`Driver's name is: ${hacker1}`);
// 1.3 Create a variable hacker2 with the navigator's name.
const hacker2 = prompt(`Please, insert navigator's name:`);
// 1.4 Print "The navigator's name is YYYY".
alert(`Navigator's name is: ${ hacker2 }`);
console.log(`Navigator's name is: ${hacker2}`);

// Iteration 2: Conditionals
/*
2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.
*/
if (hacker1.length > hacker2.length) {
    alert(`The driver has the longest name, it has ${hacker1.length} characters`);
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length){
    alert(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    alert(`Wow, you both have equally long names, ${hacker1.length} characters!`);
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let separatedUpper = '';
for (let i = 0; i < hacker1.length; i++) {
    separatedUpper += hacker1[i];
    separatedUpper += " ";
}
console.log(separatedUpper.toUpperCase());
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let upsideDown = '';
for (let i = hacker2.length -1; i >= 0; i--) {
    upsideDown += hacker2[i];
}

console.log(upsideDown);

/*
3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?
*/
if (hacker1.localeCompare(hacker2) === 1) {
    console.log(`Yo, ${hacker2} goes first definitely.`);
} else if (hacker1.localeCompare(hacker2) === -1) {
    console.log(`${hacker1} goes first.`);
} else if (hacker1.localeCompare(hacker2) === 0) {
    console.log(`What?! You both have the same name?`);
}

/*
Bonus Time!
Bonus 1:
Go to lorem ipsum generator and:

Generate 3 paragraphs. Store the text in a variable type of string.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.
*/
let loremParagraph = `et et et et tete`


let numberOfWords = 0;
  for (let i = 0; i < loremParagraph.length; i++)
    if (loremParagraph[i] === " ") { // if a space is found in str
      numberOfWords++; // add 1 to total so far
    }
console.log(`The lorem paragraph has ${numberOfWords + 1} words`);

let countWords = (loremParagraph.match(/is/g) || []).length;

console.log(`Latin word 'et' appears ${countWords} times.`)
  
/*
Bonus 2:
Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon".
Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' smiley
*/