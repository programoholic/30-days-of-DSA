

// optimized solution 

var getIntersectionNode = function (headA, headB) {
    const visited = new Map();
    let current = headA;
    let currentB = headB;
    while (current) {
        visited.set(current, 1);
        current = current.next
    }
    while (currentB) {
        if (visited.has(currentB)) {
            return currentB;
        }
       currentB = currentB.next; 
    }
  return null;
};



// Brute force solution : 

// var getIntersectionNode = function (headA, headB) {
//     let current = headA;
//     let currentB = headB;
//     let map ={};
//     while (current) {
//         map[current.data] = current;
//         //  let currentB=headB;
//         //  while (currentB) {
//         //      if (currentB === current) {
//         //          return current;
//         //      }
//         //      currentB=currentB.next;
//         //  }
//         //  current = current.next;
//     }
//     while (currentB) {
//         if (map[currentB.data]) {
//             return map[currentB.data];
//         }
//         currentB = currentB.next;
//     }
//   return null;
// };

module.exports = {
    getIntersectionNode
}