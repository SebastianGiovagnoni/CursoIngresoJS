function mostrar()
{
	var sistemaSolar;
	var mensaje;

	sistemaSolar=prompt("ingrese un planeta");

	switch(sistemaSolar)
{
case "Mercurio":
case "Venus":
	mensaje=("aca hace mas calor");
	break;
case "la Tierra":
	mensaje=("aca vivimos");
	break;
case "Marte":
case "Jupiter":
case "Saturno":
case "Urano":
case "Neptuno":
	mensaje=("aca hace mas frio");
	break;
default:
	mensaje=("el planeta es invalido");
	
}

alert(mensaje);





}
