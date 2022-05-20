// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:

  
  return (nombre.charAt(0).toUpperCase() + nombre.slice(1));
// a nombre le tomamos el primer caracter y lo hacemos mayuscula y concatenamos con el resto del nombre tomado
// con slice desde el segundo caracter index(1) hasta el final
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:

  return cb();


}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:

  return cb(n1, n2);

}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
 
  let acumulador = numeros.reduce(function(acumulador, numero){
  return acumulador+=numero;
  }, 0)
  cb (acumulador)
  /*metodo reduce me va sacando la info de cada uno de los elementos del array y va a ir acumulando uno a uno
  hasta llegar al ultimo que le mande "numeros.reduce" luego en la function le pasamos parametros acumulador
  que es donde guarda lo que queramos de la posicion(es) que se van pasando del array y numero seria una variable
  de la info que viene en cada posicion al final el 0 indica l valor en el que inicia el acumulador aunque por
  defecto es 0*/

}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:

  array.forEach(element => {
    cb(element);
  });

  // simple recorremos el array psando cada uno de sus elementos al callback cb

}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:

  var nuevoArray = array.map(function(element){
    return cb(element)
  })
  return nuevoArray;
  // generamos unnuevo array con map donde recorremos el array original y pasamos cada uno de sus elementos
  // a cb y los retornamos uno a uno para asi formar el nuevo array
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  var nuevoArray = array.filter(function (element){
    return element[0]=== "a";
  })
  return nuevoArray;
  /*creamos un nuevo array  luego hacemos un filter al original pasamos los elementos uno a uno para comparar
  a cada elemento le tomamos el valor en la posicion 0 del string y comparamos si es "a"retornamos y guardamos
  esto hace que el array que creamos pueda ser mas pequeño que el original*/
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
