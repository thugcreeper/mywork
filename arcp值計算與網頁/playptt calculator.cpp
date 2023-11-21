#include<iostream>
#include<iomanip>
using namespace std;

float playptt(float constant,int score){
    if (score >= 10000000) {
        constant += 2;
        return float(constant);
    }
    if (score < 10000000 && score >= 9800000) {
        constant = float(constant + 1 + (static_cast<float>(score - 9800000) / 200000));
        return float(constant);
    }
    if (score < 9800000 && score >= 9500000) {
        constant = float(constant + (static_cast<float>(score - 9500000) / 300000));
        return float(constant);
    }
    if (score < 9500000) {
        cout << "¨S±Ï¤F";
    }
}

int main(){
    float constant;
    int score = 0;
    int dotime = 0;
    while(dotime<1000){
	   cout<<"input constant:"<<endl;
	   cin>>constant;
       cout<<"input score:"<<endl;
       cin>>score;
       cout<<"your playptt ="<< fixed << setprecision(6) << playptt(constant,score)<<endl;
       dotime++;
    }
    return 0;
}
