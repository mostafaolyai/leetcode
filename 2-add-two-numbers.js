/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 const addTwoNumbers = (l1, l2) => {
    let p1 = l1,
        p2 = l2, 
        carry = 0, 
        num1 = 0, 
        num2 = 0, 
        solution = new ListNode(0),
        //this is gonna to move, but soltion finally will return
        current = solution;

        while(p1 || p2){
            num1 = p1 ? p1.val : 0;
            num2 = p2 ? p2.val : 0;

            if(num1 + num2 + carry > 9){
                current.next = new ListNode(num1 + num2 + carry - 10);
                current = current.next;
                carry = 1;
            }else{
                current.next = new ListNode(num1 + num2 + carry);
                current = current.next;
                carry = 0;
            }

            if(p1) p1 = p1.next
            if(p2) p2 = p2.next
        }  

        if(carry) current.next = new ListNode(carry)

        return solution.next
};



/**
 * 
 */