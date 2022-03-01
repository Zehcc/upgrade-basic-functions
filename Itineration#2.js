
/* Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función: */

let avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(array) {
    let word = '';
    for (let i = 0; i<array.length; i++) {
        if (array[i].length>word.length) {
            word = array[i];
        }
    }  return word;
}
    
console.log (findLongestWord(avengers));