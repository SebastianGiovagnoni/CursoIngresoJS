function mostrar()
{
	var hora;
	hora=laHora.value;

	var mensaje;
switch (hora)
{
	case "6":
	case "7":
	case "8":
	case "9":
	case "10":
	case "11":
		mensaje="es de mañana";
			break;
	case "12":
	case "13":
	case "14":
	case "15":
	case "16":
	case "17":
	case "18":
	case "19":
		mensaje="es de tarde";
			break;
	default
        if (hora >= 20 && hora < 24) || (hora >= 1 && hora <= 5)
        {
            alert("es de noche");
        }else
        {
            alert("hora invalida");
        }
        break;
}
	alert(mensaje);
}