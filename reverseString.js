/**
 * I am ready for step 212:31 PMClaude responded: Problem 2 — Reverse a StringProblem 2 — Reverse a String
Write a function called reverseString that takes a string as an argument and returns it reversed. Do not use the built-in .reverse() method — the point is to practice thinking through the logic manually.
Example:
reverseString("hello")  → "olleh"
reverseString("world")  → "dlrow"

Things to think about before writing anything:

- A string is basically a sequence of characters, each with an index
- If you wanted to read a string backwards, where would you start and where would you end?
- How would a loop help you walk through it in that direction?
 */



const s = 'soap';

var reverseString = function(s) {
    return s[1];
};

console.log(reverseString(s));