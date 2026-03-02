class Solution {
public:
    int myAtoi(string s) {
        int len=s.size();
        int sign=1;
        int ans=0;
        int flag=0;//尚未讀到+-號
        for(int i=0;i<len;i++){
            if(s[i]==' '&& !flag) continue;
            if((s[i]=='-' || s[i]=='+') && !flag) {
                if(s[i]=='-'){
                    sign=-1;
                }
                flag=1;
                continue;
            }
            if(s[i] >= '0' && s[i] <= '9') {
                flag=1;//再遇到+-就停止
                int digit=s[i]-'0';
                if (ans > INT_MAX / 10 || 
                (ans == INT_MAX / 10 && digit > 7)) {
                    return sign == 1 ? INT_MAX : INT_MIN;
                }
            ans = ans * 10 + digit;
            }
            else{//非digit，break
                break;
            }


           
        }
        return sign*ans;
    }
};
/*AI版
class Solution {
public:
    int myAtoi(string s) {
        int sign = 1;
        int ans = 0;
        int i = 0;
        int n = s.size();

        // 1?? skip leading spaces
        while (i < n && s[i] == ' ') i++;

        // 2?? sign
        if (i < n && (s[i] == '+' || s[i] == '-')) {
            if (s[i] == '-') sign = -1;
            i++;
        }

        // 3?? digits only
        for (; i < n; i++) {
            if (s[i] < '0' || s[i] > '9') break;

            int digit = s[i] - '0';

            if (ans > INT_MAX / 10 ||
               (ans == INT_MAX / 10 && digit > 7)) {
                return sign == 1 ? INT_MAX : INT_MIN;
            }

            ans = ans * 10 + digit;
        }

        return sign * ans;
    }
};
*/
