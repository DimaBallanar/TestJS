
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