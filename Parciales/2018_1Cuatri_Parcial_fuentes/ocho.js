function mostrar()
{
	var contador=0;
	var respuesta=true;
	var letra;
	var numero;
	var cantidadPares=0;
	var cantidadImpares=0;
	var cantidadCeros=0;
	var promedioPositivo=0;
	var sumaNegativos=0;
	var acumulador=0;
	var cantidadPositivos=0;
	var numeroMin=100;
	var numeroMax=-100;
	var letraMin;
	var letraMax;

	while(respuesta == true)
	{
		contador ++ ;
		letra = prompt("ingrese una letra");
		while(isNaN(letra) == false)
		{
			letra = prompt("error, ingrese una letra");
		}
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);
		while(isNaN(numero) == true || numero <- 100 || numero > 100)
		{
			numero = prompt("error, ingrese un numero");
			numero = parseInt(numero);
		}
		respuesta = confirm("desea seguir ingresando datos?");


		if(numero % 2 == 0)
		{
			cantidadPares ++;
		}
		else
		{
			cantidadImpares ++;
		}
		if(numero > 0)
		{
			acumulador=acumulador + numero;
			cantidadPositivos ++;
		}
		else
		{
			if(numero < 0)
			{
				sumaNegativos = sumaNegativos + numero;
			}
			else
			{
				cantidadCeros = cantidadCeros + 1;
			}
		}
		if(numeroMax < numero)
		{
			numeroMax = numero;
			letraMax = letra;
		}
		if(numeroMin > numero)
		{
			numeroMin = numero;
			letraMin = letra;
		}
		promedioPositivo = acumulador / cantidadPositivos;
	}
document.write("la cantidad de numeros pares son: " + cantidadPares + ", la cantidad de numeros impares son: " + cantidadImpares + ", la cantidad de ceros son: " + cantidadCeros + ", el promedio de todos los numeros positivos es: " + promedioPositivo + ", la suma de todos los numeros negativos es: " + sumaNegativos + ", el numero meximo y su letra es: " + letraMax + ", el numero minimo es: " + numeroMin + " y su letra es: " + letraMin)

}
