/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var num1;
    var num2;
    var suma;

    num1=numeroUno.value;
    num1=parseInt(num1);
    num2=numeroDos.value;
    num2=parseInt(num2);

    suma=num1+num2;

    alert("la suma es " + suma);	
}

function restar()
{
    var num1;
    var num2;
    var resta;

    num1=numeroUno.value;
    num1=parseInt(num1);
    num2=numeroDos.value;
    num2=parseInt(num2);

    resta=num1-num2;

    alert("la resta es " + resta);	
}

function multiplicar()
{ 
	
    var num1;
    var num2;
    var multiplicar;

    num1=numeroUno.value;
    num1=parseInt(num1);
    num2=numeroDos.value;
    num2=parseInt(num2);

    multiplicar=num1*num2;

    alert("la multiplicacion es " + multiplicar);
}

function dividir()
{
	
    var num1;
    var num2;
    var dividir;

    num1=numeroUno.value;
    num1=parseInt(num1);
    num2=numeroDos.value;
    num2=parseInt(num2);

    dividir=num1/num2;

    alert("la division es " + dividir);
}

