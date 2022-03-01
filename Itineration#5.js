
/* Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.
Puedes usar este array para probar tu función: */

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(array) {
  let totalSum=0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'string'){
            totalSum += array[i].length;
            console.log(totalSum)
        } else {
            totalSum += array[i];
            console.log(totalSum);
        }
    } return totalSum;
}

console.log(averageWord(mixedElements));