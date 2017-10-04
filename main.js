


function whatToDo(option){   //Primero preguntamos qué se quiere hacer
	do{
		var answer = prompt("Indique lo que desea realizar: \n\1)Cifrar \n\ 2)Descifrar");


		if(answer != ""){
			if (answer == 1 || answer == 2){
				var str = getPhrase();   				// Valor que obtenemos a partir de la función getPhrase

				if(answer == "1") {  // Si dice 1, accedemos a la función cipher
					return document.write(cipher(str));  

				} else if (answer == "2") {  			//Si dice 2, accedemos a la función decipher
					return document.write(decipher(str));
				} 
			}else {
				alert("Ingrese una opción válida");
			}
		}
	} while (answer == "" || (answer != "1" && answer != "2"));
}



function containsNum(str){						// Verificamos que no sea un número. Parte de la función getPhrase.
 	for(var i = 0; i <= str.length; i++){		// Iteramos cada elemento del string
 		if (isNaN(str[i]) == false){     		// Si tiene números, retorna el valor true, que ingresamos
 			return true;						// en la función getPhrase
 		}else{
 			return false;
 		}
	}
}

function getPhrase(){		// Funcion para solicitar la frase, y verificar que no posea números ni esté vacía.

	do{
		var phrase = prompt("Ingrese su frase");
	}while (phrase == "" || containsNum(phrase) == true || isNaN(phrase) == false);    //typeof(phrase) == "number");
	return phrase;			// El return de esta función lo guardaremos en la variable str de la función whatToDo, 
}							// valor que entrará a las funciones cipher o decipher.



function cipher(str) {
	var output = '';	// Declaramos una variable de salida en blanco.
	for (var i = 0; i < str.length; i ++) {// Iteramos dentro del string para ir modificando cada elemento.
		var char = str[i];	// Guardamos el caracter en una variable

	
		if (char.match(/[a-z]/i)) {// Verificamos si es una letra ¿?


			var code = str.charCodeAt(i);// Obtenemos el codigo en ASCII
			
			if ((code >= 65) && (code <= 90))// Rango de código letras mayúsculas
				char = String.fromCharCode(((code - 65 + 33) % 26) + 65); 	//Aplicamos la fórmula, y le agregamos
																			//el parámetro de desplazamiento
			
			else if ((code >= 97) && (code <= 122))// Rango de código de letras minúsculas
				char = String.fromCharCode(((code - 97 + 33) % 26) + 97);	//Aplicamos la fórmula, y le agregamos
																			//el parámetro de desplazamiento

		}
		output += char;	// A nuestra variable de salida le concatenamos el caracter transformado.
	}
	return output;// Retornamos el string.
}


function decipher(str){
var output = '';	// Creamos una variable de salida en blanco.
	for (var i = 0; i < str.length; i ++) {// Iteramos dentro del string para ir modificándolo
		var char = str[i];	// Guardamos el caracter en una variable

	
		if (char.match(/[a-z]/i)) {// Verificamos si es una letra ¿?


			var code = str.charCodeAt(i);// Obtenemos el código en ASCII
			
			if ((code >= 65) && (code <= 90))// Rango de código letras mayúsculas
				char = String.fromCharCode(((code - 65 - 33 +26) % 26) + 65); 	//Aplicamos la fórmula, y le agregamos 
																				//el parámetro de desplazamiento. Le sumamos 26 
																				//para evitar valores negativos.
			
			else if ((code >= 97) && (code <= 122))// Rango de código de letras minúsculas
				char = String.fromCharCode(((code - 97 - 33 +26) % 26) + 97);	//Aplicamos la fórmula, y le agregamos
																				//el parámetro de desplazamiento. Le sumamos 26
																				//para evitar valores negativos.

		}
		output += char;	// A nuestra variable de salida le concatenamos el caracter transformado.
	}
	return output;// Retornamos el string.
}

whatToDo()
