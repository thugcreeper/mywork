#include <stdio.h>
#include <stdlib.h>

int main() {
    int dotime = 0;
	double playptt,sum=0;
    while (dotime < 1000) {

		for(int i=0;i<30;i++){
		scanf("%lf",&playptt);
        sum += playptt;
		}
        printf("B30: %lf\n", sum / 30);
        dotime++;
    }
    return 0;
}

