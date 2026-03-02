class Solution {
public:
    string check(string &s,int left,int right){
        int len=s.length();
        while(left>=0 && right<len && s[left]==s[right]){
                left--;
                right++;
            }
        //程left+1琌搭痷タゅ絛瞅琌left+1,right-1:r-l-1
        return s.substr(left+1,right-left-1);//substr(竚))
    }
    string longestPalindrome(string s) {
        int len=s.length();
        if(len<=1) return s;
        string res="";
        for(int i=0;i<len;i++){
            // 计
            string odd = check(s, i, i);
            // 案计
            string even = check(s, i, i + 1);
            if(odd.length()>res.length()){
                res=odd;
            }
            if(even.length()>res.length()){
                res=even;
            }
        }
        return res;
    }
};
