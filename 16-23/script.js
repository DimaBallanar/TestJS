// 16. Пользователь вводит строку. Необходимо сделать проверку, что это не число и
// вывести длину строки

// const text=prompt();
// if(!isNaN(text)){
//     alert('error');
// }
// else{
//     alert(`${text.length}`);
// }

// 17. Пользователь вводит строку. Вывести первый символ строки (индексы) 

// const text17=prompt();
// alert(`${text17[0]}`)

// 18. Пользователь вводит строку. Необходимо сделать проверку, что это не число и
// вывести текущую строку в большом регистре

// const text=prompt();
// if(!isNaN(text)){
//     alert('error');
// }
// else{
//     alert(`${text.toUpperCase()}`);
// }

// 19. Пользователь вводит строку. Необходимо повторить ее трижды 
// const text=prompt();

//   for(i=0;i<3;i++){  console.log(`${text.toUpperCase()}`);}

//   for(i=0;i<3;i++){  alert(`${text.toUpperCase()}`);}

// 20.Ввести строку. Проверить является ли это число или текст. Если число, то
// выяснить, четное или нет. Если это текст и равен “hschool”, вывести true. В
// противном случае false

// const text=prompt();
// if(!isNaN(text)){
//     alert(`${Number(text)%2==0?'четное':'нечетное'}`);
// }
// else{
//     alert(`${text=='hschool'}`);
// }

// 21. Пользователь вводит строку. Применить метод для разбития строки на массив.
// Добавить проверку на ввод только текста 

// const text=prompt();
// if(!isNaN(text)){
//     alert('error');
// }
// else{
//     console.log(text.split(''));
// }

// 22. Пользователь ввел строку. Убрать лишние пробелы, привести к маленькому
// регистру. Добавить проверку на ввод только текста. Необходимо преобразовать
// строку в строку вида
// х-х-х-х-х-х...
// hsChOoL -> h-s-c-h-o-o-l

//  const text=prompt();
// if(!isNaN(text)){
//     alert('error');
// }
// else{
//     console.log(((text.toLowerCase()).split('')).join('-'));
// }

// 23. Ввести строку. Проверить является ли это число или строка. Если число, то
// выяснить, четное или нет. Если это строка то преобразовать строку в массив, где
// каждый символ – один элемент массива
// ‘hschool’ => [‘h’, ‘s’, ‘c’, ‘h’, ‘o’, ‘o’, ‘l’]

// const text=prompt();
// if(!isNaN(text)){
//     alert(`${Number(text)%2==0?'четное':'нечетное'}`);
// }
// else{
//     console.log(text.split(''));
// }