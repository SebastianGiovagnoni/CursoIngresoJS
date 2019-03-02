
function mostrar()
{
	var ancho;	
	var largo;
	var perimetro;

	ancho = prompt("ingrese el ancho");
	ancho = parseInt(ancho);
	largo = prompt("ingrese el largo");
	largo = parseInt(largo);

	perimetro = largo*2 + ancho*2;

	alert("el perimetro es: " + perimetro);
}
