#include<stdio.h>
#include<string.h>
#include<stdlib.h>
#include<Windows.h>//define �t�ε��f�ާ@�R�O 
#include<assert.h>

void gotoxy(int x,int y){
	COORD pos;//COORD��windows.h�w�q���@�ӵ��c�� 
	pos.X = x - 1;
	pos.Y = y - 1;
	SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE),pos);
}

int main(){
	system("color f0");//���ܱ���x�I���� 
	long i;//�Ω��x�s.txt���Ӽ� 
	char Filename[100];//store file's name
	char hi[254000];//store char read from file
	FILE *in;//file pointer
	system("C:\\Users\\User\\Desktop\\C++�ǲ�\\c�r�Űʵe\\bbkkbkk.mp4");//open video
	Sleep(3000);//3000ms
	//playvideo
	for(i =1;i<=2000;i++){//i���d���ഫ��.txt���Ӽ� 
		sprintf(Filename,"C:\\Users\\User\\Desktop\\C++�ǲ�\\c�r�Űʵe\\bbkktxt\\(%ld).txt",i);
	in = fopen(Filename,"r");//r means read mode
	assert(in != NULL);
	fread(hi,1,254000,in);//�@��Ū254000����ƨ�hi�}�C 
	printf("%s\n%d",hi,i);
	gotoxy(1,1);
	Sleep(26);
	fclose(in);
	}
}
