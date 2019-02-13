function mostrar()
{
  var precio;
  var formadepago;
  var recargo;
  var preciofinal;

  precio=elNombre.value;
  formadepago=laLocalidad.value;
  precio=parseInt(precio);
  recargo=parseInt(recargo);

  recargo=precio*10/100;
  preciofinal=precio+recargo;

  alert("el total es: " + preciofinal );

  


}
