// Дана строка в виде числа. Необходимо просуммировать все элементы числа
// ‘123’ -> 6
// ‘111111111111’ -> 12

// const number = prompt();
// let result = 0;
// var array = number.split('');

// array.forEach(element => {
//     result += Number(element);
// });
// alert(result);


// 2. Дан статичный массив элементов. С помощью цикла for найдите произведение
// всех элементов массива
// const array=[1,2,3,4,5,6];
// let result=1;
// for(let i=0;i<array.length;i++)
// {
//     result*=array[i];
// }

// alert(result);


// 3. На вход подается число. Необходимо вывести все числа от 1 до введенного числа
// кратные 3. 

// const num=+prompt();
// for(let i=1;i<=num;i++)
// {
//     if(i%3==0){
//         console.log(i);
//     }
// }



// 4. Дан статичный массив с элементами и число вводимое с клавиатуры. С помощью
// цикла for и оператора if проверьте есть ли в массиве введенное число. Если есть,                 ***************допилить****************
// то остановите выполнение цикла. Если нет, то найдите среднее арифметическое
// всех чисел до введенного

// const array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// const num=+prompt();
// const arr_=[];
// for(let i=0;i<array.length;i++)
// {
//     if(num==array[i]){
//         console.log('есть попадание')
//         break;
//     }
//     else if(array[i]<num){
// arr_[i]=array[i];
//     }
//     else{ continue;}
// }
// const sum=arr_.reduce((acc,number)=>acc+number,0);
// console.log(sum/arr_.length);


// 5. Найдите максимальное значение в статичном массиве используя цикл. 

// const array = [1, 2, 3, 4, 5, 77, 5, 4, 34, 6, 2, 239, 5, 6, 234, 5, 6, 234, 25, 45, 525, 90];
// let max = array[0];
// for (let i = 1; i < array.length; i++) {
//     if (array[i] > max) {
//         max = array[i];
//     }
// }
// alert(max);

// 6. Выведите на экран случайное целое число от 1 до 100. (Math.random)
// alert(Math.ceil(Math.random()*100));


// 7. Преобразуйте первую букву строки в верхний регистр несколькими способами            *************пока 1 способ***************
// const text='asdfad';
// alert(`${text[0].toUpperCase()}${text.slice(1,text.length)}`);

// 8. Преобразуйте первую букву каждого слова строки в верхний регистр.
const text=prompt();
let array=text.split(' ');
let result='';
for(let i=0;i<array.length;i++){
    array[i]=(array[i])[0].toUpperCase()+array[i].slice(1,array[i].length);   
}
console.log(array.join(' '));




