// 11. На вход программе подается натуральное число n. Напишите программу, которая
// печатает звездный треугольник.
// 7 -> *******
// ******
// *****
// ****
// ***
// **

// let number=+prompt();
// const text='*';
// for(number;1<=number;number--)
// {
// console.log(text.repeat(number));
// console.log('\n');
// }

// 12. Найдите минимальное значение в массиве используя цикл
// const array=[1,2,3,4,5,6,7,2,34,2542,3,12,312,4412,21,2131,31,414,12211,3,-88];
// let i=0;
// array.forEach(element => {
//     if(i>=element){i=element}    
// });

// alert(i);

// 13. Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение
// элементов этого массива

// const array=[2,3,4,5];
// let result=1;
// for(let i=0;i<array.length;i++){
//     result*=array[i];
// }
// alert(result);


// 14. На вход число. Необходимо вывести все числа от 1 до введенного числа. Добавить
// проверку вводимого значения, если это текст –> сообщение об ошибке

// const number = prompt();
// if (isNaN(number)) {
//     alert('error');
// }
// else{
//     for(let i=0;i<=number;i++){
//         console.log(`${i}\n`);
//     }
// }


// 15. Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if
// проверьте есть ли в массиве элемент со значением, равным 4. Если есть -
// выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо

// const arry=[1,2,5,9,4,13,4,10];
// for(let i=0;i<arry.length;i++){
//     if(arry[i]==4){
//         alert('Есть!');
//         break;
//     }
// }


// 16. Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if
// проверьте есть ли в массиве элемент со значением, равным 4. Посчитать
// количество повторений числа 4 в массиве

// const array = [1, 2, 5, 9, 4, 13, 4, 10];
// let result = 0;
// for (let i = 0; i < array.length; i++) {
//     if (array[i] == 4) {
//         result++;
//         break;
//     }
// }
// alert(result);

// 17. Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку
// '-1-2-3-4-5-6-7-8-9-‘
const array=[1, 2, 3, 4, 5, 6, 7, 8, 9];
let text='';
for(let i=0;i<array.length;i++){
    text+='-'+array[i];
}
text+='-';
alert(text);