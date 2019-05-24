/* Funções -> Funções são bloco de códigos que podem ser reutilizados em outros
lugares no código.
*/

function soma( a, b ) {
  var resultado = a + b;
  return resultado;
  
  // Variaiveis definidas dentro do escopo da função não são visiveis fora dela.
}

var resultado = soma( 2, 3 );
console.log( resultado );