class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        unordered_map<char,int>index;
        int left=0;
        int maxLen=0;
        for(int right=0;right<s.length();right++){
            if(index.count(s[right]) && index[s[right]]>=left){//遇到出現過的字元
                left=index[s[right]]+1;//左邊界變成重複字母的下一個位置
            }
            index[s[right]]=right;
            maxLen=max(maxLen,right-left+1);
        }
        return maxLen;
    }
};
