// 32. На входе строка, необходимо убрать все лишние пробелы и привести каждый
// элемент к нижнему регистру. Повторить строку 3 раза. Добавить проверку на
// ввод только текстовых значений

// const text=prompt();
// if(!isNaN(text)){
//     alert('error');
// }
// else{
//     for(i=1;i<4;i++){
//     alert(text.toLowerCase().trim());
//     }
// }


// 33. Дана строка из 3 слов разделенных пробелом:
// • Найдите количество символов в этой строке.
// • Вырежите из нее 2 и 3 слова.
// • Найдите индекс 2 подстроки

// const text='rtyerre rw werwrc';
// console.log(text.length);
// let text1=text.split(' ')[0];
// console.log(text1);
// console.log(text.indexOf(text.split(' ')[1]));


// 34.Пользователь вводит дату в формате ‘х-х-х'. Замените все дефисы на '!'

// const text=prompt();
// alert(text.replaceAll('-','!'));

// 35. Пользователь вводит дату в формате 'xxxx-xx-xx'. Преобразуйте эту дату в формат
// 'xx.xx.xxxx.

// const text=prompt();
// alert(text.split('-').reverse().join('.'));

// 36. На вход подается url. Если он начинается с http, содержит хотя бы один “/” и
// заканчивается подстрокой .com или .ru, то вывести true, в противном случае false

// const url=prompt();
// alert(url.startsWith('http')&&url.includes('/')&&(url.endsWith('.com')||url.endsWith('.ru')));

// 37. Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в
// строку 'я+учу+javascript+!.

// const arr=['я', 'учу', 'javascript', '!'];
// console.log(arr.join('+'));

// 38.На вход программе подается строка, состоящая из имени и фамилии человека,
// разделенных одним пробелом. Напишите программу, которая проверяет, что имя
// и фамилия начинаются с заглавной буквы.
// Chris Alan => true
// chris alan => false

// const text=prompt();
// alert((text.split(' ')[0])[0]===(text.split(' ')[0])[0].toUpperCase()&&(text.split(' ')[1])[0]===(text.split(' ')[1])[0].toUpperCase());
// alert((text.split(' ')[0])[0].toUpperCase())


// 39. На вход программе подается строка текста. Напишите программу, которая
// определяет является ли строка хорошей. Текст хороший, если содержит
// подстроку «хорош» во всевозможных регистрах.
// я очень хороший текст => true

// const text=prompt();
// alert((text.toLowerCase()).includes('хорош'));


// 40.Дан массив. Вывести каждый отдельный элемент в консоль (for)

const arr= ['я', 'учу', 'javascript', '!'];
for(i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}