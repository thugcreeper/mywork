// ─── Preset words from vocab.txt ───
const PRESET_WORDS = [{ "word": "promulgation", "meaning": "公佈；宣傳；普及", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "entrench", "meaning": "鞏固；挖掘；確立；侵犯", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "distention", "meaning": "膨脹；擴張:使窒息；悶死", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "alliterate", "meaning": "押頭韻", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "ambivert", "meaning": "雙重性格者", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "beguiled", "meaning": "欺騙", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "obituary", "meaning": "訃聞", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "complexional", "meaning": "膚色的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "syndicate", "meaning": "財團", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "plough", "meaning": "犁 耕作", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "trespassing", "meaning": "擅自進入私人土地", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "complaisant", "meaning": "有禮貌的 殷勤的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "reminiscent", "meaning": "使人憶起…的；懷舊的；提醒的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "depute", "meaning": "授權、委任", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "censure", "meaning": "譴責", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "acrimonious", "meaning": "刻薄的；激烈的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "gait", "meaning": "步態", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "dabbler", "meaning": "戲水者", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "inanition", "meaning": "空虛、死氣沉沉", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "fumigate", "meaning": "煙燻、香薰", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "overgraze", "meaning": "過度放牧", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "peristyle", "meaning": "列柱廊；圍柱列；列柱圍繞的中庭", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "delineate", "meaning": "詳細描述；畫…的輪廓", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "intervallic", "meaning": "音程的；間隔；距離；休息時間", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "dilutor", "meaning": "稀釋劑", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "anode", "meaning": "陽極", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "gaudily", "meaning": "俗麗的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "apparition", "meaning": "幽靈、幻影", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "atheist", "meaning": "無神論者", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "disrepute", "meaning": "蒙羞", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "purposely", "meaning": "有意地", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "jot", "meaning": "匆匆記下", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "meditation", "meaning": "冥想；沉思", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "gastric", "meaning": "胃的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "bearing", "meaning": "關係；舉止；生育期；結果實期；方向感；意思", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "esoteric", "meaning": "深奧的；難理解的；隱密的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "rubber", "meaning": "橡膠；橡膠製品", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "imprimatur", "meaning": "出版許可；認可", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "leader", "meaning": "領袖；領導者；領先的人(或事物)", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "epicentral", "meaning": "震中的；中心的；中樞的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "cardinal", "meaning": "紅衣主教；鮮紅色的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "chap", "meaning": "傢伙；小伙子", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "broadcast", "meaning": "廣播；播送", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "atheists", "meaning": "無神論者", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "retrogress", "meaning": "倒退；退步", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "expostulatory", "meaning": "忠告的；訓誡的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "activist", "meaning": "社會運動家", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "cinch", "meaning": "容易之事；小事一樁；肚帶", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "debut", "meaning": "初次登臺", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "wasteful", "meaning": "浪費的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "initiative", "meaning": "主動性；進取心", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "pictorial", "meaning": "圖畫的；繪畫的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "ailment", "meaning": "病痛；疾病", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "energetic", "meaning": "精力充沛的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "emulative", "meaning": "好勝的；模仿的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "maiden", "meaning": "少女；初次的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "theoretical", "meaning": "理論上的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "earring", "meaning": "耳環", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "alacrity", "meaning": "欣然同意；樂意；活潑；輕快", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "relish", "meaning": "美味；喜愛；佐料；品味", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "vanity", "meaning": "虛榮心", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "gasconade", "meaning": "吹牛；誇口", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "dullsville", "meaning": "無聊的地方；極無趣", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "backwards", "meaning": "向後地", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "pennate", "meaning": "有羽翼的；羽狀的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "extempore", "meaning": "臨時的；不準備的/即興地", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "oust", "meaning": "驅逐；革職；剝奪", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "gawk", "meaning": "呆子／目瞪口呆", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "boulder", "meaning": "巨石", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "hove", "meaning": "舉起(heave的過去式與過去分詞)", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "cadenced", "meaning": "有節奏的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "tertiary", "meaning": "第三的；第三順位的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "roundabout", "meaning": "迂迴的；間接的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "lofty", "meaning": "崇高的；高遠的；高傲的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "ensnare", "meaning": "陷害、誘捕", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "rejoicingly", "meaning": "歡欣鼓舞地", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "bowdlerize", "meaning": "刪改、刪節", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "caveat", "meaning": "警告；附帶條件", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "defiant", "meaning": "挑釁的；反抗的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "erstwhile", "meaning": "昔日的；以前的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "insensitive", "meaning": "麻木的；無感的；不體貼的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "grievance", "meaning": "不滿；申訴；抱怨", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "effluent", "meaning": "污水；廢水；排放物", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "illiberal", "meaning": "吝嗇的；狹隘的；不寬容的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "corroborate", "meaning": "證實；確證", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "asunder", "meaning": "四分五裂；分離地", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "apogee", "meaning": "最高點；頂點", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "brusque", "meaning": "粗暴的；唐突無禮的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "galvanic", "meaning": "突然的；觸電般的；電流引起的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "hanker", "meaning": "渴望；嚮往", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "analyze", "meaning": "分析", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "durability", "meaning": "耐久性；耐用度", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "commence", "meaning": "開始", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "hermetically", "meaning": "密封地；完全隔絕地", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "ultimately", "meaning": "最終；最後", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "heathen", "meaning": "異教徒", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "amelioration", "meaning": "改善；改良；改正", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "relinquish", "meaning": "放棄；撤出；交出", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "appreciable", "meaning": "可見的、明顯的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "abashment", "meaning": "羞愧；難為情", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "botanically", "meaning": "以植物學地；從植物學角度", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "syntax", "meaning": "語法；句法", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "contumely", "meaning": "傲慢；侮辱", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "scanty", "meaning": "不足的；稀少的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "convoluted", "meaning": "複雜難懂的；曲折的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "barometric", "meaning": "氣壓的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "bedlam", "meaning": "喧鬧", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "begirt", "meaning": "圍繞", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "decanters", "meaning": "玻璃瓶／醒酒器", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "fiend", "meaning": "狂熱愛好者；惡魔般的人", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "divisional", "meaning": "部門的；分區的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "upend", "meaning": "倒置；顛倒", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "empyrean", "meaning": "天空的；天堂的（詩意用法）", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "intangible", "meaning": "難以形容的；無形的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "dissertation", "meaning": "論文", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "abduct", "meaning": "綁架；誘拐", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "proliferate", "meaning": "擴散；猛增；激增", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "contemptuous", "meaning": "輕視的；瞧不起的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "eidetic", "meaning": "鮮明的；異常清晰的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "furtive", "meaning": "鬼鬼祟祟的；偷偷的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "chaste", "meaning": "貞潔的；純潔的；樸素的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "plangent", "meaning": "悲切的；（聲音）洪亮哀傷的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "inflexible", "meaning": "不可變的；頑固的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "derivative", "meaning": "衍生的；派生詞", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "cobby", "meaning": "結實的；短壯有力的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "stewardess", "meaning": "空服員；女服務員", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "inamorata", "meaning": "情人（女性）", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "espousal", "meaning": "擁護；支持；訂(或結)婚", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "dingy", "meaning": "昏暗的；骯髒的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "encyclical", "meaning": "通諭", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "fortitude", "meaning": "堅忍不拔；剛毅", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "complicity", "meaning": "共謀；串通關係", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "exclamation", "meaning": "驚呼；感嘆", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "praxis", "meaning": "實踐；實際運用", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "quibblers", "meaning": "吹毛求疵的人", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "highbrow", "meaning": "高知識份子的；陽春白雪的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "synthetic", "meaning": "合成的；人造的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "counterpoint", "meaning": "對位；對比", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "Pope", "meaning": "教宗", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "foss", "meaning": "壕溝；護城河", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "bulge", "meaning": "凸出", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "derision", "meaning": "嘲笑；嘲弄", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "construe", "meaning": "詮釋；解釋；理解為", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "lechery", "meaning": "好色；色慾；淫蕩", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "feebleminded", "meaning": "低能的；愚笨的；意志薄弱的", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }, { "word": "limp", "meaning": "跛行；緩慢費力地前進", "phonetic": "", "quizCount": 0, "mastered": false, "streak": 0 }];

// ─── State ───
const STORE_KEY = 'wordcraft_v1';
const PAGE_SIZE = 20;
let words = JSON.parse(localStorage.getItem(STORE_KEY) || 'null') || [];
let currentPage = 1;
let quizSettings = { types: ['mc', 'spell'], dir: 'en2zh', count: 10 };
let quizQueue = [], quizIndex = 0, score = 0, currentQ = null, currentWord = null;
let audioCache = {};

function save() { localStorage.setItem(STORE_KEY, JSON.stringify(words)); }

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

function switchTab(tab) {
  document.querySelectorAll('.tab').forEach((t, i) => t.classList.toggle('active', ['library', 'quiz'][i] === tab));
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
}

// ─── Audio ───
// Primary: Web Speech API (works for all words, no network needed)
// Bonus: dictionaryapi.dev for real human audio when available
async function playAudio(word, btnId) {
  if (!word) return;
  const btn = btnId ? document.getElementById(btnId) : null;
  if (btn) { btn.disabled = true; btn.innerHTML = '<i class="ti ti-loader-2 spin"></i> 播放中…'; }

  // Try real audio first (cached)
  if (audioCache[word]) {
    await new Audio(audioCache[word]).play().catch(() => { });
    if (btn) { btn.disabled = false; btn.innerHTML = '<i class="ti ti-volume"></i>'; }
    return;
  }

  // Try dictionaryapi in background (non-blocking)
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`)
    .then(r => r.json())
    .then(data => {
      const audio = data[0]?.phonetics?.find(p => p.audio)?.audio;
      if (audio) audioCache[word] = audio; // cache for next time
    }).catch(() => { });

  // Always speak via Web Speech API immediately (reliable)
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(word);
    utter.lang = 'en-US';
    utter.rate = 0.85;
    utter.pitch = 1;
    // Prefer an English voice if available
    const voices = window.speechSynthesis.getVoices();
    const enVoice = voices.find(v => v.lang.startsWith('en-'));
    if (enVoice) utter.voice = enVoice;
    window.speechSynthesis.speak(utter);
  } else {
    showToast('此裝置不支援語音功能');
  }

  if (btn) { btn.disabled = false; btn.innerHTML = '<i class="ti ti-volume"></i>'; }
}

// ─── Library ───
function getFiltered() {
  const q = (document.getElementById('search-input')?.value || '').trim().toLowerCase();
  if (!q) return words;
  return words.filter(w => w.word.toLowerCase().includes(q) || w.meaning.toLowerCase().includes(q));
}

function renderLibrary() {
  const filtered = getFiltered();
  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  if (currentPage > totalPages) currentPage = totalPages;
  const start = (currentPage - 1) * PAGE_SIZE;
  const pageWords = filtered.slice(start, start + PAGE_SIZE);

  document.getElementById('hs-total').textContent = words.length;
  document.getElementById('hs-mastered').textContent = words.filter(w => w.mastered).length;
  document.getElementById('lib-count').textContent = total !== words.length ? `${total} / ${words.length} 個單字` : `${words.length} 個單字`;

  const list = document.getElementById('word-list');
  if (!words.length) {
    list.innerHTML = `<div class="empty-state"><i class="ti ti-book-2 empty-icon" aria-hidden="true"></i><p>單字庫是空的。<br><strong>新增單字</strong>或點「載入預設單字庫」開始！</p></div>`;
  } else if (!pageWords.length) {
    list.innerHTML = `<div class="empty-state"><i class="ti ti-search empty-icon" aria-hidden="true"></i><p>找不到符合的單字。</p></div>`;
  } else {
    const globalStart = words.indexOf(filtered[start]);
    list.innerHTML = pageWords.map((w) => {
      const gi = words.indexOf(w);
      return `<div class="word-card" style="animation-delay:${(words.indexOf(w) - globalStart) * 0.03}s">
        <div class="wc-left">
          <div class="wc-word">${escHtml(w.word)}${w.mastered ? '<span class="mastered-tag">MASTERED</span>' : ''}</div>
          ${w.phonetic ? `<div class="wc-phonetic">${escHtml(w.phonetic)}</div>` : ''}
          <div class="wc-meaning">${escHtml(w.meaning)}</div>
          ${w.quizCount ? `<div class="wc-meta">測驗 ${w.quizCount} 次${w.streak >= 2 ? ` · 🔥 連續答對 ${w.streak} 次` : ''}</div>` : ''}
        </div>
        <div class="wc-actions">
          <button class="icon-btn play" id="play-lib-${gi}" onclick="playAudio('${escAttr(w.word)}','play-lib-${gi}')" title="播放"><i class="ti ti-volume" aria-hidden="true"></i></button>
          <button class="icon-btn danger" onclick="removeWord(${gi})" title="刪除"><i class="ti ti-trash" aria-hidden="true"></i></button>
        </div>
      </div>`;
    }).join('');
  }

  // Pagination
  const pg = document.getElementById('pagination');
  if (totalPages <= 1) { pg.innerHTML = ''; return; }
  pg.innerHTML = `
    <button class="page-btn" onclick="goPage(${currentPage - 1})" ${currentPage <= 1 ? 'disabled' : ''}>← 上一頁</button>
    <span class="page-info">${currentPage} / ${totalPages}</span>
    <button class="page-btn" onclick="goPage(${currentPage + 1})" ${currentPage >= totalPages ? 'disabled' : ''}>下一頁 →</button>`;
}

function goPage(p) { currentPage = p; renderLibrary(); window.scrollTo({ top: 0, behavior: 'smooth' }); }

function escHtml(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
function escAttr(s) { return String(s).replace(/'/g, "\\'"); }

function addWord() {
  const word = document.getElementById('new-word').value.trim();
  const meaning = document.getElementById('new-meaning').value.trim();
  const phonetic = document.getElementById('new-phonetic').value.trim();
  if (!word || !meaning) { showToast('請填寫單字與意思'); return; }
  if (words.find(w => w.word.toLowerCase() === word.toLowerCase())) { showToast('單字已存在！'); return; }
  words.unshift({ word, meaning, phonetic, quizCount: 0, mastered: false, streak: 0, addedAt: Date.now() });
  save(); currentPage = 1; renderLibrary();
  ['new-word', 'new-meaning', 'new-phonetic'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('new-word').focus();
  showToast(`「${word}」已新增 ✓`);
}

function removeWord(i) {
  const w = words[i].word;
  words.splice(i, 1); save(); renderLibrary();
  showToast(`「${w}」已移除`);
}

function loadPreset() {
  let added = 0;
  PRESET_WORDS.forEach(p => {
    if (!words.find(w => w.word.toLowerCase() === p.word.toLowerCase())) {
      words.push({ ...p, addedAt: Date.now() }); added++;
    }
  });
  save(); currentPage = 1; renderLibrary();
  showToast(added > 0 ? `已載入 ${added} 個預設單字 ✓` : '預設單字已全部載入過了');
}

function exportWords() {
  const blob = new Blob([JSON.stringify(words, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  const now = new Date();
  const hour = String(now.getHours()).padStart(2, '0');
  const min = String(now.getMinutes()).padStart(2, '0');
  const sec = String(now.getSeconds().toFixed(0)).padStart(2, '0');
  a.download = `wordcraft_${new Date().toISOString().slice(0, 10) + "-" + hour + min + sec}.json`;
  a.click(); URL.revokeObjectURL(a.href);
  showToast('單字庫已匯出 ✓');
}

function importWords(e) {
  const file = e.target.files[0]; if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const data = JSON.parse(ev.target.result);
      if (!Array.isArray(data)) throw new Error('格式錯誤');
      let added = 0;
      data.forEach(w => {
        if (w.word && w.meaning && !words.find(x => x.word.toLowerCase() === w.word.toLowerCase())) {
          words.push({ word: w.word, meaning: w.meaning, phonetic: w.phonetic || '', quizCount: w.quizCount || 0, mastered: w.mastered || false, streak: w.streak || 0, addedAt: Date.now() });
          added++;
        }
      });
      save(); currentPage = 1; renderLibrary();
      showToast(`已匯入 ${added} 個單字 ✓`);
    } catch (err) { showToast('匯入失敗：JSON 格式有誤'); }
  };
  reader.readAsText(file);
  e.target.value = '';
}

function openClearModal() {
  document.getElementById('clear-count').textContent = words.length;
  document.getElementById('clear-modal').classList.add('open');
}
function closeModal() { document.getElementById('clear-modal').classList.remove('open'); }
function clearAll() { words = []; save(); currentPage = 1; renderLibrary(); closeModal(); showToast('單字庫已清空'); }
document.getElementById('clear-modal').addEventListener('click', e => { if (e.target === e.currentTarget) closeModal(); });

// ─── Quiz ───
function shuffle(arr) { return [...arr].sort(() => Math.random() - 0.5); }

function toggleChip(type) {
  const el = document.getElementById('chip-' + type);
  const has = quizSettings.types.includes(type);
  if (has && quizSettings.types.length === 1) { showToast('至少選一種題型'); return; }
  if (has) { quizSettings.types = quizSettings.types.filter(t => t !== type); el.classList.remove('sel'); }
  else { quizSettings.types.push(type); el.classList.add('sel'); }
}
function selectDir(dir) {
  quizSettings.dir = dir;
  ['en2zh', 'zh2en', 'mix'].forEach(d => document.getElementById('chip-' + d).classList.toggle('sel', d === dir));
}
function selectCount(n) {
  quizSettings.count = n;
  [10, 20, 0].forEach(c => document.getElementById('chip-' + (c || 'all')).classList.toggle('sel', c === n));
}

function startQuiz() {
  if (words.length < 4) { showToast('至少需要 4 個單字才能測驗'); switchTab('library'); return; }
  const pool = shuffle(words);
  const count = quizSettings.count === 0 ? pool.length : Math.min(quizSettings.count, pool.length);
  quizQueue = pool.slice(0, count).map(w => {
    const type = quizSettings.types[Math.floor(Math.random() * quizSettings.types.length)];
    let dir = quizSettings.dir;
    if (dir === 'mix') dir = Math.random() > 0.5 ? 'en2zh' : 'zh2en';
    if (type === 'spell') dir = 'en2zh';
    return { word: w, type, dir };
  });
  quizIndex = 0; score = 0;
  document.getElementById('quiz-setup-view').style.display = 'none';
  document.getElementById('quiz-result-view').style.display = 'none';
  document.getElementById('quiz-play-view').style.display = 'block';
  showQuestion();
}

function showQuestion() {
  if (quizIndex >= quizQueue.length) { showResult(); return; }
  currentQ = quizQueue[quizIndex];
  currentWord = currentQ.word.word;
  const q = currentQ, total = quizQueue.length;
  document.getElementById('q-progress').textContent = `${quizIndex + 1} / ${total}`;
  document.getElementById('q-progress-bar').style.width = `${(quizIndex / total) * 100}%`;
  const badge = document.getElementById('q-type-badge');
  badge.textContent = q.type === 'mc' ? '選擇題' : '拼寫題';
  badge.className = 'q-type-pill ' + (q.type === 'mc' ? 'q-type-mc' : 'q-type-spell');
  const fb = document.getElementById('q-feedback');
  fb.className = 'feedback-bar'; fb.textContent = '';

  const isEn2Zh = q.dir === 'en2zh';
  document.getElementById('q-prompt').textContent = isEn2Zh ? '這個單字的意思是？' : '這個意思的英文單字是？';
  document.getElementById('q-word').textContent = isEn2Zh ? q.word.word : q.word.meaning;
  document.getElementById('q-phonetic').textContent = isEn2Zh ? (q.word.phonetic || '') : '';
  const audioRow = document.getElementById('q-audio-row');
  audioRow.style.display = isEn2Zh ? 'block' : 'none';
  if (isEn2Zh) {
    const ab = document.getElementById('q-audio-btn');
    ab.disabled = false; ab.innerHTML = '<i class="ti ti-volume"></i>';
  }

  if (q.type === 'mc') {
    document.getElementById('mc-choices').style.display = 'grid';
    document.getElementById('spell-area').style.display = 'none';
    const wrongPool = shuffle(words.filter(w => w.word !== q.word.word)).slice(0, 3);
    const choices = shuffle([q.word, ...wrongPool]);
    document.getElementById('mc-choices').innerHTML = choices.map(c => {
      const label = isEn2Zh ? c.meaning : c.word;
      return `<button class="choice-btn" onclick="checkMC(this,'${escAttr(c.word)}','${escAttr(q.word.word)}')">${escHtml(label)}</button>`;
    }).join('');
    document.getElementById('q-actions').innerHTML = '';
  } else {
    document.getElementById('mc-choices').style.display = 'none';
    document.getElementById('spell-area').style.display = 'block';
    const inp = document.getElementById('spell-input');
    inp.value = ''; inp.className = 'spell-input'; inp.disabled = false;
    setTimeout(() => inp.focus(), 100);
    document.getElementById('q-actions').innerHTML =
      `<button class="btn btn-ghost" onclick="nextQuestion()">跳過</button>` +
      `<button class="btn btn-primary" onclick="checkSpell()"><i class="ti ti-check"></i>確認</button>`;
  }
}

function checkMC(btn, chosen, correct) {
  document.querySelectorAll('.choice-btn').forEach(b => b.disabled = true);
  const isEn2Zh = currentQ.dir === 'en2zh';
  if (chosen === correct) {
    btn.classList.add('correct'); score++; markMastery(correct, true);
  } else {
    btn.classList.add('wrong');
    document.querySelectorAll('.choice-btn').forEach(b => {
      const w = words.find(x => isEn2Zh ? x.meaning === b.textContent : x.word === b.textContent);
      if (w && w.word === correct) b.classList.add('correct');
    });
    markMastery(correct, false);
    const cw = words.find(w => w.word === correct);
    showFeedback(false, `正確答案：${isEn2Zh ? cw?.meaning : cw?.word}`);
  }
  currentQ.word.quizCount = (currentQ.word.quizCount || 0) + 1; save();
  document.getElementById('q-actions').innerHTML = `<button class="btn btn-primary" onclick="nextQuestion()">下一題 →</button>`;
}

function checkSpell() {
  const inp = document.getElementById('spell-input');
  const answer = inp.value.trim().toLowerCase();
  const correct = currentQ.word.word.toLowerCase();
  inp.disabled = true;
  if (answer === correct) {
    inp.classList.add('correct'); score++; markMastery(currentQ.word.word, true);
  } else {
    inp.classList.add('wrong'); markMastery(currentQ.word.word, false);
    showFeedback(false, `正確拼法：${currentQ.word.word}`);
  }
  currentQ.word.quizCount = (currentQ.word.quizCount || 0) + 1; save();
  document.getElementById('q-actions').innerHTML = `<button class="btn btn-primary" onclick="nextQuestion()">下一題 →</button>`;
}

function showFeedback(ok, msg) {
  const fb = document.getElementById('q-feedback');
  fb.textContent = msg; fb.className = 'feedback-bar show ' + (ok ? 'correct' : 'wrong');
}

function markMastery(wordStr, correct) {
  const w = words.find(x => x.word === wordStr); if (!w) return;
  if (correct) { w.streak = (w.streak || 0) + 1; if (w.streak >= 3) w.mastered = true; }
  else { w.streak = 0; w.mastered = false; }
}

function nextQuestion() { quizIndex++; showQuestion(); }

function showResult() {
  document.getElementById('quiz-play-view').style.display = 'none';
  document.getElementById('quiz-result-view').style.display = 'block';
  const total = quizQueue.length, pct = Math.round((score / total) * 100);
  document.getElementById('r-pct').textContent = pct + '%';
  document.getElementById('r-msg').textContent = pct >= 90 ? '出色！你真的掌握了這些單字。' : pct >= 70 ? '很好！持續練習讓你更完美。' : pct >= 50 ? '繼續努力，你在進步中！' : '別灰心，多複習幾次就能突破！';
  document.getElementById('r-sub').textContent = `共 ${total} 題`;
  document.getElementById('r-correct').textContent = score;
  document.getElementById('r-wrong').textContent = total - score;
  document.getElementById('quiz-setup-view').style.display = 'block';
  renderLibrary();
}

// ─── Init ───
renderLibrary();