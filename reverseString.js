/**
 * ## Problem: Reverse String (LC #344)
 * 
 * Write a function called reverseString that takes a string as an argument and returns it reversed. Do not use the built-in .reverse() method — the point is to practice thinking through the logic manually.
 * Example:
 * reverseString("hello")  → "olleh"
 * reverseString("world")  → "dlrow"
 * 
 * ## Link: https://leetcode.com/problems/reverse-string
 * ## Difficulty: Easy
 * ## Pattern: Two Pointers / String Manipulation.
 *
 * ## Approach:
 * First we have to determine the length of the input and decrease it by 1 (since indexing starts at zero). We create an empty variable 
 * that will store the reversed word, then we use a for loop that starts from the last character to the first character.
 * For each iteration, we take the character corresponding to i (which keeps track of the index) and concatonate it with the variable 
 * that stores the reversed word, I did this by using "template literals" (${}).
 * 
 *
 * ## Time Complexity:  O(n)
 * ## Space Complexity: O(?)
 *
 * ## Mistakes / Things I learned:
 * I tried using "+"" or "," to concatonate but it was better to just use template literals. Also, when getting the length of the input
 * I forgot to decrease it by one so that there's no problem with indexing thru the input.
 */



const s = 'JavaScript';

var reverseString = function(s) {
    // Get word length.
    const wordLength = s.length - 1;

    // Create variable to store reversed word.
    let reversedWord = '';

    // Use for loop and make i be equal wordLength and decrease i by 1 thru each iteration.
    for (let i = wordLength; i >= 0; i--) {
        // Take i charecter from word and concatonate it with reversedWord.
        reversedWord = `${reversedWord}${s[i]}`;
    }

    return reversedWord;
};

console.log(reverseString(s));