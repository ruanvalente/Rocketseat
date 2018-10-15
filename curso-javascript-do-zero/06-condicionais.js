/* Condicionais -> Usamos os operadores condicionais quando queremos que determinada
condição se for verdadeira faça algo, caso ao contrario faça outra coisa. Para isso
usamos IF e ELSE, e também temos para multiplas condições usando o SWITCH case.
*/

function mostrarSexo( sexo ) {
  if ( sexo === 'M' ) {
    return 'Masculino';
  } else if ( sexo === 'F' ) {
    return 'Feminino';
  } else {
    return 'Outro';
  }
}
console.log( '==== Usando IF ELSE ====' );
console.log( mostrarSexo( 'F' ) );
console.log( mostrarSexo( 'M') );
console.log( mostrarSexo( 'A') );

/* 
Podemos usar outra forma de fazer a mesma coisa de forma ainda mais simples usando
o switch
*/

function mostrarSexo2( sexo ) {
  switch( sexo ) {
    case 'M':
      return 'Masculino';
    case 'F':
      return 'Feminino';
    default:
      return 'Outro';
  }
}

console.log( '==== Usando SWITCH CASE ====' );
console.log( mostrarSexo2( 'F') );
console.log( mostrarSexo2( 'M') );
console.log( mostrarSexo2( 'A') ); 