// 5. У вас есть 3 инпута. Необходимо вывести в результат конкатенацию всех инпутов
function addText(){
const textinput1=document.querySelector(".input51");
const textinput2=document.querySelector(".input52");
const textinput3=document.querySelector(".input53");
const result=document.querySelector(".result5");
result.textContent=textinput1.value+textinput2.value+textinput3.value;

}

const button5=document.querySelector(".button5");
button5.addEventListener("click",addText);
