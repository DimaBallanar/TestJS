// 11. На вход программе подается натуральное число n. Напишите программу, которая
// печатает звездный треугольник.
// 7 -> *******
// ******
// *****
// ****
// ***
// **

let number=+prompt();
const text='*';
for(number;1<=number;number--)
{
console.log(text.repeat(number));
console.log('\n');
}