/**
 * ## Problem: Fizz Buzz (LC #412)
 * ## Link: https://leetcode.com/problems/fizz-buzz/
 * ## Difficulty: Easy
 * ## Pattern: Simulation / Loops & Conditionals
 *
 * ## Approach:
 *   Explain your thinking in plain English here.
 *   What did you notice? What was your first instinct?
 *   What made you choose this approach?
 *
 * ## Time Complexity:  O(?)
 * ## Space Complexity: O(?)
 *
 * ## Mistakes / Things I learned:
 * I Learned that condition order matters in if/else chains, checking the combined FizzBuzz condition last means it can never be reached
 * so we check for it first.
 */


// Input.
const number = 15;

function fizzBuzz(n) {

    let res = [];

    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            res.push('FizzBuzz');
        }
        else if (i % 3 == 0) {
            res.push('Fizz');
        }
        else if (i % 5 == 0) {
            res.push('Buzz');
        }
        else {
            res.push(i);
        }
    }

    console.log(res);
}

fizzBuzz(number);