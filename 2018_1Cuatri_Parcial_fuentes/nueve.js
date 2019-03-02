/*Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y
100 (validar), la temperatura de almacenamiento (entre -30 y 30) hasta que el usuario quiera e informar
al terminar el ingreso por document.write: a) La cantidad de temperaturas pares. b) La marca del
producto más pesado. c) La cantidad de productos que se conservan a menos de 0 grados. d) El promedio
del peso de todos los productos. f) El peso máximo y el mínimo.*/
function mostrar()
{
	var marcaDeProducto;
	var peso;
	var temperaturaDeAlmacenamiento;
	var temperaturasCero=0;
	var respuesta=true;
	var contadorTemperaturaPar=0;
	var productosCeroGrados=0;
	var promedio;
	var contador=0;
	var acumulador=0;
	var maxPeso;
	var minPeso;
	var marcaMaximoPeso;
	var marcaMinimoPeso;
	var banderaPesoMaximo=false;
	var banderaPesoMaximo=true;
	
	while(respuesta==true)
	{
		marcaDeProducto=prompt("ingrese marca");
		peso=prompt("ingrse peso");
		while(isNaN(peso)==true || peso<1 || peso>100)
		{
			peso=prompt("ingrse peso entre 1 y 100");
		}
		temperaturaDeAlmacenamiento=prompt("ingrese temperatura");
		while(isNaN(temperaturaDeAlmacenamiento)==true || temperaturaDeAlmacenamiento<-30 || temperaturaDeAlmacenamiento>30)
		acumulador=acumulador+peso;
		contador++;

		{
			temperaturaDeAlmacenamiento=prompt("ingrese temperatura entre -30 y 30");
		}
		respuesta=confirm("desea continuar?");


		if(temperaturaDeAlmacenamiento%2==0)
		{
			contadorTemperaturaPar++;

		}
		if(banderaPesoMaximo==false || peso<maxPeso)
		{
			marcaMaximoPeso=marca;
			maxPeso=peso;
			banderaPesoMaximo=true;
		}
		if(banderaPesoMinimo==true || peso>minPeso)
		{
			marcaMinimoPeso=marca;
			minPeso=peso;
			banderaPesoMinimo=false;
		}
		if(temperatura<-0)
		{
			temperaturasCero++;
		}
	}
		premedio=
		document.write(contadorTemperaturaPar + )
}