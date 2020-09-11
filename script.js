var booleana = true;
console.log(booleana);

booleana - !booleana;
console.log(booleana);

booleana = false;
console.log(booleana);

console.log(typeof(booleana));

var numero = Math.PI;
console.log(numero);
console.log(typeof(numero));

numero = -1;
console.log(numero);
console.log(typeof(numero));

var n1 = 10;
var n2 = 20;

console.log("soma: ", n1 + n2);
console.log("subtração: ", n1 - n2);
console.log("Multiplicação: ", n1 * n2);
console.log("divisão: ", n1 / n2);

console.log("potencia 2 elevado a 5", Math.pow(2, 5));
console.log("raiz quadrada de 25", Math.sqrt(25));

var pi = Math.PI;
var numeroRandomico = Math.random() * 100;
console.log("numero randomico (maximo 100): ", numeroRandomico);
console.log("numero randomico (maximo 100): ", Math.floor(numeroRandomico));
console.log("numero randomico (maximo 100): ", Math.round(numeroRandomico)); // retorna o valor inteiro mais proximo: ex 1.6 = 2;
console.log("numero randomico (maximo 100): ", Math.trunc(numeroRandomico)); // descarta os numeros dps da virgula;

var texto = 'texto';
console.log(texto);
console.log(typeof(texto));

console.log(texto.toUpperCase());
console.log(texto.toLowerCase());

texto = '       texto           ';
console.log(texto);
console.log(texto.trim());//tira os espaços;

texto = 'texto';
console.log(texto.startsWith('tex'));
console.log(texto.endsWith('to'));
console.log(texto.search('x'));
console.log(texto.includes('x'));// verifica se tem a letra na variavel;
console.log(texto.includes('a'));// retorna -1 pq nao encontrou na string a palavra a;
console.log(texto.indexOf('x'));// mesma função do search;
console.log(texto.charAt(0)); //retorna o numero da posição;
console.log(texto[0]);//formato de array;

console.log(texto.concat(' texto'));//concatena as palavras;
console.log(texto + ' ' + texto);//concatena as palavras;
console.log(texto);
