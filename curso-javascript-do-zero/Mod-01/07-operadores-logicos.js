/* Em Javascript temos os operadores lógicos que retornam um boleano 
Temos: AND -> &&
       OR -> ||
       NOT -> ! 
*/

var sexo = 'M';
var masculino;

if( sexo === 'M' && masculino === null ) {
  console.log( true );
} else {
  console.log( false );
}

// if( sexo === 'F' || masculino === undefined ) {
//   console.log( true );
// } else {
//   console.log( false );
// }

// if( !sexo === 'F' && masculino === false ) {
//   console.log( true );
// } else {
//   console.log( false );
// }