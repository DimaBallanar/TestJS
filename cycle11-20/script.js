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

const array=[2,3,4,5];
let result=1;
for(let i=0;i<array.length;i++){
    result*=array[i];
}
alert(result);