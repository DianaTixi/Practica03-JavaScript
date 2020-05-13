function validacion()
{
    var ced=false;
    var nom=false;
    var ape=false;
    var dir=false;
    var tel=false;
    var fec=false;
    var ema=false;
    var con=false;

    for(var i = 0; i < document.forms[0].elements.length; i++){
        var elemento = document.forms[0].elements[i];
        if(elemento.value == '' && (elemento.type == 'text' || elemento.type == 'password')){    //Si el campo esta vacio
            if(elemento.id == 'ced'){  //Cedula Vacia
                document.getElementById('mensaje1').innerHTML = 'Campo Cedula esta vacio'; 
                elemento.style.border = '2px red solid';
                return false;
            }
            if(elemento.id == 'nom'){ //Nombre Vacio
                document.getElementById('mensaje2').innerHTML = 'Campo Nombres esta vacio'; 
                elemento.style.border = '2px red solid';
                return false;
            }
            if(elemento.id == 'ape'){ //Apellido Vacio
                document.getElementById('mensaje3').innerHTML = 'Campo Apellidos esta vacio'; 
                elemento.style.border = '2px red solid';
                return false;
            }
            if(elemento.id == 'dir'){ //Direccion Vacio
                document.getElementById('mensaje4').innerHTML = 'Campo Direccion esta vacio'; 
                elemento.style.border = '2px red solid';
                return false;
            }
            if(elemento.id == 'tel'){ //Telefono Vacio
                document.getElementById('mensaje5').innerHTML = 'Campo Telefono esta vacio'; 
                elemento.style.border = '2px red solid';
                return false;
            }
            if(elemento.id == 'fecN'){ //Fecha Vacio
                document.getElementById('mensaje6').innerHTML = 'Campo Fecha esta vacio'; 
                elemento.style.border = '2px red solid';
                return false;
            }
            if(elemento.id == 'correo'){ //Email Vacio
                document.getElementById('mensaje7').innerHTML = 'Campo Email esta vacio'; 
                elemento.style.border = '2px red solid';
                return false;
            }
            if(elemento.id == 'contra'){ //Contrasena Vacio
                document.getElementById('mensaje8').innerHTML = 'Campo Password esta vacio'; 
                elemento.style.border = '2px red solid';
                return false;
            }
            return false;
        }else{  //Si ningun campo esta vacio
            if(elemento.id == 'ced'){  //CEDULA
                ced=validarCedula(elemento);
            }
            if(elemento.id == 'nom'){  //Nombres
                nom=validarLetras(elemento);
            }
            if(elemento.id == 'ipe'){  //Apellidos
                ape=validarLetras(elemento);
            }
            if(elemento.id == 'dir'){  //Direccion
                dir=true;
            }
            if(elemento.id == 'tel'){  //Direccion
                tel=validarTelefono(elemento);
            }
            if(elemento.id == 'fecN'){  //Fecha
                fec=validarFecha(elemento);
            }
            if(elemento.id == 'correo'){  //Email
                ema=validarEmail(elemento);
            }
            if(elemento.id == 'contra'){  //Password
                con=validarPassword(elemento);
            }
        }
        /*
        console.log("Ced"+ced);
        console.log("Nom"+nom);
        console.log("Ape"+ape);
        console.log("Dir"+dir);
        console.log("Fec"+fec);
        console.log("Ema"+ema);
        console.log("Con"+con);
        */
        if (ced==true&&nom==true&&ape==true&&dir==true&&fec==true&&ema==true&&con==true&&tel==true) {
            console.log("Datos")
            return true;
        }
    }
}
//Cedula
function validarCedula(elemento)
{  
    if(elemento.value.length > 0 && elemento.value.length < 11){
        var miAscii = elemento.value.charCodeAt(elemento.value.length-1)
        if((miAscii >= 48 && miAscii <= 57)){
        }else {
            elemento.value = elemento.value.substring(0, elemento.value.length-1)
        }
        }else{
            elemento.value = elemento.value.substring(0, elemento.value.length-1)
    }
    if (elemento.value.length == 10) {
        if((elemento.value.substring(0,2)>=1)||(elemento.value.substring(0,2)<=24)){
            //Suma impares
            var pares = 0;
            var numero =0;
            for (var i = 0; i< 4; i++) {
                numero = elemento.value.substring(((i*2)+1),(i*2)+2);
                numero = (numero * 1);
                if( numero > 9 ){ var numero = (numero - 9); }
                pares = pares + numero; 
                //console.log("I"+numero)
            }
            //console.log("Impares"+pares)
            //Suma pares
            var imp=0;
            numero = 0
            for (var i = 0; i< 5; i++) {
                var numero = elemento.value.substring((i*2),((i*2)+1));
                var numero = (numero * 2);
                if( numero > 9 ){ var numero = (numero - 9); }
                imp = imp + numero; 
                //console.log("P"+numero)
            }
            //console.log("Pares"+imp);
            var sum = pares + imp;
            //console.log("Sum"+sum);
            //Decena Inmediata
            aux = (''+sum)[0];
            var di = aux.substring(0,1);
            di++;
            di = di *10;
            //console.log("Di"+di);
            //Resta de Sum - Di
            numero = (di - sum);
            if (numero == (elemento.value.substring(9,10))) {
                document.getElementById('mensaje1').innerHTML='' ; 
                elemento.style.border = '2px greenyellow solid';
                return true;
            }else{
                document.getElementById('mensaje1').innerHTML = 'Cedula es Incorrecta'; 
                elemento.style.border = '2px red solid';
                return false;
            }
        }
    }else{
        document.getElementById('mensaje1').innerHTML = 'Cedula es Incorrecta'; 
                elemento.style.border = '2px red solid';
                return false;
    }
}
//Texto
function validarLetras(elemento){
    if(elemento.value.length > 0){
        var miAscii = elemento.value.charCodeAt(elemento.value.length-1)
        //console.log(miAscii)
        if((miAscii >= 97 && miAscii <= 122)||(miAscii >=65 && miAscii <= 90)||(miAscii == 32)){ //Sean mayusculas y minisculas
            //console.log("Es una letra valida")
            if ((elemento.id=='nom')||(elemento.id=='ape')) {
                //console.log("Entra para irse");
                return validarDosOMasCampos(elemento);
            }
        }else {
            console.log("Es una letra invalida")
            elemento.value = elemento.value.substring(0, elemento.value.length-1)
            return false
        }
        }else{
            
    }

}
// Dos atributos Nombre - Apellido
function validarDosOMasCampos(elemento)
{    
    if(elemento.value.length > 0){
        for (var i = 0; i < elemento.value.length; i++) {
            //console.log("Ascii"+elemento.value.charCodeAt(i));
            //console.log("Length"+elemento.value.length);
            if (((elemento.value.charCodeAt(i)==32))) {
                //console.log("NAN="+(elemento.value.charCodeAt(i+1).isNan));
                if ((elemento.value.charCodeAt(i-1)!=32)&&(elemento.value.charCodeAt(i+1)>=65)&&(elemento.value.charCodeAt(i+1)<=122)){
                    //console.log("Espacio esta rodeado");
                    if (elemento.id=='nom') {
                        //console.log("Es nombre");
                        document.getElementById('mensaje2').innerHTML =''; 
                    }else{
                        
                        document.getElementById('mensaje3').innerHTML="" ;
                    }
                    elemento.style.border = '2px greenyellow solid';
                    return true;
                }else{
                    if (elemento.id=='nom') {
                        document.getElementById('mensaje2').innerHTML = 'Nombres Incorrecto'; 
                    }else{
                        document.getElementById('mensaje3').innerHTML = 'Apellidos Incorrecto';
                    }
                    elemento.style.border = '2px red solid';
                    return false;
                }
            }else{
                if (elemento.id=='nom') {
                    document.getElementById('mensaje2').innerHTML = 'Nombres Incorrecto';
                    console.log("Es nombre"); 
                }else{
                    document.getElementById('mensaje3').innerHTML = 'Apellidos Incorrecto';
                }
                elemento.style.border = '2px red solid';
            }
            
        }
    }
}
// Telefono
function validarTelefono(elemento)
{
    if(elemento.value.length > 0 && elemento.value.length < 11){
        var miAscii = elemento.value.charCodeAt(elemento.value.length-1)
        //console.log(miAscii)
        if((miAscii >= 48 && miAscii <= 57)){ //Sean numeros
            //console.log("Es un numero valid")
            if (elemento.value.length<=10) {
                document.getElementById('mensaje5').innerHTML=''; 
                elemento.style.border = '2px greenyellow solid';
                return true;
            }else {
                //console.log("Es un numero invalida")
                document.getElementById('mensaje5').innerHTML = 'Telefono Incorrecto'; 
                elemento.style.border = '2px red solid';
                return false;
            }
        }else{
            elemento.value = elemento.value.substring(0, elemento.value.length-1)
            return false;
        }
    }else{
        elemento.value = elemento.value.substring(0, elemento.value.length-1)
        return false;
    }
}

