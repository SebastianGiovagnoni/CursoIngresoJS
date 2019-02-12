function mostrar()
{
//tomo la edad  
var edad1;
  edad1=edad.value;
  edad1=parseInt(edad1);

  
  if(edad1<18 && edad1>12)
  {
  	alert("es adolecente");
  }
  
  if(edad1>17)
  {
  	alert("es mayor");

  } 

  if(edad1<13)
  {
  	alert("es niño");
  }

}//FIN DE LA FUNCIÓN