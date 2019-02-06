/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	/*primer comando de consola*/
	var impor3;
	var descuento;
	var sueldoFinal;

	impor3=importe.value;
	impor3=parseInt(impor3);
	descuento=impor3*25/100;
	sueldoFinal=impor3-descuento;
	resultado.value=sueldoFinal;

	
}
