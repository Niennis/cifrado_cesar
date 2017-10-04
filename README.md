# CIFRANDO


### 1. Preguntamos qué desea hacer el usuario entre dos opciones.

+ Si la respuesta no corresponde a estas opciones, seguirá preguntando
+ Si la respuesta corresponde a una de las opciones:
	- Si es 1, cifrará
	- Si es 2, descifrará

###	2. Verificamos la frase ingresada.
+ Solicitamos una frase al usuario.
	- Si esta contiene números, o está vacía, seguirá preguntando que ingrese una frase válida.
	- Si la frase ingresada cumple con los requisitos, será modificada según la opción indicada.

### 3. Cifrado
+ 





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
