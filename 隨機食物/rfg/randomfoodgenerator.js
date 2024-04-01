var foodlist=[];
function getfood(){ 
    var food=document.getElementById('foodinput').value.trim();
    if(food !== ""){
        foodlist.push(food);
        document.getElementById('addsuccess').innerHTML = "Added successfully";
        printfoodbar();
    }
    else{
        document.getElementById('addsuccess').innerHTML = "enter a food!!!";
    }
}
function printfoodbar(){
    var foodbar = document.getElementById('foodbar');
    foodbar.innerHTML = "foodbar"+"<br>"; 
    for(var i=0;i<foodlist.length;i++){
        foodbar.innerHTML += foodlist[i]+"<br>";
    }
}
function givefood(){
    let x = Math.floor((Math.random() * foodlist.length));//get number between 0-length
    document.getElementById('final').innerHTML = foodlist[x];
}
