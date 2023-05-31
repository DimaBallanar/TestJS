// 24.Преобразовать строку ‘ Full StaCK DevELoper ’ в массив вида [‘full, ‘stack’,
//     ‘developer’]
// const text='Full StaCK DevELoper';
// console.log(text.split(' '));


// 25. Ввести строку. Проверить на isNaN. Если число, то ошибка ввода. Если это строка
// то узнать какая у нее длина. Привести к одному регистру, убрать лишние пробелы

// const text=prompt().trim();
// if(!isNaN(text)){
//     alert('error');
// }
// else{
//     alert(`у строки ${text.toLowerCase()} ${text.length} символов`);
// }


// 26. ‘HTML JavaScript PHP’ преобразовать в "HTML-JAVASCRIPT-PHP"
 
// const text='HTML JavaScript PHP';
// alert(text.replaceAll(' ','-'));

// 27. Ввести строку. Проверить является ли это число или строка. Если число, то
// ошибка ввода. Если это строка то первый символ поставить в верхний регистр.
// Убрать лишние пробелы

// const text=prompt().trim();
// if(!isNaN(text)){
//     alert('error');
// }
// else{
//     alert(`${text[0].toUpperCase() + text.slice(1)}`)
// }