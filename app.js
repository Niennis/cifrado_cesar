$(document).ready(function() {
  $('#send').click(function() {
    var optOne = $('#optOne').text();
    var optTwo = $('#optTwo').text();
    var optSelected = $('#optSelected option:selected').text();
    var phrase = getPhrase();
    var ciphered = $('#ciphered');
    $('#ciphered').empty();

    if (optSelected === 'Cifrar' && phrase !== 0) {
      $('#ciphered').append('<p>' + cipher(phrase) + '</p>');
    } else {
      $('#ciphered').append('<p>' + decipher(phrase) + '</p>');
    }
  });
});

function getPhrase() { // Función para solicitar la frase, y verificar que no posea números ni esté vacía.
  // De no ser así, seguirá preguntando.
  var textToChange = $('#textToChange').val();    
  if (containsNum(textToChange) > 0 || textToChange === '') {
    alert('Ingrese frase válida. Solo letras permitidas.');
    return 0;
  } else {
    return textToChange;	// El return de esta función lo guardaremos en la variable str de la función, 
  } 	// valor que entrará a las funciones cipher o decipher.
};

function containsNum(str) {
  var charNumber = 0;
  for (var i = 0; i <= str.length; i++) { // Iteramos cada elemento del string
    if (isNaN(str[i]) === false) { // Si tiene números, retorna el valor true, que ingresamos
      charNumber++;						// en la función getPhrase
    } 
  } return charNumber;
}; 

function cipher(str) {
  var output = '';						// Declaramos una variable de salida en blanco.
  for (var i = 0; i < str.length; i ++) {	// Iteramos dentro del string para ir modificando cada elemento.
    var char = str[i];					// Guardamos el caracter en una variable
    if (char.match(/[a-z]/i)) {			// Si el caracter es una letra.
      var code = str.charCodeAt(i);	// Obtenemos el codigo en ASCII
      if ((code >= 65) && (code <= 90))								// Rango de código letras mayúsculas
        char = String.fromCharCode(((code - 65 + 33) % 26) + 65); 	// Aplicamos la fórmula, con el parámetro
      // de desplazamiento indicado (+33)
      else if ((code >= 97) && (code <= 122))							// Rango de código de letras minúsculas
        char = String.fromCharCode(((code - 97 + 33) % 26) + 97);	// Aplicamos la fórmula, con el parámetro 
      // de desplazamiento indicado (+33)
    }
    output += char;				// A nuestra variable de salida le concatenamos el caracter transformado.
  }
  return output;					// Retornamos el string.
};

function decipher(str) {
  var output = '';								// Creamos una variable de salida en blanco.
  for (var i = 0; i < str.length; i ++) {		// Iteramos dentro del string para ir modificándolo
    var char = str[i];						// Guardamos el caracter en una variable
    if (char.match(/[a-z]/i)) {				// Si el caracter es una letra.
      var code = str.charCodeAt(i);		// Obtenemos el código en ASCII			
      if ((code >= 65) && (code <= 90))									// Rango de código letras mayúsculas
        char = String.fromCharCode(((code - 65 - 33 + 104) % 26) + 65); 	// Aplicamos la fórmula, y le agregamos
      // el parámetro de desplazamiento. Le sumamos 26 
      // para evitar valores negativos.			
      else if ((code >= 97) && (code <= 122))								// Rango de código de letras minúsculas
        char = String.fromCharCode(((code - 97 - 33 + 104) % 26) + 97);	// Aplicamos la fórmula, y le agregamos
      // el parámetro de desplazamiento. Le sumamos 26
      // para evitar valores negativos.
    }
    output += char;				// A nuestra variable de salida le concatenamos el caracter transformado.
  }
  return output;					// Retornamos el string.
};
