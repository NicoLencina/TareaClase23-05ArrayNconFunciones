let dimensionArreglo: number = 0;
let numerosIngresado: number[] = new Array(dimensionArreglo);
let arrayInvertido: number[] = new Array(dimensionArreglo);

//creo una funcion para guardar un array de N dimension.
function guardaArray(numerosIngresado: number[], dimensionArreglo: number) {
  for (let x = 0; x < dimensionArreglo; x++) {
    numerosIngresado[x] = Number(
      prompt("Ingrese el numero que quiere poner en el lugar " + x + ": ")
    );
  }
}
//invierto
//tambien podia haberlos guardado de atras para adelante pero como no especifica si quiere que los guarde normal o los guarde ivertido los invierto
function invertir(arreglo: number[], dimensionArreglo: number) {
  let m = 0;
  for (let x = dimensionArreglo - 1; x > -1; x--) {
    //arregl -1 ya que si agrego 6 va del 0,5 y x-1 porque salteo el valor 0
    arrayInvertido[m] = arreglo[x];
    m += 1;
  }
}
//pido los datos
dimensionArreglo = Number(prompt("Ingrese la dimensión del arreglo:"));
//llamo a las funciones y le mando los parametros
guardaArray(numerosIngresado, dimensionArreglo);
invertir(numerosIngresado, dimensionArreglo);
//imprimo resultados por consola
console.log("Usted Ingreso: " + numerosIngresado);
console.log("Array Invertido: " + arrayInvertido);
