function soloLetras(e){
  key = e.keyCode || e.which;
  tecla = String.fromCharCode(key).toLowerCase();
  letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
  var nombre = document.getElementById('nombre');
  var message = document.getElementById('message3');
  especiales = "8-37-39-46";

  tecla_especial = false
  for(var i in especiales){
       if(key == especiales[i]){
           tecla_especial = true;
           break;
       }
   }

   if(letras.indexOf(tecla)==-1 && !tecla_especial){
       return false;
   }
}

/*
  function validarA() {
    // Variable que usaremos para determinar si el input es valido
    let isValid = false;
    // El input que queremos validar
    var apellido = document.getElementById("ape");
    //El div con el mensaje de advertencia:
    var message = document.getElementById('message3');
    // El pattern que vamos a comprobar
    var pattern = new RegExp('^[A-Z]+$', 'i');
    // Primera validacion, si input esta vacio entonces no es valido
    if(!apellido.value) {
      isValid = false;
    } else { 
        // Tercera validacion, si input contiene caracteres diferentes a los permitidos
        if(!pattern.test(apellido.value)){ 
        // Si queremos agregar letras acentuadas y/o letra ñ debemos usar
        // codigos de Unicode (ejemplo: Ñ: \u00D1  ñ: \u00F1)
          isValid = false;
        } else {
          // Si pasamos todas la validaciones anteriores, entonces el input es valido
          isValid = true;
        }
    }
    //Ahora coloreamos el borde de nuestro input
    if(!isValid) {
      // rojo: no es valido
      apellido.style.borderColor = 'red'; // me parece que 'salmon' es un poco menos agresivo que 'red'
      // mostramos mensaje
      message.hidden = false;
    } else {
      // verde: si es valido
      apellido.style.borderColor = 'palegreen'; // 'palegreen' se ve mejor que 'green' en mi opinion
      // ocultamos mensaje;
      message.hidden = true;
    }
    // devolvemos el valor de isValid
    return isValid;
  }*/

  function validarNum() {
    var telefono = document.getElementById("tel").value;
    var caracteres = '0123456789' ;
    var message = document.getElementById('message5');
    var isValid = false;
      if (caracteres.search(telefono)==1) {
        isValid=false;
      }else
      {
        isValid=true;
      }

     //Ahora coloreamos el borde de nuestro input
        if(!isValid) {
          // rojo: no es valido
          telefono.style.borderColor = 'red'; // me parece que 'salmon' es un poco menos agresivo que 'red'
          // mostramos mensaje
          message.hidden = false;
        } else {
          // verde: si es valido
          telefono.style.borderColor = 'palegreen'; // 'palegreen' se ve mejor que 'green' en mi opinion
          // ocultamos mensaje;
          message.hidden = true;
        }
        // devolvemos el valor de isValid
        return isValid;
      }