function mostrar()
{
	var nota;
	var sexo;
	var contador=0;
	var acumuladorNotas=0;
	var notaMinima=10;
	var PromedioTotalDeNotas;
	var sexoNotaMinima;
	var cantidadDeVaronesNotaMayorIgual6=0;

	while(contador<5)
	{
		contador++;
		nota=prompt("ingrese la nota ");
		nota=parseInt(nota);

		while(isNaN(nota)==true || nota<0 || nota>10)
		{
			nota=prompt("Error, ingrese la nota correctamente");
		}

		sexo=prompt("ingrese el sexo");
		
		while(isNaN(sexo)==false || sexo!="f" && sexo!="m")
		{
			sexo=prompt("Error, ingrese el sexo correcto");
		}

		if (contador==0)
		{
			notaMinima=nota;
			sexoNotaMinima=sexo;
		}
		else
		{
			if (notaMinima>nota)
			{
				notaMinima=nota;
				sexoNotaMinima=sexo;
			}
		}

		if (nota>=6 && sexo=="m")
		{
			cantidadDeVaronesNotaMayorIgual6++;
		}

		acumuladorNotas+=nota;
		PromedioTotalDeNotas=acumuladorNotas/5;
	}
	alert("El promedio de notas total es: "+PromedioTotalDeNotas+" La nota mas baja y el sexo de esa persona son: "+notaMinima+" "+sexoNotaMinima+" La cantidad de varones que su nota fue mayor o igual a 6 es de: "+cantidadDeVaronesNotaMayorIgual6);
}