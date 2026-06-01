/**
 * ## Problem: Ad two numbers (LC #2)
 * ## Link:  * ## Difficulty: Medium
 * ## Difficulty: Medium
 * ## Pattern: Linked list traversal.
 *
 * ## Approach:
 * I start by creating a dummy head node to build the result list from, along with two variables, sum to hold the current digit result, and carry to track any overflow from the previous addition.
 * The loop runs as long as either list still has nodes or there's a leftover carry, since any of those three conditions means there's still work to do.
 * On each iteration I add the current values of l1 and l2 to sum, but only if they're not null, this handles the case where one list is longer than the other and one pointer has already reached the end.
 * Before checking for a new carry, I first apply any existing carry from the previous iteration by adding 1 to sum. Then I check if sum >= 10, if so, I subtract 10 from sum and set carry to 1, simulating how you'd write down the ones digit and carry the 1 in regular addition.
 * I then create a new node with the current sum and append it to the result list, advancing the head pointer forward. Finally I reset sum to 0 before the next iteration.
 * At the end I return newList.next, skipping the dummy head node which was only there to make building the list easier.
 *
 * ## Time Complexity:  O(max(m, n)) because the result linked list grows proportionally to the longer list.
 * ## Space Complexity: O(max(m, n))
 *
 * ## Mistakes / Things I learned:
 *   I learned how to use linked list for the first time.
 */


// Definition for singly-linked list. 
// Linked list constructor.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// Linked lists (Input).
const l1 = new ListNode(
    1,
    new ListNode(
        4,
        new ListNode(5)
    )
);

const l2 = new ListNode(
    5,
    new ListNode(
        9,
        new ListNode(1)
    )
);

var addTwoNumbers = function(l1, l2) {
    // Create new linked list to store answer.
    const result = new ListNode(0);
    // New linked list's head.
    let head = result;

    // Keep track of sums when adding 2 nodes together.
    let sum = 0;
    // This variable will work as a flag to let us know ehether we 
    // have to carry a 1 for a sum operation.
    let carry = 0;

    // SUM logic.
    while(l1 || l2 || carry != 0) {
        // If l1's head is not null then we add its value to "sum"
        if (l1 != null) {
            sum += l1.val;
            // Update l1 head.
            l1 = l1.next;
        }

        // If l2's head is not null then we add its value to "sum"
        if (l2 != null) {
            sum += l2.val;
            // Update l2 head.
            l2 = l2.next;
        }

        // if "carry" is equal to 1 then that means the previous sum was greater or equal than 10
        // which is why we have to carry the one to the current sum.
        if (carry >= 1) {
            sum = sum + 1;
            carry -= 1;
        }

        // If "sum" is greater or equal than 10, we substract 10 from it and carry the 1.
        // Meaning we do carry += 1.
        if (sum >= 10) {
            sum -= 10;
            carry += 1;
        }
        
        // Add sum to new linked list. Create a new node and make the current head note point to it.
        head.next = new ListNode(sum);
        // Update head so that we can keep adding more nodes.
        head = head.next;

        // Reset sum.
        sum = 0;
    }

    // Return result (new linked list containing all node result).
    // We do .next since our head node is 0, which is not relevant for end result.
    return result.next;
};

// Print out result.
console.log(addTwoNumbers(l1, l2));
