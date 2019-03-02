function mostrar()
{
	var formadepago;
	var pago;
	var descuento;
	

	formadepago = document.getElementById('FormIngreso').value
	formadepago = prompt("formadepago");
	pago = prompt("ingrese el precio");
	pago = parseInt(pago);		

	switch(formadepago)
	{
	case "visa":
	case "mercadopago":
	descuentodiezVisa=pago*10/100;
	pagofinal=pago-descuentodiezVisa;
	alert(pagofinal);
	break;

	

}



}
