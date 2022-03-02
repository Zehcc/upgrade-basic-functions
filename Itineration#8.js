/* Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. 
Puedes usar este array para probar tu función: */

let counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
    function repeatCounter(array) {
    let wordCounter = 0;
    let counteredWords = [];
    for (let i = 0; i < array.length; i++) {
        wordCounter=0;
        if(!counteredWords.includes(array[i])){
            for (let j = 0; j < array.length; j++) {
                if (array[i] === array[j]) {
                    wordCounter++;
                    counteredWords.push(array[i]);
                }   
            } console.log('La palabra '+ array[i]+' se repite '+wordCounter+' veces.');       
        } 
    } 
    }

  repeatCounter(counterWords);
