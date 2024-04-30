


// 5 FACTORIAL

/**
 * Escriba un programa que solicite un número entero n. Donde 1 <= n. Resuelve esto usando recursividad.
 */


function factorialize(num) 
{
    if (num === 0 || num ===1)
    console.log(1);
for (var i=num - 1; i>= 1; i--){
num *= i;
}
    console.log(num);
}

factorialize(5);
