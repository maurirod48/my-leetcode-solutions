/**
 * Using a hash map to solve twoSum leetcode problem.
 */


// Array.
const nums = [3, 3];

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


console.log(twoSum(nums, target));