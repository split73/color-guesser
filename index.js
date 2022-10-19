const characters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let result = "#";
let compareVar = result;

function changeColor(){
for (let i = 0; i < 6; i++){
    result += characters[Math.floor(Math.random() * characters.length)];
 
    console.log(result)
}

document.getElementById("changeColor").style.backgroundColor = document.getElementById("colorBox").style.backgroundColor;
document.body.style.backgroundColor = "white";
document.getElementById("colorBox").style.backgroundColor = result;
document.getElementById('inputField').value = ""
 compareVar = result;
result = "#"
}

function compare (){
    if (compareVar === document.getElementById('inputField').value){
        document.body.style.backgroundColor = compareVar;
        document.getElementById('inputField').value = ""
    } else {
        document.body.style.backgroundColor = document.getElementById('inputField').value;
    }

}