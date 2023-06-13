// Необходимо отобразить кнопку с надписью «Нажми на меня». По клику на нее 
// вывести alert с сообщением
// function click() {
//     alert('нажал');
// }

// const button = document.querySelector(".click");
// console.log(button);
// button.addEventListener("click", click);


// . Необходимо отобразить кнопку с надписью «Нажми на меня» и инпут со 
// значением по-умолчанию «+375(хх)ххх-хх-хх». По клику на кнопку заменить 
// значение инпута на «+375(29)111-11-11
// function inputValue(){
// const text=document.querySelector(".input");
// text.value="+375(29)111-11-11";
// }
// const button=document.querySelector(".click")
// button.addEventListener("click",inputValue);


// 3. Необходимо отобразить кнопку с надписью «Нажми на меня» и пустой инпут. По 
// клику на кнопку вызвать alert и отобразить сообщение из значения инпута
// function inputValue3(){
//     const text=document.querySelector("input");
//     alert(text.value);
// }
// const button=document.querySelector(".click");
// button.addEventListener("click",inputValue3);

// 4. Необходимо отобразить кнопку с надписью «Нажми на меня» и пустой инпут. По ******обработка ошибок и ввода*
// клику на кнопку вызвать alert и отобразить сообщение из значения инпута. 
// Проверки на ввод. Обработать ошибки

//  function inputValue4(){
//     const text=document.querySelector("input");
//     alert(text.value);
// }
// const button=document.querySelector(".click");
// button.addEventListener("click",inputValue4);



// 5. Необходимо отобразить числовой инпут и кнопку. После нажатия на кнопку 
// необходимо получить значение из инпута. Проверить, что это число > 0. Если 
// проверка true, то вывести в Результат ряд Фибоначчи. 
// function click() {
//     const number = document.querySelector(".number-fib");
//     const numberFib = number.value;
//     const result=rowFib(numberFib);
//     const newnum=document.querySelector(".result");
//     newnum.textContent=result.toString();
// }

// function rowFib(number) {
//     let array = [0, 1];
//     for (let i = 2; i < number; i++) {
//         array[i] = array[i - 2] + array[i - 1];
//     }
//     return array;
// }
// const button = document.querySelector(".click");
// button.addEventListener("click", click);

// 6. Необходимо отобразить кнопку и инпут со значением по умолчанию. По клику на 
// кнопку заменить значение инпута "???" -> "!!!"

// function changeSimb(){
//     const value1=document.querySelector("input");
//     value1.value="!!!";
// }
// const button=document.querySelector(".click");
// button.addEventListener("click", changeSimb);

// 7. Записать в результат удвоенное значение инпута. Добавить проверки
// function doubleTrouble(){
//     const inputvalue=document.querySelector("input");

//     if(isNaN(inputvalue.value)){
//         return inputvalue.value=0;
//     }
//     else{
//         return inputvalue.value=inputvalue.value*2;
//     }
// }
// const button=document.querySelector(".clicker");
// button.addEventListener("click",doubleTrouble);

//8. У вас есть кнопка. После нажатия поменять background.
// function changer(){
//     const button=document.querySelector("button");
//     button.style.background='red';
// }

// const button=document.querySelector("button");
// button.addEventListener("click",changer);
// 9.У вас есть кнопка. После каждого нажатия менять background

// const arr = ["#123", "#B33", "#C63", "#A23"];
// function getRandomInt() {
//     const but = document.querySelector("button");
//     but.style.background = arr[Math.floor(Math.random() * arr.length)];
// }

// const button = document.querySelector("button");
// button.addEventListener("click", getRandomInt);


// 10. После нажатия на кнопку «Разблокировать» мы можем вносить изменения в 
// инпут. После нажатия на заблокировать данное действие запрещается, тем 
// самым выключая возможность редактирования значения инпута
// function changerOn() {
//     const text = document.querySelector("input").disabled;
//     document.querySelector("input").disabled = false;
// }
// function changerOff() {
//     const text = document.querySelector("input").disabled;
//     document.querySelector("input").disabled = true;
// }
// const buttrue = document.querySelector(".unlocker");
// buttrue.addEventListener("click", changerOn);
// const butfalse = document.querySelector(".locker");
// butfalse.addEventListener("click", changerOff);



// 11. По нажатию на кнопку поменять местами значения 2 инпутов.
// function swap(){
//     let text1=document.querySelector(".class1");
//     let text2=document.querySelector(".class2");
//     [text1.value,text2.value]=[text2.value,text1.value];
// }
// const button=document.querySelector("button");
// button.addEventListener("click",swap);


// 12. Вывести в строчку все вводимые значения через инпут в виде массива. Добавить 
// проверку, что поле не пустое

// function addtext() {
//     let spantext = document.querySelector("div");
//     let text = document.createElement("span");
//     const inputText = document.querySelector("input");
//     text.textContent = inputText.value+' , ';
//     spantext.appendChild(text);
// }

// const button = document.querySelector("button");
// button.addEventListener("click", addtext);



const button=document.querySelector(".list");
button.addEventListener("click",(event)=>{alert(event.target.value)});
// function takeContext(){
//     const taker=
// }
// const list=document.querySelector(".list");
// list.addEventListener("click",)

