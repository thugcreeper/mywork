function fetchSongData() {//讀取json檔並填入表格
return fetch("./json/songPlayedData.json")
  .then(res => res.json())
  .then(data => {
    let tbody = document.querySelector("#playpttTable tbody");
    tbody.innerHTML = ""; // 清空舊資料
    data.forEach(song => {
      let row = document.createElement("tr");
      let difficultyClass = "";
      const difficulty = song.difficulty.toUpperCase();//統一轉大寫比對
        if (difficulty.includes("FTR")) {
            difficultyClass = "ftr";
        }
        else if (difficulty.includes("ETR")) {
            difficultyClass = "etr";
        }
        else{
            difficultyClass = "byd";
        }
      row.innerHTML = `
        <td><a href="${song.link}" target="_blank"><img src="${song.image}" alt="${song.song}" style="width:150px;height:150px;"></a></td>
        <td>${song.song}</td>
        <td><span class="${difficultyClass}">${song.difficulty}</span></td>
        <td>${song.constant}</td>
        <td>${song.score}</td>
        <td>${song.playptt}</td>
      `;
      tbody.appendChild(row);
    });
  });
}


