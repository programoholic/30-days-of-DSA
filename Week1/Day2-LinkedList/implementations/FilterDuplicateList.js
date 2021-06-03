








/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
  const  deleteDuplicates = function(head) {
      let next;
      let current = head;
      while (current) {
          let temp = current;
          if (temp!=null && temp.data === current.data) {
              temp = temp.next;
          }
          current = current.next;
      }
      return current;
};

module.exports = {
    deleteDuplicates
}