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

function start(){
    // Get the modal
    let web_description = document.getElementsByClassName("modal")[0];
    let web_history = document.getElementsByClassName("modal")[1];
    // Get the button that opens the modal
    let about = document.getElementById("nav_about");
    let version = document.getElementById("web_version");

    // When the user clicks the button, open the modal 
    about.onclick = function() {//when click about show this
        web_description.style.display = "block";
    }
    version.onclick = function() {//when click web version show this
        web_history.style.display = "block";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == web_description) {
            web_description.style.display = "none";
        }
        if(event.target == web_history) {
            web_history.style.display = "none";
        }
    }
}

window.addEventListener( "load", start, false );
