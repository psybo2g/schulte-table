/*
 * Project Name: schulte-table
 * Copyright (C) 2026  psybo2g
 * * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */
function generateRandomNumbers(size) {
    const numbers = Array.from({ length: size }, (_, i) => i + 1);
    numbers.sort(() => Math.random() - 0.5);
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
