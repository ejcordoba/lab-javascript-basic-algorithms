alert(`-- Lab javascript basic algorithms --
Press Ok to start`);

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
alert(`Driver's name letters separated and in capitals:
${separatedUpper.toUpperCase()}
`);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let upsideDown = '';
for (let i = hacker2.length -1; i >= 0; i--) {
    upsideDown += hacker2[i];
}
alert(`Navigator's name in reverse order:
${upsideDown}
`)
console.log(upsideDown);

/*
3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?
*/
if (hacker1.localeCompare(hacker2) === 1) {
    alert(`Yo, ${hacker2} goes first definitely.`);
    console.log(`Yo, ${hacker2} goes first definitely.`);
} else if (hacker1.localeCompare(hacker2) === -1) {
    alert(`${hacker1} goes first.`);
    console.log(`${hacker1} goes first.`);
} else if (hacker1.localeCompare(hacker2) === 0) {
    alert(`What?! You both have the same name?`);
    console.log(`What?! You both have the same name?`);
}

/*
Bonus Time!
Bonus 1:
Go to lorem ipsum generator and:

Generate 3 paragraphs. Store the text in a variable type of string.
Make your program count the number of words in the string.
*/
let loremParagraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis arcu at viverra tincidunt. Nunc orci nibh, consequat in arcu vel, ullamcorper aliquet elit. Nunc elementum dictum justo, vitae vulputate ligula viverra in. Curabitur vestibulum risus at elit laoreet porta. Fusce sed justo ante. Donec diam sapien, tincidunt in felis id, pellentesque commodo justo. Aenean feugiat tristique nisl quis tristique. Ut non rhoncus erat, sed egestas felis. Cras luctus lacus at metus vestibulum tempus. Nam interdum purus posuere dolor scelerisque volutpat. Proin id tortor vel sapien bibendum sodales a ac urna. Morbi a libero sed ligula suscipit bibendum. Etiam varius, sem sit amet viverra interdum, sem dui finibus velit, id efficitur ipsum nisl id dolor.

Aenean finibus odio sed consequat interdum. Nam et enim finibus, faucibus est ut, pulvinar nulla. Phasellus in feugiat urna. Etiam vitae venenatis nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus interdum consequat. Praesent ornare enim ut tellus ornare porttitor sit amet ac diam. Sed malesuada mollis tempor. Etiam metus ipsum, fermentum eu ultricies ut, tincidunt eu quam. In lacinia faucibus aliquet. Proin eu tincidunt dui, at ultrices lacus. Aenean sit amet ante elit. Quisque malesuada ante metus, eu efficitur libero fringilla et. Aenean nec nibh fermentum, ornare tellus ac, finibus eros. Ut dignissim augue ut sollicitudin ullamcorper. Nulla tincidunt augue nibh, vitae posuere metus placerat nec.

Donec mauris ante, tempor a metus non, aliquam auctor nisi. Morbi odio velit, tincidunt sit amet ipsum sed, finibus pulvinar massa. Aenean nec risus vitae mauris fermentum dignissim. Suspendisse et feugiat tortor, quis dignissim felis. Praesent condimentum enim vel purus elementum pellentesque. Ut non elit ut turpis tincidunt pretium vitae eu libero. Ut vel porttitor mauris. Nam accumsan est id justo cursus lacinia. Aenean quis pharetra diam, sit amet lobortis neque.`

alert(`Here are 3 lorem paragraph
${loremParagraph}
`)
const arrayOfWords = loremParagraph.split('et');
console.log(arrayOfWords)
let myString = "John Doe has 5 oranges while Jane Doe has only 2 oranges, Jane gave Mike 1 of her orange so she is now left with only 1 Orange.";
let mySubString = "orange";

let count = loremParagraph.split('et').length - 1;
alert(`'et' word appears ${count} times`);
console.log(count);
  
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
let checkPalindrome = prompt("Please, enter a word or sentence to check if its a palindrome");
 
var re = /[^A-Za-z0-9]/g;
checkPalindrome = checkPalindrome.toLowerCase().replace(re, '');

var len = checkPalindrome.length;
 
var flag = true;
for (var i = 0; i < len/2; i++) {
    if (checkPalindrome[i] !== checkPalindrome[len - 1 - i]) {
       flag = false;
    }   
}
if (flag) {
    alert(`${checkPalindrome} is a palindrome!`)
} else {
    alert(`${checkPalindrome} isn't a palindrome!`)
}

alert(`Lab done, please reload page to start over again`);