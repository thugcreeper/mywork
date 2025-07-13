import React, { useState } from "react";
import { motion } from "framer-motion";
import { Ship, Compass } from "lucide-react";
import './App.css';

function App() {
  const [explore, setExplore] = useState(false); // 控制是否切換內容

  const handleExploreClick = () => {
    setExplore(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 p-6">
      <div className="max-w-4xl mx-auto grid gap-6">
        {explore ? (
          // 當 explore 為 true 顯示的新內容
          <div className="text-center mt-20">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-blue-900 mb-4"
            >
              歡迎進入碧藍世界！
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-blue-800"
            >
              這裡是全新的探索頁面，你可以加入更多內容如遊戲介紹、角色資料、攻略等等。
            </motion.p>
            <div className="container">
              <div><img src="/g1.gif" alt="no image" className="azurGif"/><div style={{ color: '#d8e613', fontFamily: '"Times New Roman", Times, serif' }}>Execellent</div></div>
              <div><img src="/g2.gif" alt="no image" className="azurGif"/><div>大哭</div></div>
              <div><img src="/g3.gif" alt="no image" className="azurGif"/><div style={{ color: 'red' }}>一起喝</div></div>
              <div><img src="/g4.gif" alt="no image" className="azurGif"/><div>氣</div></div>
              <div><img src="/g5.gif" alt="no image" className="azurGif"/><div>水管</div></div>
              <div><img src="/g6.gif" alt="no image" className="azurGif"/><div>失落</div></div>
              <div><img src="/g7.gif" alt="no image" className="azurGif"/><div>吃披薩</div></div>
              <div><img src="/g8.gif" alt="no image" className="azurGif"/><div>哇哈哈</div></div>
              <div><img src="/g9.gif" alt="no image" className="azurGif"/><div>檸檬</div></div>
              <div><img src="/g10.gif" alt="no image" className="azurGif"/><div style={{ color: '#eb4929' }}>這是品味哦</div></div>
              <div><img src="/g11.png" alt="no image" className="azurGif"/><div style={{ color: 'red' }}>笨蛋</div></div>
              <div><img src="/g12.gif" alt="no image" className="azurGif"/><div>欸嘿嘿</div></div>
              <div><img src="/g13.gif" alt="no image" className="azurGif"/><div>生氣</div></div>
              <div><img src="/g14.gif" alt="no image" className="azurGif"/><div>愛心</div></div>
              <div><img src="/g15.gif" alt="no image" className="azurGif"/><div>窘迫</div></div>
            </div>
            <a href="https://wiki.biligame.com/blhx/%E8%A1%A8%E6%83%85%E5%8C%85" target="_blank" rel="noopener noreferrer" style={{ fontSize: '2em' }}>reference:表情包出處</a>
          </div>
        ) : (
          // 原本內容
          <>
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-center text-blue-800"
            >
              碧藍航線 Azur Lane
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-center text-blue-900"
            >
              一款結合艦船擬人與彈幕射擊的美少女手遊，由中日團隊共同開發，自2017年推出以來風靡全球。
            </motion.p>

            <div className="grid md:grid-cols-3 gap-4">
              <motion.div whileHover={{ scale: 1.05 }} className="col-span-1">
                <div className="bg-white shadow-lg rounded-2xl p-4">
                  <Ship className="w-10 h-10 text-blue-600 mb-2" />
                  <h2 className="text-xl font-semibold mb-2">特色艦娘</h2>
                  <p>
                    每位角色皆以歷史著名艦船為藍本設計，融合美術風格與角色個性，展現多樣魅力。
                  </p>
                </div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} className="col-span-1">
                <div className="bg-white shadow-lg rounded-2xl p-4">
                  <Compass className="w-10 h-10 text-blue-600 mb-2" />
                  <h2 className="text-xl font-semibold mb-2">多元玩法</h2>
                  <p>
                    包含主線關卡、演習、建造、後宅系統、活動劇情等，豐富玩家的養成與戰略體驗。
                  </p>
                </div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} className="col-span-1">
                <div className="bg-white shadow-lg rounded-2xl p-4">
                  <img
                    src="/azurlane_logo.png"
                    alt="Azur Lane Logo"
                    height={50}
                    width={100}
                    className="w-full object-contain h-24 mb-2"
                  />
                  <h2 className="text-xl font-semibold mb-2">全球人氣</h2>
                  <p>
                    支援多語言版本，並與知名IP聯動，如《Neptunia》《Dead or Alive》等，吸引各地粉絲喜愛。
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="text-center mt-6">
              <button
                className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-full text-lg"
                onClick={handleExploreClick}
              >
                開始探索碧藍世界
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
