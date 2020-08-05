//EJERCICIO 1//
//const age = prompt('¿Cual es tu edad?');
//if (Number(age) === age){
//    if (age >= 18) {
//        alert('Ya tienes edad para manejar')
//    } else {
//        alert('No puedes manejar porque eres muy pendejo')
//    }
//} else {
//    alert('Valor incorrecto')
//}

//EJERCICIO 2//
//const nota = prompt('Ingrese una nota por favor');
//if (nota>0 && nota<=10){
//    if (nota<3){
//        alert('Muy deficiente');
//    }
//    else if (nota<5){
//        alert('Insuficiente');
//    }
//    else if (nota<6){
//        alert('Suficiente');
//    }
//    else if (nota<7){
//        alert('Bien');
//    }
//    else if (nota<9){
//        alert('Notable');
//    }
//    else if (nota>=9){
//        alert('Sobresaliente');
//    }
//    else {
//        alert('Nota erronea'); 
//    }
//}
//else {
//    if(nota != undefined){
//        alert('Introduce un numero valido');
//    }
//}

//EJERCICIO 3
//let cadena = prompt('Ingrese texto')
//let resultado = "";
//do {
//    if (resultado === ""){
//        resultado = resultado + cadena;
//    } else {
//        resultado = resultado + "-" + cadena;
//    }     
//} while(confirm('Desea seguir?'));
//document.write(resultado);

//EJERCICIO 4
//let name = prompt('Cual es tu nombre?');
//let age = parseInt(prompt('Cual es tu edad?'));
//console.log(`Hola ${name}, tienes ${age} años y el año que viene tendras ${age + 1} años`)

//let figure = prompt('Introduce la figura geometrica de la que quieres calcular el area: triangulo, rectangulo o circulo')
//
//let base;
//let height;
//let radius; 
//
//switch(figure){
//    case 'triangulo':
//        base=prompt('Introduce la base del triangulo');
//        height=prompt('Introduce la altura del triangulo');
//        console.log(`El área del triangulo es ${(base*height)/2}`);
//        break;
//        case 'rectangulo':
//        base=prompt('Introduce la base del rectangulo');
//        height=prompt('Introduce la altura del rectangulo');
//        console.log(`El área del rectangulo es ${base*height}`);
//        break;
//        case 'circulo':
//        radius=prompt('Introduce el radio del circulo');
//        console.log(`El área del circulo es ${Math.PI * Math.pow(radius,2)}`);
//        break;
//        default: console.log('La figura geometrica no es valida');
//}

//let num = parseInt(prompt('Introduce un numero'));
//
//for (i=1; i<=num; i++){
//    if(i%2===0){
//        console.log(`${i} - es par`)
//    }else{
//        console.log(`${i} - es impar`)
//    }
//}

//let num = parseInt(prompt('Introduce un numero'));
//let divisores = 0;
//if(num === 1) console.log('El numero no es valido')
//else{
//    for(i=2 ; i<num ; i++){
//        if(num % i === 0){
//            console.log(`${num} / ${i} = ${num / i} No es primo`);
//            divisores++
//            break
//        }
//    }
//}
//if(divisores===0) console.log(`${num} es primo`)

//let num = parseInt(prompt('Introduce un numero'));
//let resultado = 1;
//for(let i = num; i>0 ; i--){
//    resultado *= i
//}
//console.log(`El factorial de ${num} es ${resultado}`);

//let suma = 0;
//let cont = 0;
//while(suma<=50){
//    suma += parseInt(prompt('Introduce un numero para añadir a la suma'));
//    cont++
//}
//console.log(`La suma total es de: ${suma}`);
//console.log(`El total de numeros introducidos es: ${cont}`)

const numbers = [3,43,21,20,56]
let pares = []
let impares = []

for(const number of numbers){
    let random = Math.round(Math.random() * 10 + 1);
    const result = number * random;
    console.log(`${number} * ${random} = ${result}`)
    if(result % 2 === 0) {
        pares.push(result)
    }else{
        impares.push(result)
    }
}

console.log(pares);
console.log(impares);