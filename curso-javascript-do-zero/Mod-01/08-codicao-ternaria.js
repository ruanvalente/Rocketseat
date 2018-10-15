/*
 Usamos a codição ternaria quando precisamos fazer apenas uma verificação 
usando if e else. Nesta forma trocamos o if por ? e else por :. Desta forma 
o else sempre é necessário ser passado.
*/

var sexo = 'M';
var retorno = ( sexo === 'M' ? 'Masculino' : 'Feminino' );

console.log( retorno );