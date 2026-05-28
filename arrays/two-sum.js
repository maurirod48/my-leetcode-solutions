/**
 * ## Problem: [Two Sum] (LC #1).
 * 
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * You can return the answer in any order.
 * 
 * ## Link: https://leetcode.com/problems/two-sum
 * ## Difficulty: Easy
 * ## Pattern: Hash Map.
 *
 * ## Approach:
 * 
 * We are given a target (integer) and an array of integers. We have to find 2 numbers in the array that add up to the target, 
 * but the same array element cannot be used twice. First I'd create a hash map, then use for loop to iterate through each element. For each iteration 
 * we do this: 
 * 
 * - Calculate the difference between the target and the current element and call it "complement".
 * - Check if "complement" exists in hash map. 
 * - If "complement" does not exist in hash map, we add the current array element to the hash map (key: element, value: element index).
 * - If "complement" does exist in hash map, it means we've found our answer so we just return the current element index
 *   and the key-value entry whose key is equal to "complement" which stores the other element index.
 * 
 * ## Time Complexity:  O(n)
 * ## Space Complexity: O(?)
 *
 * ## Mistakes / Things I learned:
 *   At this point I'm learning how to use hash maps to resolve DSA problems. the first mistake I was was use 2 for loops to 
 *   iterate thru the array twice making O(n^2). I wouldn't call it a mistake really, I just learned that using a hash map would 
 *   reduce the runtime. Using a hash map helps reduce the runtime to O(n) because we only iterate thru the array once and avoids
 *   the need of using nested loops.
 */


// Array.
const nums1 = [3, 3];
const nums2 = [3, 1, 2, 5, 9];

// Target.
const target = 6;

var twoSum = function(nums, target) {
    // Map.
    const indexes = new Map();

    // Use a forloop to iterate thru each array element.
    for (let i = 0; i <= nums.length; i++) {
        // Find complement (The number needed to reach "target").
        const complement = target - nums[i];

        // Check if there's a key which name is the same as "complement" in "indexes" map.
        if (indexes.has(complement)) {
            // Check to see if the value of index.get(complement) is equal to i.
            if (indexes.get(complement) != i) {
                indexes.set('duplicate', i);
                return [indexes.get(complement), indexes.get('duplicate')];
            } else {
                // Add current element to map.
                indexes.set(nums[i], i);
                // Return answer.
                return [indexes.get(complement), indexes.get(nums[i])];
            }
        }

        // If previous if statement is false then just add the current array element to the map and keep looping.
        indexes.set(nums[i], i);
    }
    return indexes;
}


console.log(twoSum(nums2, target));