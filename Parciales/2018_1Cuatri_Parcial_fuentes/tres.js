function mostrar()
{
	var precio;
	var descuento;
	var precioFinalConDescuento;

	precio=prompt("ingrese el precio");
	precio=parseInt(precio);

	descuento=prompt("ingrese el porcentaje de descuento");
	descuento=parseInt(descuento);

	precioFinalConDescuento=precio+(precio*descuento/100);

	elPrecioFinal.value=precioFinalConDescuento;








}
