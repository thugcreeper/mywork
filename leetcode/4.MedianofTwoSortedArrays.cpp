class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        int len1=nums1.size();
        int len2=nums2.size();
        int idx1=0,idx2=0;
        int final_arr_len=len1+len2;
        vector<int> merged;
        while(idx1<len1 || idx2<len2){
            if(idx2 == len2 || (idx1 < len1 && nums1[idx1] <= nums2[idx2])){
                merged.push_back(nums1[idx1++]);
            }
            else{
                merged.push_back(nums2[idx2++]);
            }
            
        }
        if((final_arr_len)%2==0){
                return (merged[final_arr_len/2]+merged[final_arr_len/2-1])/2.0;
            }
            else{
                return merged[final_arr_len/2];
            }
    }
};
