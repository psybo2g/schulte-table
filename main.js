function generateRandomNumbers(size) {
    const numbers = Array.from({ length: size }, (_, i) => i + 1);
    // Fisher-Yates shuffle
    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    return numbers;
}
var numbers=generateRandomNumbers(25);
for(var i=0;i<25;i++){
  document.getElementById(i).innerHTML=numbers[i];
}
var counterVariable=1;
var rightlyClicked=[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
function playerClicks(id){
  addedClicking();
  var valueOfId=document.getElementById(id).innerHTML;
  if(valueOfId==counterVariable){
    counterVariable++;
    document.getElementById(id).style.filter="hue-rotate(60deg)";
    rightlyClicked[id]=true;
  } else{
document.getElementById(id).style.filter="hue-rotate(-30deg)";
if(!rightlyClicked[id]){
setTimeout(function(){
  document.getElementById(id).style.filter="hue-rotate(0deg)";
},200);
}else{
setTimeout(function(){
  document.getElementById(id).style.filter="hue-rotate(60deg)";
},200);
}
  }
}
var time=1;
var justIgnoreThis;
setInterval(function(){if(counterVariable==26){clearInterval(justIgnoreThis);document.querySelector(".redo").style.display="flex";}});
function explode(){
  location.reload();
}
var flag=true;
function addedClicking(){
  if(flag){
justIgnoreThis=setInterval(function(){document.querySelector(".timer").innerHTML=time+"s";time++;},1000);
flag=false;
  }
}
