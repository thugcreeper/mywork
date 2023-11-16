#include<iostream>
#include<cstdlib>
#include<ctime>
using namespace std;

int main() {
    int input, i, min = 0, max = 999;
    int randomnum[1000];
    srand(time(0));  

    while (true) {
        int r = 0, sr = 0, ssr = 0;
        cout << "單抽:1, 10連抽:2, 100連抽:3, 1000連抽:4" << endl << endl;
        cin >> input;

        if (input < 1 || input > 4) {
            continue;
        }

        int iterations = 1;
        if (input == 2) iterations = 10;			//利用新變數進行判斷，省去重複的code 
        else if (input == 3) iterations = 100;
        else if (input == 4) iterations = 1000;

        for (i = 0; i < iterations; i++) {
            randomnum[i] = rand() % (max - min + 1) + min;//生成0-999隨機一個數 
            
            if (randomnum[i] <= 10) 		ssr++;
                
            else if (10 < randomnum[i] && randomnum[i] < 100) 		sr++;//建議用&&連接兩個判斷式 
              
            else 		r++;
        }

        cout << "SSR 有 " << ssr << " 張" << endl;
        cout << "SR  有 " << sr <<  " 張" << endl;
        cout << "R   有 " << r <<   " 張" << endl << endl;
    }

    return 0;
}

