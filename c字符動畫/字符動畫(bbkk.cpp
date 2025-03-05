#include<stdio.h>
#include<string.h>
#include<stdlib.h>
#include<Windows.h>//define 系統窗口操作命令 
#include<assert.h>

void gotoxy(int x,int y){
	COORD pos;//COORD為windows.h定義的一個結構體 
	pos.X = x - 1;
	pos.Y = y - 1;
	SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE),pos);
}

int main(){
	system("color f0");//改變控制台背景色 
	long i;//用於儲存.txt文件個數 
	char Filename[100];//store file's name
	char hi[254000];//store char read from file
	FILE *in;//file pointer
	system("C:\\Users\\User\\Desktop\\C++學習\\c字符動畫\\bbkkbkk.mp4");//open video
	Sleep(3000);//3000ms
	//playvideo
	for(i =1;i<=2000;i++){//i的範圍轉換為.txt的個數 
		sprintf(Filename,"C:\\Users\\User\\Desktop\\C++學習\\c字符動畫\\bbkktxt\\(%ld).txt",i);
	in = fopen(Filename,"r");//r means read mode
	assert(in != NULL);
	fread(hi,1,254000,in);//一次讀254000筆資料到hi陣列 
	printf("%s\n%d",hi,i);
	gotoxy(1,1);
	Sleep(26);
	fclose(in);
	}
}
