/* Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función: */

let numbers = [12, 21, 38, 5, 45, 37, 6];
function average(array) {

    let totalSum = 0;
  for (let i =0; i<array.length; i++) {
      totalSum += array[i];
    
  } return totalSum / array.length-1;

}

console.log(average(numbers));

