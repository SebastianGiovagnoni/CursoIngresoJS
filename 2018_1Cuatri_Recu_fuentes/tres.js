function mostrar()
{
	var precio;
	var descuento;
	var precioFinal;

	precio=prompt("ingrese el precio");
	precio=parseFloat(precio);
	/*precio=parseInt(precio); cualquiera */

	descuento=prompt("ingrese el descuento");
	descuento=parseFloat(descuento);
	/*descuento=parseInt(descuento); cualquiera */

	precioFinal=precio-(precio*descuento/100);

	elPrecioFinal.value=precioFinal;
}
