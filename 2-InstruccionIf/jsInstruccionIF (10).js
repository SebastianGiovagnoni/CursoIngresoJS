function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
		var numerorandom;
		numerorandom=Math.floor((Math.random() * 10) + 1);

		if (numerorandom<10 && numerorandom>8)
		{
			alert("excelente");
		}
		    else
			{
				if (numerorandom>3 || numerorandom<9)
				{
					alert("aprobado");
				}
					else
					{
							alert("la proxima sera");
					}
				}
		

}//FIN DE LA FUNCIÓN