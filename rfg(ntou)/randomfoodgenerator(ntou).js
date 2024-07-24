var foodlist=[];
function getselectedrests() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(function(checkbox) {//function(checkbox) { ... } 是一個匿名函數，作為foreach的參數
        var restname = checkbox.parentElement.previousElementSibling.textContent;//checkbox的父元素是"td"，然後抓取td前一個兄弟元素(td)的文本內容(早點來)，然後存放到變數restname
        foodlist.push(restname);
    });
}
function givefood(){
    getselectedrests();
    var randomrest = Math.floor(Math.random() * foodlist.length);
    if(foodlist.length>0){
        document.getElementById('final').innerHTML = foodlist[randomrest];
    }
    else{
        document.getElementById('final').innerHTML = "no restaurant selected";
    }
}