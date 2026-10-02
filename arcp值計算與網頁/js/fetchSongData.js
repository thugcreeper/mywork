let songCatalog = [];

function fetchSongData() {//讀取json檔並填入表格
  return Promise.all([
    fetch("./json/arcsong.json").then(res => res.json()),
    fetch("./json/songPlayedData.json").then(res => res.json()),
    fetch("./json/songCovers.json").then(res => res.json())
  ]).then(([catalogData, playedData, coverData]) => {
    songCatalog = normalizeSongCatalog(catalogData, playedData, coverData);
    initializeRecordEditor(songCatalog);
    playedData.forEach(song => addRecordRow(song));
    updateRecordSummary();
    preloadRandomSong();
  });
}

function normalizeSongCatalog(catalogData, playedData, coverData) {
  const difficultyNames = ["PST", "PRS", "FTR", "BYD", "ETR"];
  const playedImages = new Map(playedData.map(song => [song.song, song.image]));
  return catalogData.songs.flatMap(song => song.difficulties.map((chart, index) => ({
    song: chart.name_en,
    difficulty: `${difficultyNames[index] || "FTR"} ${chart.rating / 10}`,
    constant: chart.rating / 10,
    score: "",
    playptt: "",
    link: `https://arcwiki.mcd.blue/${encodeURIComponent(chart.name_en.replace(/ /g, "_"))}`,
    image: playedImages.get(chart.name_en) || coverData[song.song_id] || "./assets/random_song_default.png"
  })));
}

function setImageFallback(image, songName) {
  image.alt = songName;
  image.onerror = () => {
    image.onerror = null;
    image.src = "./assets/random_song_default.png";
  };
}

function getDifficultyClass(difficulty) {
  const normalizedDifficulty = difficulty.toUpperCase();
  if (normalizedDifficulty.includes("FTR")) return "ftr";
  if (normalizedDifficulty.includes("ETR")) return "etr";
  return "byd";
}

function getSongOptions(songName) {
  return songCatalog.filter(song => song.song === songName);
}

function addRecordRow(record) {
  const tbody = document.querySelector("#playpttTable tbody");
  const row = document.createElement("tr");
  row.dataset.constant = record.constant;
  row.innerHTML = `
    <td><a href="${record.link}" target="_blank" rel="noopener"><img src="${record.image}" alt="${record.song}" style="width:150px;height:150px;"></a></td>
    <td>${record.song}</td>
    <td><span class="${getDifficultyClass(record.difficulty)}">${record.difficulty}</span></td>
    <td>${record.constant}</td>
    <td><input class="row-score" type="number" min="0" max="10002221" step="1" value="${record.score || ""}" aria-label="${record.song} 分數"></td>
    <td class="row-playptt">${record.playptt || "-"}</td>
    <td><button type="button" class="remove-record" aria-label="刪除 ${record.song}">刪除</button></td>
  `;
  tbody.appendChild(row);
  setImageFallback(row.querySelector("img"), record.song);

  row.querySelector(".row-score").addEventListener("input", () => updateRecordRow(row));
  row.querySelector(".remove-record").addEventListener("click", () => {
    if (!confirm(`確定要刪除「${record.song}」${record.difficulty} 這筆紀錄嗎？`)) return;
    row.remove();
    updateRecordSummary();
    showRecordToast(`已刪除「${record.song}」${record.difficulty}`, "success");
  });
}

function updateRecordRow(row) {
  const score = Number(row.querySelector(".row-score").value);
  const playptt = calculatePlayptt(score, Number(row.dataset.constant));
  row.querySelector(".row-playptt").textContent = playptt === null ? "-" : playptt;
  updateRecordSummary();
}

function updateRecordSummary() {
  const rows = Array.from(document.querySelectorAll("#playpttTable tbody tr"));
  document.getElementById("recordCount").textContent = rows.length;
  const values = rows.map(row => Number(row.querySelector(".row-playptt").textContent)).filter(Number.isFinite);
  document.getElementById("b30avg").textContent = values.length ? (values.reduce((sum, value) => sum + value, 0) / values.length).toFixed(6) : "-";
}


