/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let sexo;
	let lugar;
	let temporada;
	let cantidad;
	let respuesta;
	let contadorBariloche=0;
	let contadorCataratas=0;
	let contadorSalta=0;
	let lugarMasElegido;
	let flagCantidad=0;
	let PersonasInvierno;
	let cantidadInvierno;
	let promedio;


	do
	{

	  sexo=prompt("Ingrese sexo:f/m","f/m");
	  lugar=prompt("Ingrese lugar: bariloche, cataratas o salta","bariloche, cataratas o salta");
	   while(lugar!="bariloche"&&lugar!="cataratas"&&lugar!="salta")
	   {
         lugar=prompt("Lugar ingresado no valido.Ingreselo nuevamente","bariloche, cataratas o salta");
	   }

	  temporada=prompt("Ingrese la temporada: otoño, invierno, primavera o verano","otoño, invierno, primavera o verano");
	   while(temporada!="otoño"&&temporada!="invierno"&&temporada!="primavera"&&temporada!="verano")
	   {
		 temporada=prompt("Temporada incorrecta. Ingrese nuevamente","otoño, invierno, primavera o verano");
 
	   }

	  cantidad=parseInt(prompt("Ingrese la cantidad de personas"));

	  //el lugar más elegido

	  if(lugar=="bariloche")
	  {
        contadorBariloche++;
	  }else  if(lugar=="cataratas")
	  {
		 contadorCataratas++; 
	  }else
	  {
         contadorSalta++;
	  }

	  if(contadorBariloche>contadorCataratas&&contadorBariloche>contadorSalta)
	  {
		  lugarMasElegido=lugar;
	  }else if(contadorCataratas>contadorSalta)
	  {
		  lugarMasElegido=lugar;
	  }else 
	  {
		  lugarMasElegido=lugar;
	  }

	  //el sexo de titular que lleva más pasajeros.

	  if(flagCantidad==0||MasPasajero<cantidad )
	  {  
		  sexoMayorCantidad=sexo;
		  MasPasajero=cantidad;
		  flagCantidad++;
	  }
	  //el promedio de personas por viaje,  que viajan en invierno

	  if(temporada=="invierno")
	  {
		  PersonasInvierno+=cantidad;
		  cantidadInvierno++;
	  }

     respuesta=prompt("Desea ingresar mas infromacion?s/n","s/n");
	}while(respuesta=="s");

	  promedio=PersonasInvierno/cantidadInvierno;
	  
	document.write("El lugar mas elegido es: "+lugarMasElegido);
	document.write("El sexo del titular que lleva mas pasajeros es: "+sexoMayorCantidad+"<br>");
	document.write("El promedio d epersonas que viajan en invierno es: "+promedio);

}
