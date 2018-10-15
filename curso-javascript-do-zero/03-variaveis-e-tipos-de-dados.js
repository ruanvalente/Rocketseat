/**
 * Em Javascript temos dois tipos de dados. Os tipos Primitivos e Objetos.
 * Um primitivo (valor primitivo, tipo de dados primitivo) é um dado que não é representado através de um Objeto e, por consequência, não possui métodos.
 * Os tipos de dados Primitivos são:
 * 
 * Number -> São números decimais ou com casas decimais.
 * String -> São conjutos de caracteres envolvidos por aspas duplas ou simples
 * Boolean -> São valores com verdadeiro ou falso
 * Null -> É o tipo de dado que significa que o valor é nulo. Ou seja sem valor.
 * Undefined -> É o tipo de dado que significa que ausencia de valor.
 * 
 * Ex:
 */ 

// Numbers 
var idade = 23;
var peso = 80.20;

// Podemos usar o operador typeof para descobrir o tipo da variável.

console.log( typeof idade ); 
console.log( typeof peso );

// Strings 

var nome = 'Ruan Valente';
var cidade = "Belém do pará";

console.log( typeof nome );
console.log( typeof cidade );

// Boolean 

var casado = false;
var solteiro = true;

console.log( typeof casado );
console.log( typeof solteiro );

// Null 

var nullo = null;

console.log( typeof nullo ); 
// O tipo null retorna um object, porém isso é um erro da especificação da linguagem

// Undefined 

var undefinedVar;

console.log( typeof undefinedVar );

// Para saber mais: https://developer.mozilla.org/pt-BR/docs/Glossario/Primitivo

/*

Objetos -> São todos outros ;)

Arrays -> Arrays são objetos semelhantes a listas que vêm com uma série de  métodos embutidos para realizar operações de travessia e mutação.

Functions ->  função é um "subprograma" que pode ser chamado por código externo (ou interno no caso de recursão) à função. Assim como o programa em si, uma função é composta por uma sequência de instruções chamada corpo da função. Valores podem ser passados para uma função e ela vai retornar um valor.

Objects -> Um objeto em JavaScript tem propriedades associadas a ele. Uma propriedade de um objeto pode ser explicada como uma variável que é ligada ao objeto. Propriedades de objetos são basicamente as mesmas que variáveis normais em JavaScript, exceto pelo fato de estarem ligadas a objetos. As propriedades de um objeto definem as características do objeto. Você acessa as propriedades de um objeto com uma simples notação de ponto:

*/
// Arrays

var notasAlunos = [ 10, 9.0, 8.0, 5.0 ];

console.log( typeof notasAlunos );

// Function 

function somar( a, b ) {
  return a + b;
}

console.log( typeof somar );

// Object

var pessoa = {
  nome: 'Ruan Valente',
  idade: 23,
  matriculado: true,
  endereco: {
    bairro: 'Rua tal, numero 12',
    cidade: 'Belém',
  }
};

console.log( typeof pessoa );