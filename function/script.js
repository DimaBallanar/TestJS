// 1. Пользователь вводит имя фамилию. Необходимо создать функцию
// возвращающую строку вида «Привет, {имя} {фамилия}»
// {
// const hello =function(name,lastname) {
//     alert(`hello ${name}  ${lastname}`)
// }
// hello('dima','balla')
// }
// 2. Напишите функцию, которая принимает строку состоящую из нескольких слов.
// Каждое нечетное слово строки функция должна преобразовать в нижний
// регистр, все четные слова, соответственно, в верхний
// happy new year -> happy NEW year
// {
//     function convert (text){
//         let array=text.split(' ');
//         let result=array.map(function(el,index){
//             return(index)%2==0?array[index].toUpperCase()       });
//         // result=array.map();
//         for(i=0;i<array.length;i++){
//             if(i%2==0)
//             {

//             }
//         }
//     }
// }
// 3. Напишите функцию, которая принимает строку в маленьком регистре и
// возаращает строку, где каждое слово начинается с большого регистра
// hschool company -> Hschool Company
// {
//     function textConvert(text){
//         let array=text.split(' ');
//         let newText='';
//         for(i=0;i<array.length;i++){
//             newText+=(array[i])[0].toUpperCase()+array[i].slice(1,array[i].length)+' ';
//         }
//         return newText;
//     }
// const registr= prompt()
// {
//     alert(textConvert(registr));
// }
// }
// 4. Напишите функцию, которая принимает статичный массив строк. Необходимо
// отфильтровать значения и оставить только те, где длина строк до 2 символов.
// [“by”, “belarus”, “de”, “ru”, “germany”] -> [“by”, “de”, “ru”]
// {
//     function selectString(text){
//         let newArray='';
//         text.forEach(element => {
//           if(element.length<=2){
//             newArray+=element+' ';
//           }  
//         });
//         return (newArray.trim()).split(' ');
//     }
//     const array=['by','belarus','de','ru','germany'];
//     console.log(selectString(array));
// }

// 5. На входе массив. Необходимо создать функцию проверки на то что в массиве
// только числа. Функция возвращает true, если в массиве только числа и false в
// противном случае
{
    function checkNum(array) {
        // let checker=true;
        for (i = 0; i < array.length; i++) {
            if (isNaN(array[i])) {
                return false;
            }
        }
        // array.forEach(element => {
        //     if (isNaN(element)) {
        //         checker= false;
        //     }            
        // });
        return true;
    }
    const mass = [1, 2, 3, 5];
    alert(checkNum(mass));
}

// 6. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 2 функции. Первая для формирования
// массива. Вторая для нахождения количества элементов массива

// {
//     function arracreation(num){
//         let array=[];
//         for(i=0;i<num;i++){
//             array[i]=prompt(`введите ${i} число`);
//         }
//         return array;
//     }
//     function arrayCount(array){
//         return array.length;
//     }
//     const number=+prompt(`введите количество элементов в массиве`);
//     alert(arracreation(number));
//     alert(arrayCount(arracreation(number)));
// }