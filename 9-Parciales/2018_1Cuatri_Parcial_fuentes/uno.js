
function mostrar()
{
  var nombre1;
  var nombre2;
  var edad1;
  var edad2;
  var sumaedades;
  

  nombre1=prompt("usted es");
  nombre2=prompt("y usted es");
  edad1=prompt("su edad es");
  edad2=prompt("y su edad es");
  edad1=parseInt(edad1);
  edad2=parseInt(edad2);
  sumaedades=edad1+edad2;

  alert("ustedes son "+ nombre1 + "y " + nombre2 + ", sus edades son " + edad1 + "y " + edad2 + " y la suma de sus edades es " + sumaedades);


 }
