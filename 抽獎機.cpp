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
        cout << "���:1, 10�s��:2, 100�s��:3, 1000�s��:4" << endl << endl;
        cin >> input;

        if (input < 1 || input > 4) {
            continue;
        }

        int iterations = 1;
        if (input == 2) iterations = 10;			//�Q�ηs�ܼƶi��P�_�A�٥h���ƪ�code 
        else if (input == 3) iterations = 100;
        else if (input == 4) iterations = 1000;

        for (i = 0; i < iterations; i++) {
            randomnum[i] = rand() % (max - min + 1) + min;//�ͦ�0-999�H���@�Ӽ� 
            
            if (randomnum[i] <= 10) 		ssr++;
                
            else if (10 < randomnum[i] && randomnum[i] < 100) 		sr++;//��ĳ��&&�s����ӧP�_�� 
              
            else 		r++;
        }

        cout << "SSR �� " << ssr << " �i" << endl;
        cout << "SR  �� " << sr <<  " �i" << endl;
        cout << "R   �� " << r <<   " �i" << endl << endl;
    }

    return 0;
}

