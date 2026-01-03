const tapwater=document.getElementById("tapwater-value");
const rainwater=document.getElementById("rainwater-value")
const slider=document.getElementById("tempvalue");
const output=document.getElementById("temp");
const result=document.getElementById("result");
const submit=document.getElementById("submit");
let ph=0;
let tempeffect=0;
let temp=Number(slider.value);
output.innerHTML=slider.value;
slider.oninput=function(){
    output.innerHTML=this.value;
}
submit.onclick=function(){
if (tapwater.checked) {
    ph=7.2;
}
else if(rainwater.checked){
    ph=6.5;
}
if(temp<20){
    tempeffect=0.1;
}
else if(temp>30){
 tempeffect=-0.1;
}
else {
    tempeffect=0;
}

let finalph=(ph+tempeffect);
let displayph=finalph.toFixed(2);

if(finalph>=6.5 && finalph<=7.5){
result.textContent=displayph+" - The water is neutral";
result.style.color="green";
}
else if(finalph<6.5 ){
    result.textContent=displayph+" - The water is Acidic";
    result.style.color="red";
}
else if(finalph>7.5){
     result.textContent=displayph+" - The water is Alkaline";
     result.style.color="purple";
}
}
