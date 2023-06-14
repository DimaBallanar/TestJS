// 1. На входе значение. Необходимо его обработать. Если это число и оно не является 
// четным, бросить исключение

const value=prompt();
try{
    if(!isNaN(value)&&Number(value)%2!=0) throw new TypeError('нечетное число');
    
}
catch(error){
    return error.message;
}

