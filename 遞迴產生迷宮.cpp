#include<stdio.h>
#include<stdlib.h>
#include<time.h>
#define width 10
#define height 5
char maze[2 * height + 1][2 * width + 1];
int offsetX[4] = {-2, 2, 0, 0};
int offsetY[4] = {0, 0, -2, 2};
void initMaze(){//21*11
	
	for(int i =0;i<11;i++){
		for(int j=0;j<21;j++){
			if(i%2==0||j%2==0)
				maze[i][j] = '#';
			else
				maze[i][j] = '?';
		}
	}
	maze[1][0] = ' ';
	maze[1][1] = ' ';
	maze[9][20] = ' ';
}

void createMaze(int x,int y){
	while(1){
		
		int count=0;
		for(int i=0;i<4;i++){
			if(maze[x+offsetX[i]][y+offsetY[i]] == '?')
				count++;
		}
		if(count == 0)		return;
		int num = rand()%4;//0-3的亂數
		while(maze[x+offsetX[num]][y+offsetY[num]] != '?'){
			num = rand()%4;
		}
		maze[x+offsetX[num]][y+offsetY[num]] = ' ';//將?那格改成道路
		maze[x+offsetX[num]/2][y+offsetY[num]/2] = ' '; //打通中間的牆 ,只要移動一格		
		createMaze(x + offsetX[num], y + offsetY[num]);		
	}
}

void printMaze(){
	for(int i =0;i<11;i++){
		for(int j=0;j<21;j++){
			printf("%c",maze[i][j]);
		}
		printf("\n");
	}
}

int main() {
    srand((unsigned int)time(NULL));
    initMaze();
    createMaze(1, 1);
    printMaze();
    return 0;
}
