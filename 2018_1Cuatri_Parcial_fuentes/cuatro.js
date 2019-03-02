function mostrar()
{
 var numero1;
 var numero2;
 var suma;
 var resta;
 var mensaje;

 numero1=prompt("Ingrese un numero");
 numero1=parseInt(numero1);

 numero2=prompt("ingrese otro numero");
 numero2=parseInt(numero2);

	 if(numero1==numero2)
 	{
 		mensaje="los numeros son iguales y son " + numero1 + " y " + numero2;
 	}
 	else
 	{
 		if(numero1>numero2)
 		{
 			resta = numero1 - numero2;
 			mensaje="el primer numero es mayor y la resta es: " + resta;
 		}
 		else
 		{
 			suma = numero1 + numero2;
 			mensaje = "la suma es: " + suma;
 		}
 			if(suma>10)
 			{
 				mensaje = "la suma es " + suma + " y es mayor a 10";
 			}
 	}

 alert(mensaje);
}
