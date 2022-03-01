
/* Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array 
- comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false.
Puedes usar este array para probar tu función: */

let nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];

  function finderName (array, name) {
    let position = '';
      for (let i = 0; i < array.length; i++) {
        if(name == array[i]) {
            position = [i];
            return true +' y esta en la posición: '+position;
        }
      } return false;
  }
  console.log(finderName(nameFinder, 'Jessica'));