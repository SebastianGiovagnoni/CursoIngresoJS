function mostrar()
{
	var elSistemaSolar;
	var mensaje;
	elSistemaSolar=prompt("ingrese un planeta del sistema solar");

	switch(elSistemaSolar)
	{
		case"mercurio":
		case"venus":
			mensaje="aca hace calor";
			break;
		case"latierra":
			mensaje="aca vivimos";
			break;
		case"marte":
		case"jupiter":
		case"saturno":
		case"urano":
		case"neptuno":
			mensaje="aca hace frio";
			break;
		default:
			mensaje="planeta invalido :'v por favor ingrese un planeta valido";
	}
	alert(mensaje);
}
