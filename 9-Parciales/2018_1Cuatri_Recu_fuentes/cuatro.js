/*al ingresar 4 datos si la suma es mas de 100 se hace un descuento del 10%
 si la suma de mas de 50 un descuento del 5%
 y si la suma era menos de 50 se le agrega un 15%*/
function mostrar()

{
	var importe1;
	var importe2;
	var importe3;
	var importe4;
	var suma;
	var descuentodiez;	
	var descuentocinco;
	var aumento;
	var preciofinal;
	var mensaje;

	importe1=prompt("ingresar primer importe");
	importe1=parseInt(importe1);
	
	importe2=prompt("ingresar segundo importe");
	importe2=parseInt(importe2);
	
	importe3=prompt("ingresar tercer importe");
	importe3=parseInt(importe3);
	
	importe4=prompt("ingresar cuarto importe");
	importe4=parseInt(importe4);

	suma=importe1+importe2+importe3+importe4;

	if(suma>100)
	{
		descuentodiez=suma*10/100;
		preciofinal=suma-descuentodiez;
		mensaje=preciofinal;

	}
	else
	{
		if(suma>50)
		{
			descuentocinco=suma*5/100;
			preciofinal=suma-descuentocinco;	
			mensaje=preciofinal;
		}
			else
		{
			aumento=suma*15/100;
			preciofinal=suma+aumento;
			mensaje=preciofinal;
		}
	}
alert(mensaje);



}
