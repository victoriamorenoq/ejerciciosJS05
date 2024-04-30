




//  2 NÚMERO MÁS ALTO

/*
*Escribe un programa que solicite 10 números. Usando operadores lógicos y cualquier otra función/estructura de JavaScript que haya visto antes, determine y genere el mayor de esos números.*/



var numuno= prompt("ingresa el primer número");

var numdos= prompt("ingresa el segundo número");

var numtres= prompt("ingresa el tercer número");

var numcuatro= prompt("ingresa el cuarto número");

var numcinco= prompt("ingresa el quinto número");

var numseis= prompt("ingresa el sexto número");

var numsiete= prompt("ingresa el séptimo número");

var numocho= prompt("ingresa el octavo número");

var numnueve= prompt("ingresa el noveno número");

var numdiez= prompt("ingresa el décimo número");

document.write(numuno + "<br>" + numdos + "<br>" + numtres +"<br>" + numcuatro + "<br>" + numcinco + "<br>" + numseis + "<br>" + numsiete + "<br>" + numocho + "<br>" + numnueve + "<br>" + numdiez + "<br>");

console.log(numuno, numdos,  numtres, numcuatro, numcinco , numseis, numsiete, numocho , numnueve, numdiez);


let mayor =Math.max(numuno,numdos,numtres,numcuatro,numcinco,numseis,numsiete,numocho,numnueve,numdiez);

document.write("El número mayor es  : " + mayor);

console.log("El número mayor es :", mayor);

alert("El número mayor es : " + mayor);