/**
 * Merge two sorted linked lists and return it as a sorted list.
 *  The list should be made by splicing together the nodes of the first two lists.
 * 
 * @Input :  l1 = [1,2,4], l2 = [1,3,4]
 *  @Output : [1,1,2,3,4,4]
 * 
 *********************************/

l1 => 1, 1, 2, 4
l2 => 3




[1,2,3,4,5] -> [2,3,8,10]

function mergeList(list1, list2){
    while (list2) {
        let temp = null;
        while (list1.data <= list2.data) {
            temp = list1;
            list1 = list2;
            list2.next = temp;
        }
        
    }
    
    

}
