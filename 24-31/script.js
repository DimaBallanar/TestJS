// 24.Преобразовать строку ‘ Full StaCK DevELoper ’ в массив вида [‘full, ‘stack’,
//     ‘developer’]
// const text='Full StaCK DevELoper';
// console.log(text.split(' '));


// 25. Ввести строку. Проверить на isNaN. Если число, то ошибка ввода. Если это строка
// то узнать какая у нее длина. Привести к одному регистру, убрать лишние пробелы

const text=prompt().trim();
if(!isNaN(text)){
    alert('error')
}
else{
    alert(`у строки ${text.toLowerCase()} ${text.length} символов`);
}