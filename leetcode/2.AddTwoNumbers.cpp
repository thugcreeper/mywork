

class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        int carry=0;
        ListNode dummy(0);      // °²ÀY¸`ÂI
        ListNode* cur = &dummy;
        while(l1!=NULL || l2!=NULL||carry!=0){
            
            int x,y;
            if(l1!=NULL){x=l1->val;}
            else{ x=0;}
            if(l2!=NULL){y=l2->val;}
            else{ y=0;}
            int sum=x+y+carry;
            carry=sum/10;
            cur->next=new ListNode(sum%10);
            cur=cur->next;
            if (l1 != nullptr) l1 = l1->next;
            if (l2 != nullptr) l2 = l2->next;
        }
        return dummy.next;
    }
};
