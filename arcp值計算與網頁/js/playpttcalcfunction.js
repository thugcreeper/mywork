function getscore() {
    scoreAndConstantAlert();
    let inputScore = parseFloat(document.getElementById('score').value);
    let inputCons = parseFloat(document.getElementById('constant').value);
    let result = 0;
    if (inputScore >= 10000000) {
        result = (inputCons + 2).toFixed(6);
    }
    else if(inputScore < 10000000 && inputScore >= 9800000){
        result = (inputCons + 1 + ((inputScore - 9800000) / 200000)).toFixed(6);
    }
    

    else if(inputScore < 9800000 && inputScore>= 9500000) {
        result = (inputCons + (inputScore - 9500000) / 300000).toFixed(6);
    }
    else if(inputScore < 9500000 && inputScore>= 9200000) {
        result = (inputCons - (9500000 - inputScore) / 300000).toFixed(6);
    }
    else{
        let result ="沒救了";
    }  
        let outputElement = document.getElementById('output');
        outputElement.style.fontSize = "20px";
        outputElement.style.fontFamily = "Helvetica,sans-serif"
        outputElement.innerHTML = "your playptt: " + result;
    if (!isNaN(result)) updateProgressBar(result,inputScore);
}

function scoreAndConstantAlert(){
    let scoreInput = document.getElementById('score'); //get elementbyid only get html element
    let constantInput = document.getElementById('constant');

    let score = parseFloat(scoreInput.value);//if it's int or float,add value and parse it
    let constant = parseFloat(constantInput.value);

    if(score>10002221){
        window.alert("you can't input score higher than 10002221");
        document.getElementById('score').innerHTML=10002221;
        scoreInput.value=10002221;
    }
    else if(score<0){
        window.alert("you can't input score lower than 0");
        scoreInput.value=0;
    }

    if(constant>12.0){
        window.alert("you can't input constant higher than 12.0");
        constantInput.value=12.0;
    }
    else if(constant<1){
        window.alert("you can't input constant lower than 1");
        constantInput.value=1.0;
    }
}

function updateProgressBar(ptt,inputScore) {
    let bar = document.getElementById("output");
    let percentage = ((ptt - 8) / 4) * 100; // 讓 PTT 介於 8~12 的數值對應到 0%~100%
    percentage = Math.max(0, Math.min(100, percentage)); // 確保不超過範圍
    bar.style.width = percentage + "%";
    if(inputScore<9800000){
        bar.style.backgroundColor="rgb(176,141,87)";
    }
    else if(inputScore>=9800000 && inputScore<9900000){
        bar.style.backgroundColor="rgb(192,192,192)";
    }

    else if(inputScore>=9900000 && inputScore<10000000){
        bar.style.backgroundColor="gold";
    }
    else{
        bar.style.backgroundColor="rgb(166, 97, 164)";
    }
    bar.innerText = "your playptt:" + ptt;
}

function calculateB30Avg(){//計算B30平均
    let sum = 0;
    let table = document.getElementById("playpttTable"); // 或指定你的 table id
    if (!table) {
        console.error("Table not found!");
        return;
    }
    let rows=table.querySelectorAll("tbody tr");
    for(let i=0;i<30;i++){ 
        let cells = rows[i].querySelectorAll("td");    // 抓出所有 td
        let value = cells[5].innerText; // 索引從0開始，第6個是索引5
        sum += parseFloat(value);
    }
    document.getElementById("b30avg").innerText = (sum / 30).toFixed(6);
}

let isAscending = true; // 初始為升序
function sortTable(columnIndex,headerElement) {
    // Get the table rows and remove the header.
    let table = headerElement.closest("table");
    let rows = Array.from(table.rows).slice(1);//slice(1)從row1開始複製到最後一個row
    let headers = table.rows[0].cells;//song constant score playptt...
    if (!table) {
        console.error("Table not found!");
        return;
    }
    // Generate the sorted rows.
    let sortedRows = rows.sort((a, b) => {
        let cellA = a.cells[columnIndex].innerText;
        let cellB = b.cells[columnIndex].innerText; 
        if (isAscending){  
            return cellA.localeCompare(cellB);
        } 
        else{
            return cellB.localeCompare(cellA);
        }
    });
    for (let i = 0; i < headers.length; i++) {
        headers[i].querySelector(".arrow").innerText = "";
    }

    // 設置本欄位箭頭
    headers[columnIndex].querySelector(".arrow").innerText = isAscending ? "▲" : "▼";
    isAscending = !isAscending;// Toggle the sorting order.
    // Update the table data.
    sortedRows.forEach(row => table.tBodies[0].appendChild(row));
}

