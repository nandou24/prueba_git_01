var a = 5;
var b = 3;

suma = a+b;
console.log(suma);

resta = a-b;
console.log(resta);

multiplicar = a*b;
console.log(multiplicar);

dividir = a/b;
console.log(dividir)
alert("Hola mundo")


//Funciones

//1. Calcular el facorial de un número

function factorial(n){
    var x=1;
    for(let i=2; i<=n;i++){
        x = x*i;
    }
    return x;

}

console.log(factorial(4));

//2. Verificar si un númeor es primo

function primo(n){
    var respuesta = "es primo";
    for(let i=2;i<n;i++){
       if(n%i==0){
        respuesta="no es primo";
        return respuesta;
       }
    }
    return respuesta;    
}

console.log(primo(23));

//3. Contar palabras en una cadena