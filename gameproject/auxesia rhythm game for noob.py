import pygame as pg
import sys
from notes_data_for_noob import notes1,notes2

# 初始化 Pygame
pg.init()
pg.mixer.init()

# 音乐设置
pg.mixer.music.load("auxesia music.wav")
pg.mixer.music.set_volume(0.2)
def musicplay():
    pg.mixer.music.play()

# 屏幕设置
width = 600
height = 600
screen = pg.display.set_mode((width, height), flags=pg.RESIZABLE)

clock = pg.time.Clock()

pg.display.set_caption("auxesia")  #game's name
purple = (238, 130, 238)    #紫色的顏色代碼
light_purple = (216, 191, 216)
cyan = (0, 255, 255)
start_point = (0, 550)      #判定線起點
end_point = (600, 550)      #判定線終點
thickness = 5

# 背景
wait_image =  pg.image.load("kou's_reminder.jpg").convert()
auxesia_image = pg.image.load("auxesia for project.jpg").convert()
background_image = wait_image
screen.blit(background_image, [0, 0])
show_wait_image = True

# 记录照片切换时间
photo_switch_time = pg.time.get_ticks()

recall = 0 #function as combo

# 运行
running = True

while running:
    screen.blit(wait_image, [0, 0])   
    screen.blit(background_image, [0, 0])
    clock.tick(100)  # 限制帧率为100帧每秒
    
    for event in pg.event.get():
        if event.type == pg.QUIT:
            running = False
        if event.type == pg.KEYDOWN:
            for note in notes1 + notes2:
                # 检查是否按下了与音符对应的键，并且音符的y坐标接近575
                if event.key == pg.K_SPACE and 500 <= note['y'] <= 575:
                    if note in notes1:
                        notes1.remove(note)
                    elif note in notes2:
                        notes2.remove(note)
                    recall += 1
            if event.key == pg.K_ESCAPE:    #press esc to quit
                pg.quit()
                
    for note in notes1 + notes2:
        if  575 <= note['y']:
            recall = 0
            
    current_time = pg.time.get_ticks()
            
    # 如果显示照片A，并且距离上次切换已经过去5秒，切换到照片B
    if show_wait_image and current_time - photo_switch_time >= 5000:
        background_image = auxesia_image
        photo_switch_time = current_time  # 更新切换时间
        show_wait_image = False
        musicplay()
        
    if not show_wait_image:
        pg.draw.line(screen, purple, start_point, end_point, thickness)
        pg.draw.circle(screen, cyan, (300, 550), 10)
            
         # 移动和绘制音符
        for note in notes1 + notes2:
            note['y'] += note['speed']
            if note['y'] > height:
                if note in notes1:
                    notes1.remove(note)
                elif note in notes2:
                    notes2.remove(note)
            else:
                if note['key'] == 'SPACE':
                    pg.draw.line(screen, cyan, (note['x'], note['y']), (note['x'], note['y'] + 15), 40)
                
            # 绘制得分
        font = pg.font.SysFont("couriernew", 50)
        text = font.render("combo:" + str(recall), True,(186, 85, 211))
        screen.blit(text, (150, 550))
                            
    pg.display.flip()
    
pg.quit()
sys.exit()
