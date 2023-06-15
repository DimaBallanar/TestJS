// 2. Вы вводите числа в поле для ввода формируя массив.
// Необходимо отобразить массив, а также отдельно 
// все четные элементы этого массива и нечетные



function write2(arrayNumbers) {
    let result = [];
    for (let i = 0; i < arrayNumbers.length; i++) {
        if (Number(arrayNumbers[i]) % 2 == 0) {
            result.push(Number(arrayNumbers[i]));
        }
    }
    return result;
}
function write1(arrayNumbers) {
    let result = [];
    for (let i = 0; i < arrayNumbers.length; i++) {
        if (Number(arrayNumbers[i]) % 2 != 0) {
            result.push(Number(arrayNumbers[i]));
        }
    }
    return result;
}

const array = [];
const button2 = document.querySelector(".button2");
button2.addEventListener("click", function () {
    const inputText = document.querySelector(".input2");
    array.push(inputText.value);
    const result = document.querySelector(".result2");
    result.textContent = `массив четных ${write2(array)}, массив нечетных ${write1(array)}`;
    // console.log(`массив четных ${array1}, массив нечетных ${array2}`);


});