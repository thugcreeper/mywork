function getscore() {
    var inputScore = parseFloat(document.getElementById('score').value);
    var inputCons = parseFloat(document.getElementById('constant').value);
    var result = 0;
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
    else
        var result ="沒救了";
        var outputElement = document.getElementById('output');
        outputElement.style.fontSize = "20px";
        outputElement.style.fontFamily = "Helvetica,sans-serif"
        outputElement.innerHTML = "your playptt: " + result;
}

function getcons() {
    var inputCons = parseFloat(document.getElementById('constant').value);
}