import cloudinary
import cloudinary.uploader
from cloudinary.utils import cloudinary_url
from dotenv import load_dotenv
import os

load_dotenv()

#read env variables
cloud_name = os.getenv("CLOUDINARY_CLOUD_NAME")
api_key = os.getenv("CLOUDINARY_API_KEY")
api_secret = os.getenv("CLOUDINARY_API_SECRET")

# Configuration       
cloudinary.config( 
    cloud_name = cloud_name, 
    api_key = api_key, 
    api_secret = api_secret, 
    secure=True
)

imgDir_path = "./SongImg"
dir_list = os.listdir(imgDir_path)#列出imgDir_path的所有檔案與資料夾
cropImgUrl_list = []
songCover = [img for img in dir_list if os.path.isfile(imgDir_path+'/'+img)]
for img in songCover:#一次上傳資料夾內所有檔案
    Upload_result = cloudinary.uploader.upload(imgDir_path+'/'+img,public_id=img[:-4],
            transformation=[{"width": 400, "height": 400, "crop": "fill"}])#[:-4]去掉副檔名

    cropImgUrl_list.append(cloudinary_url(Upload_result["public_id"], fetch_format="auto", quality="auto"))

#AetherCrest
for url in cropImgUrl_list:
    print(url[0])   
#dir_list = os.listdir(imgDir_path)