function searchFunction() {
    const keyword = document.getElementById("searchInput").value.trim();
    const type = document.getElementById("searchType").value;
    const modal = document.getElementById("searchModal");
    const resultBox = document.getElementById("searchResult");
    let table = document.getElementById("playpttTable");

    console.log("Searching for:", keyword, "in type:", type);
    if (keyword == "") {
        alert("Please enter a search keyword!!!");
        return;
    }
    let result = "";
    let match = "";
    for (let i = 1; i <= 30; i++) {
        let firstRow = table.querySelectorAll("tr")[i]; 
        let cells = firstRow.querySelectorAll("td"); 
        let songText = "";
        //避免抓歌曲名時會摻雜span內的文字
        for (let node of cells[1].childNodes) {//childnode檢查底下所有<span> <i>...
            if (node.nodeType === Node.TEXT_NODE) {
                songText += node.textContent.trim(); 
                break;
                }
            }
        switch (type) {
            case "song":
                match = songText.toLowerCase().includes(keyword.toLowerCase());
                break;
            case "difficulty":
                match = cells[2].innerText.toLowerCase().includes(keyword.toLowerCase());
                break;
            case "constant":
                match = cells[3].innerText.includes(keyword);
                break;
        }
        if(match) {
            let imgHTML = cells[0].querySelector("img")?.outerHTML || "";
            let difficulty = cells[2].innerText;// 取得難度標籤
            let difficultyHTML = `<span class="difficulty-tag">${difficulty}</span>`;
            result += `
            <tr>
                <td>${imgHTML}</td>
                <td> ${songText}</td>
                <td>${difficultyHTML}</td>
                <td>${cells[3].innerText}</td>
                <td>${cells[4].innerText}</td>
                <td>${cells[5].innerText}</td>
            </tr>`;
        }
    }
    if (!result) {
        result = `沒有找到符合 <b>${keyword}</b> 的結果。`;
    }
    else {
        result = `以 <b>${type}</b> 搜尋：「${keyword}」 的結果如下：<br><br>
        <table id="resultTable">
            <tr style="font-size: 20px;">
            <th style ="width:150px;"><span class="header-text">Photo</span> <span class="arrow"></span></th>
            <th style ="width:300px;"><span class="header-text">Song</span> <span class="arrow"></span></th>
            <th style ="width:150px;"onclick="sortTable(2,this)"><span class="header-text">Difficulty</span> <span class="arrow"></span></th>
            <th style ="width:150px;"onclick="sortTable(3,this)"><span class="header-text">Constant</span> <span class="arrow"></span></th>
            <th style ="width:160px;"onclick="sortTable(4,this)"><span class="header-text">Score</span> <span class="arrow"></span></th>
            <th style ="width:150px;"onclick="sortTable(5,this)"><span class="header-text">PlayPTT</span> <span class="arrow"></span></th>
            </tr>
            ${result}
            </table>`;
    }
    resultBox.innerHTML = result;
    modal.style.display = "block";
}

function openModal(id) {
    document.getElementById(id).style.display = "block";
}
function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

window.onload = function() {//網頁載入後自動執行的部分
    fetchSongData().then(() => calculateB30Avg());//確保fetch完資料後才計算B30
}

function start(){
    // Get the modal
    let web_description = document.getElementById("web_description_modal");
    let web_history = document.getElementById("web_history_modal");
    // Get the button that opens the modal
    let about = document.getElementById("nav_about");
    let version = document.getElementById("web_version");
    let searchResult = document.getElementById("searchModal");
    // When the user clicks the button, open the modal 
    about.onclick = () => openModal("web_description_modal");
    version.onclick = () => openModal("web_history_modal");

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener("click", function(event) {
        if (event.target === web_description) closeModal("web_description_modal");
        if (event.target === web_history) closeModal("web_history_modal");
        if (event.target === searchResult) closeModal("searchModal");
    });
}

window.addEventListener( "load", start, false );
