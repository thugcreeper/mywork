class Solution {
public:
    string convert(string s, int numRows) {
        vector<string> box(numRows);
        int currentRow=0;
        int dir=1;//1向下，-1向上
        for(int i =0;i<s.length();i++){
            box[currentRow].push_back(s[i]);
            if(currentRow==0){
                dir=1;
            }
            else if(currentRow==numRows-1){//到最底部
                dir=-1;
            }
            if(currentRow+dir<numRows)//被index問題搞，操
                currentRow+=dir;
        }
        string ans="";
        for(string s:box){
            ans+=s;
        }
        /*
        for(int i=0;i<numRows;i++){
            for(int j=0;j<box[i].size();j++){
                ans+=box[i][j];
            }
        }*/
        return ans;
    }
};
