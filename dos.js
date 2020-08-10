/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{
  let marca;
  let precio;
  let peso;
  let tipo;
  let respuesta;
  let pesoTotal=0;
  let flagLiquidos=0;
  let masCaroLiquidos;
  let flagSolidos=0;
  let masBaratosSolidos;
  let precioCaroLiquidos;
  let precioMasBaratoSolidos;

  do
  {
     marca=prompt("Ingrese la marca del producto");
     precio=parseInt(prompt("ingrese el precio del producto"));
     peso=parseInt(prompt("Ingrese el peso del prodcuto en kg","peso en Kg"));
     tipo=prompt("ingrese el tipo del producto, deser ser solido o liquido","solido o liquido");
     while(tipo!="solido"&&tipo!="liquido")
     {
       tipo=prompt("tipo de producto invalido.Ingreselo nuevamente","solido o liquido")
     }

     //informar el peso total de la compra.
       
      pesoTotal+=peso;

      //la marca del más caro de los líquidos

      if((flagLiquidos==0&&tipo=="liquido")||(tipo=="liquido"&&precioCaroLiquidos<precio))
      {
        masCaroLiquidos=marca;
        precioCaroLiquidos=precio;
        flagLiquidos++;
      }

      //la marca del más barato de los sólidos

      if((flagSolidos==0&&tipo=="solido")||(tipo=="solido"&&masBaratosSolidos>precio))
      { 
        precioMasBaratoSolidos=precio;
        masBaratosSolidos=marca;
        flagSolidos++;
      }

    
   respuesta=prompt("Desea ingresar mas productos?s/n","s/n");
  }while(respuesta=="s");

  document.write("El peso total de la compra es de "+pesoTotal+"<br>");
  document.write("La marca mas cara de los liquidos es "+masCaroLiquidos+"<br>");
  document.write("La marca del mas barato de los solidos es: "+masBaratosSolidos);

}


