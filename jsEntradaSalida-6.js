/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var num1;
    var num2;
    var total;

    num1=numeroUno.value;
    num1=parseInt(num1);
    num2=numeroDos.value;
    num2=parseInt(num2);

    total=num1+num2;

    alert("la suma es " + total);


         


}


