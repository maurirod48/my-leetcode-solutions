
/* Linked List practice */

function linkedList() {
    let length = 0;
    let head = null;

    const Node = function(element) {
        this.element = element;
        this.next = null;
    };

    this.size = function() {
        return length;
    }

    this.head = function() {
        return head.element;
    }

    this.add = function(element) {
        let node = new Node(element);

        if (head == null) {
            head = node;
        } else {
            let currentNode = head;

            while (currentNode.next) {
                currentNode = currentNode.next
            }

            currentNode.next = node;
        }
        length++;
    };

    

    this.remove = function(element) {
        let currentNode = head;
        let previousNode;

        if (currentNode.element == element) {
            head = currentNode.next;
        } else {
            while (currentNode.element != element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            previousNode.next = currentNode.next;
            
            length--;
        }
    };


    this.isEmpty = function() {
        return length == 0;
    }

    this.indexOf = function(element) {
        let currentNode = head;
        let index = -1;

        while (currentNode) {
            index++;

            if (currentNode.element == element) {
                return index;
            }

            currentNode = currentNode.next;
        }

        return -1;
    }

    this.elementAt = function(element, index) {
        let currentNode = head;
        let listIndex;

        while (currentNode) {
            
            if (listIndex == index) {
                return currentNode;
            }

            listIndex++;
            currentNode = currentNode.next;
        }

        return false;
    }

    this.nodes = function() {
        let currentNode = head;

        while (currentNode) {
            console.log(currentNode);
            
            if (currentNode.next != null) {
                currentNode = currentNode.next;
            } else {
                break;
            }

        }
    }
}

const list = new linkedList();

list.add('Senku');
list.add('Taiju');

list.nodes();