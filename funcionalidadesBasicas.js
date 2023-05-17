function sumar(a, b){
    return a + b;
}

function resta(a, b){
    return a - b;
}

function multiplicacion(a, b){
    return a * b;
}

function division(a, b){
    
    if (b==0){
        return 'no puede ser divisible por 0';
    }

    return a / b;
}


module.exports = {sumar, resta, multiplicacion, division};