/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let sexo;
	let peso;
	let edad;
	let contadorMujeres=0;
	let contadorDePersonas=0;
	let acumuladorDeEdad=0;
	let promedioEdad;
	let pesoMasGrande;
	let nombreMasPesado;
	let flagPeso=0;
	
	for(let i=1;i<6;i++)
	{
	  nombre=prompt("Ingrese nombre");
	  peso=prompt("Ingrese peso");
	  sexo=prompt("Ingrese sexo:f/m","f/m");
	  while(sexo!="f"&&sexo!="m")
	  {
		  sexo=prompt("Sexo ingresado no valido","f/m");
	  }
	  edad=parseInt(prompt("Ingrese edad"));

	  //informar la cantidad de mujeres.

	  if(sexo=="f")
	  {
		contadorMujeres++;
		
	  }
//la edad promedio en total.
      contadorDePersonas++;
      acumuladorDeEdad+=edad;
//el hombre mas pesado.
     if ((flagPeso==0&& sexo=="m")|| (sexo=="m"&&pesoMasGrande<peso))
	  pesoMasGrande=peso;
	  nombreMasPesado=nombre;
	  flagPeso++;
	}
	  
	promedioEdad=acumuladorDeEdad/contadorDePersonas;

	document.write("mujeres hay "+contadorMujeres+"<br>");
	document.write("La edad promedio es "+promedioEdad+"<br>");
	document.write("el hombre mas pesado es "+nombreMasPesado+"con un peso de "+pesoMasGrande+"<br>");


}
