function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
		var numerorandom;
		var mensaje;
		numerorandom=Math.floor((Math.random() * 10) + 1);
		console.log(numerorandom);
	    mensaje=""


	    if(numerorandom>=9)
	    {
	    	alert("exelente");
	    }else
	    {   alert("aprobo");
	    	if(numerorandom<=3)
	    	{
	    	alert("vamos, la proxima")
	    	}else
	    	{
	    		alert()
	    	}
	    }


}//FIN DE LA FUNCIÓN