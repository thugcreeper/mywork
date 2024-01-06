#include <stdio.h>
#include <stdlib.h>

int main() {
    int dotime = 0;
	double playptt,sum=0;
	printf("enter 30 playptt:\n");
    while (dotime < 1000) {
		int datacount=0;
		for(int i=0;i<30;i++){
		scanf("%lf",&playptt);
        sum += playptt;
        datacount++;
		}
        printf("received %d data and B30= %lf\n", datacount,sum / 30);
        dotime++;
    }
    return 0;
}