//Fecha de Nacimiento
function validarFecha(elemento)
{
    if(elemento.value.length > 0 && elemento.value.length < 11){
        var miAscii = elemento.value.charCodeAt(elemento.value.length-1)
        //console.log(miAscii)
        if((miAscii >= 48 && miAscii <= 57 || miAscii == 47)){ //Sean numeros
            //console.log("Es un numero valido")
            if (elemento.value.length==10 && elemento.value.charCodeAt(2)==47 && elemento.value.charCodeAt(5)==47) {
                document.getElementById('mensaje6').innerHTML ="" ; 
                elemento.style.border = '2px greenyellow solid';
                return true;                
            }else {
                document.getElementById('mensaje6').innerHTML = 'Fecha Incorrecta'; 
                elemento.style.border = '2px red solid';
                return false;
            }
        }else{
            elemento.value = elemento.value.substring(0, elemento.value.length-1)
            return false;
        }
    }else{
        elemento.value = elemento.value.substring(0, elemento.value.length-1)
        return false;
    }
}
//Email
function validarEmail(elemento)
{
    var posAt=0;
    var checkHost=false;
    var checkServer=false;
    for (let i = 0; i < elemento.value.length; i++) {   //Buscamos el arroba
        if (elemento.value.charCodeAt(i)==64) {
            posAt=i;
            break;
        }
    }
    if(posAt>0){
        var host = elemento.value.substring(0,posAt);
        var server = elemento.value.substring(posAt+1,elemento.value.length);
        //CHEQUEO HOST
        if (host.length>=3) {
            for (let i = 0; i < host.length; i++) {
                var aux = host.charCodeAt(i);
                if (((aux >= 97 && aux <= 122)||(aux >=65 && aux <= 90)||(aux >=48 && aux <= 57))==false) { //Chequea que host sea alfanumerico
                    checkHost=false;
                    console.log("Host tiene error!!!!")
                    break;
                }else{
                    console.log("Todo belen Host")
                    checkHost=true;
                }
            }
        } else {
            checkHost=false;
            console.log("Host es menor a 3!!!!")
        }
        //CHEQUEO SERVER
        if (server=='est.ups.edu.ec' || server=='ups.edu.ec' ) {
            checkServer=true;
        } else {
            checkServer=false;
        }
        //UNIMOS CHECKS
        if (checkHost==true && checkServer==true) {
            document.getElementById('mensaje7').innerHTML=""; 
            elemento.style.border = '2px greenyellow solid';
            return true;
        } else {
            document.getElementById('mensaje7').innerHTML = 'Mail Incorrecto'; 
            elemento.style.border = '2px red solid';
            return false;
        }
    }else{
        document.getElementById('mensaje7').innerHTML = 'Mail Incorrecto'; 
        elemento.style.border = '2px red solid';
        return false;
    }
}
//Contraseña
function validarPassword(elemento)
{
    var checkPass=false;
    var checkMin=false;
    var checkMay=false;
    var checkNum=false;
    var checkCha=false;
    if(elemento.value.length >= 8){
        var pass=elemento.value;
        for (let i = 0; i < pass.length; i++) {
            var aux = pass.charCodeAt(i);
            //console.log("i="+i)
            //console.log("Valor de Aux="+aux);
            if (((aux>=97&&aux<=122)||(aux>=65&&aux<= 90)||(aux>=48&&aux<=57)||(aux==64||aux==95||aux==36))==false){ //Chequea que host sea alfanumerico y esp char
                checkPass=false;
                console.log("Password tiene error!!!!")
                break;
            }else{
                checkPass=true;
            }
        }
        //console.log(miAscii)
        if(checkPass==true){ 
            //console.log("Entra a ver char de Pass");
            var pass=elemento.value;
            for (let i = 0; i < pass.length; i++) {
                var aux = pass.charCodeAt(i);
                //Mayusculas
                if (aux>=97&&aux<=122) {
                    checkMay=true;
                }
                //Minusculas
                if (aux>=65&&aux<= 90) {
                    checkMin=true;
                }
                //Numeros
                if (aux>=48&&aux<=57) {
                    checkNum=true;
                }
                //Caracteres
                if (aux==64||aux==95||aux==36) {
                    checkCha=true;
                }
            }
            //Chequeamos que se cumplan todos los requisitos
            if (checkMay==true&&checkMin==true&&checkNum==true&&checkCha==true) {
                document.getElementById('mensaje8').innerHTML= '';
                elemento.style.border = '2px greenyellow solid';
                return true;
            } else {
                document.getElementById('mensaje8').innerHTML = 'Minimo 1 de cada Mayus, Minus, Numb y (@,$,_)'; 
                elemento.style.border = '2px red solid';
                return false;
            }

            
        }else{
            document.getElementById('mensaje8').innerHTML = 'Puede Utilizar alfanumericos y (@,$,_)'; 
            elemento.style.border = '2px red solid';
            return false;
        }
    }else{
        document.getElementById('mensaje8').innerHTML = '<p id="falla" class="falla">Minimo 8 caracteres'; 
        elemento.style.border = '2px red solid';
        return false;
    }
}