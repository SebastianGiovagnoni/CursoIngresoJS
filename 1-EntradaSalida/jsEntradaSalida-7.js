/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var num1 = document.getElementById("numeroUno").value;
	var num2 = document.getElementById("numeroDos").value;
	var total = parseInt(num1) + parseInt(num2);
	alert("la suma es " + total)
}

function restar()
{
	var num1 = document.getElementById("numeroUno").value;
	var num2 = document.getElementById("numeroDos").value;
	var total1 = parseInt(num1) - parseInt(num2);
	alert("la suma es " + total1)

}

function multiplicar()
{ 
	var num1 = document.getElementById("numeroUno").value;
	var num2 = document.getElementById("numeroDos").value;
	var total2 = parseInt(num1) * parseInt(num2);
	alert("la suma es " + total2)

}

function dividir()
{
	var num1 = document.getElementById("numeroUno").value;
	var num2 = document.getElementById("numeroDos").value;
	var total3 = parseInt(num1) / parseInt(num2);
	alert("la suma es " + total3)

}

