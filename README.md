# CIFRANDO


### I. Preguntamos qué desea hacer el usuario entre dos opciones.

+ Si la respuesta no corresponde a estas opciones, seguirá preguntando
+ Si la respuesta corresponde a una de las opciones:
	- Si es 1, cifrará
	- Si es 2, descifrará

###	II. Verificamos la frase ingresada.
+ Solicitamos una frase al usuario.
	- Si esta contiene números, o está vacía, seguirá preguntando que ingrese una frase válida.
	- Si la frase ingresada cumple con los requisitos, será modificada según la opción indicada.

### III. Cifrado
+ Declaramos una variable que contendrá nuestra frase cifrada.
	1. Iteramos en la frase ingresada para ir modificando cada elemento, y lo guardamos en una nueva variable (char).
	2. Por medio de una expresión regular, verificamos que sea una letra, y la guardamos en una nueva variable (code).
	3. Ya que las letras minúsculas y mayúsculas en ASCII se encuentran en rangos no continuos, realizamos un if para cada rango.
		1. Letras mayúsculas: mayor o igual a 65 y menor o igual a 90. 

			```((code - 65 + 33) % 26) + 65```

		2. Letras minúsculas: mayor o igual a 97 y menor o igual a 122.
		
			```((code - 97 + 33) % 26) + 97```
	4. Actualizamos el valor de la variable char.
	5. A nuestra variable output le concatenamos la variable actualizada.
	6. Entrega la frase cifrada.

### IV. Descifrado
+ Declaramos una variable que contendrá nuestra frase cifrada.
	1. Iteramos en la frase ingresada para ir modificando cada elemento, y lo guardamos en una nueva variable (```char```).
	2. Por medio de una expresión regular, verificamos que sea una letra, y la guardamos en una nueva variable (```code```).
	3. Ya que las letras minúsculas y mayúsculas en ASCII se encuentran en rangos no continuos, realizamos un if para cada rango.
		1. Letras mayúsculas: mayor o igual a 65 y menor o igual a 90. En este caso, queremos revertir el desplazamiento, por lo que restamos 33. Además, sumamos 26 en el interior de la fórmula,
		para evitar valores negativos. 

			```((code - 65 - 33 +26) % 26) + 65```

		2. Letras minúsculas: mayor o igual a 97 y menor o igual a 122. En este caso, queremos revertir el desplazamiento, por lo que restamos 33. También sumamos 26 en el interior de la fórmula.
		
			```((code - 97 - 33 +26) % 26) + 97```

	4. Actualizamos el valor de la variable char.
	5. A nuestra variable output le concatenamos la variable actualizada.
	6. Entrega la frase descifrada.


### V. Diagrama de flujo


![](/images/logo.png)
![Alt Text](https://orig00.deviantart.net/036e/f/2017/277/a/6/a6c434fc09221cfe43b35d05dc7b9bb6-dbpjbcv.jpg)
