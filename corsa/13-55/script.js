
// 13 задача*(*********************************)
// function showtext(){
//     // const show=document.querySelector("button");
// // alert('hi');
// console.log('hi');
// }
// const chep=document.querySelector("button");
// chep.addEventListener("mouseenter",showtext);
// chep.addEventListener("mouseleave",hidetext);


// 15. По двойному клику на кнопку изменить цвет кнопки
// document.querySelector("button").addEventListener("dblclick", function () {
//     const colors = ["#123", "#B33", "#C63", "#A23"];
//     this.style.background = colors[Math.floor(Math.random() * colors.length)];
// });


// 16. Вывести в строчку все вводимые значения через инпут в виде массива. Добавить 
// проверку, что поле не пустое. После каждого клика очищать значение input. Если 
// вводимое значение не проходит валидацию, то на месте массива вывести 
// сообщение об ошибке красным цветом
function addtext() {
    let spantext = document.querySelector("div");
    let text = document.createElement("span");
    const inputText = document.querySelector("input");
    if(inputText.value){
    text.textContent = inputText.value+' , ';
    spantext.appendChild(text);
    inputText.value="";
    }
    else{
        text.textContent = "ERROR";
        text.style.color='red';
        spantext.appendChild(text);
    }
}

const button = document.querySelector("button");
button.addEventListener("click", addtext);


//17 Добавьте картинку на страницу. При наведении на картинку мышкой необходимо 
// ее изменять на другую картинку. Но как только мышка снова отходит в сторону, то 
// возвращается первая картинка
// const lionold=document.querySelector("img");
// const lionnew= new Image();
// lionnew.src="./lion2.jpg";
// document.querySelector("img").onmouseenter=()=>{
//     document.replaceChild(lionnew,lionold);
// }

// document.querySelector("img").onmouseleave=()=>{
//     document.replaceChild(lionold,lionnew);
// }
//************************** */
// document.querySelector("img").addEventListener("mouseenter", function () {
//     this.src = "./lion2.jpg";
// });
// document.querySelector("img").addEventListener("mouseleave", function () {
//     this.src = "./lion1.jpg";
// });