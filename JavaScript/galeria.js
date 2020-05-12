// Declaración de variables.
var VFotos; // Lugar donde se almacenara la ruta de la imagen.
var V_max; // Longitud máxima del vector "Fotos".
var aux;   // Auxiliar para configuración.
var aux_2=0; // Auxiliar para programación.
// Inicio de variables.
VFotos = new Array(); // Crea el vector para las fotos.
VFotos [0] = "../Imagenes/img11.jpg"
VFotos [1] = "../Imagenes/img12.jpg"
VFotos [2] = "../Imagenes/img13.jpg"
VFotos [3] = "../Imagenes/img14.jpg"
VFotos [4] = "../Imagenes/img15.jpg"
VFotos [5] = "../Imagenes/img16.jpg"
VFotos [6] = "../Imagenes/img17.jpg"
VFotos [7] = "../Imagenes/img18.jpg"
VFotos [8] = "../Imagenes/img19.jpg"
VFotos [9] = "../Imagenes/img20.jpg"

V_max = VFotos.length; // Obtiene la longitud del vector.
V_max = V_max-1; // Diminuye uno su valor dado que V_max coge un valor a más.

function siguiente () {
			
    if (aux_2 == V_max){
        aux_2 = 0;
    }
    else{
        aux_2 = aux_2+1;
    }
    document.images.Diapositivas.src = VFotos[aux_2];
        if(VFotos[aux_2] == VFotos[9]){
            document.getElementById('b2').disabled =true;
            console.log('desactivado') 
        }
}
function anterior () {
    if (aux_2 == 0){
        aux_2 = V_max;			
    }
    else{
        aux_2 = aux_2-1;
    }
    document.images.Diapositivas.src = VFotos[aux_2];
    document.images.Diapositivas.src = VFotos[aux_2];
        if(VFotos[aux_2] == VFotos[0]){
            document.getElementById('b1').disabled =true;
            console.log('desactivado') 
            document.getElementById('b2').disabled=false;
    }
}

function aleatorio (){
    for ( var i = 0; i <6; i++) {
    var azar = Math.round(Math.random()*(VFotos.length ));
    document.images.Diapositivas.src = VFotos[azar];
    }
    setTimeout("aleatorio()",500);
}





   /* var limite=6;
    for (var i = 0; i <limite; i++) {
        var azar = Math.floor(Math.random()*(VFotos.length ));
        document.images.Diapositivas.src = VFotos[azar];
    }
    setTimeout( 2000);
     /*var i=1
      while (i<6) {
        var aleatorios= (Math.random()* VFotos.length);
        aleatorios= Math.floor(aleatorios);
        Diapositivas.src = VFotos[aleatorios];
        setTimeout( 5000);
        i++;
      }*/     


