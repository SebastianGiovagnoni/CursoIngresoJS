function mostrar()
{
	var contador=0;
	var acumulador=0;
	var sexo;
	var nota;
	var promedio;

	while(contador<5)
	{
		var nota;
		nota=prompt("");
		nota=parseInt(nota);
		acumulador+=nota;
		while(isNaN(nota)==true || nota<0 || nota>10)

		var sexo;
		sexo=prompt("");
		while(isNaN(sexo)==false || sexo!="f" && sexo!="m")
		{
			sexo=prompt("error");
		}
		alert(acumulador);
		
	}
}
