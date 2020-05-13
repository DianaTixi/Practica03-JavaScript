/* // Declaración de variables.
var VFotos; // Lugar donde se almacenara la ruta de la imagen.
var V_max; // Longitud máxima del vector "Fotos".
var aux;   // Auxiliar para configuración.
var aux_2=0; // Auxiliar para programación.
// Inicio de variables.
VFotos = new Array(); // Crea el vector para las fotos.
VFotos [0] = "../Imagenes/img1.jpg"
VFotos [1] = "../Imagenes/img2.jpg"
VFotos [2] = "../Imagenes/img3.jpg"
VFotos [3] = "../Imagenes/img4.jpg"
VFotos [4] = "../Imagenes/img5.jpg"
VFotos [5] = "../Imagenes/img6.jpg"
VFotos [6] = "../Imagenes/img7.jpg"
VFotos [7] = "../Imagenes/img8.jpg"
VFotos [8] = "../Imagenes/img9.jpg"
VFotos [9] = "../Imagenes/img10.jpg"

V_max = VFotos.length; // Obtiene la longitud del vector.
V_max = V_max-1; // Diminuye uno su valor dado que V_max coge un valor a más.
/////////////
*/

function aleatorios (){
VFotos = new Array(); // Crea el vector para las fotos.
VFotos [0] = "../Imagenes/img1.jpg"
VFotos [1] = "../Imagenes/img2.jpg"
VFotos [2] = "../Imagenes/img3.jpg"
VFotos [3] = "../Imagenes/img4.jpg"
VFotos [4] = "../Imagenes/img5.jpg"
VFotos [5] = "../Imagenes/img6.jpg"
VFotos [6] = "../Imagenes/img7.jpg"
VFotos [7] = "../Imagenes/img8.jpg"
VFotos [8] = "../Imagenes/img9.jpg"
VFotos [9] = "../Imagenes/img10.jpg"
vector= new Array();
var n;
for (var i =0; i <6; i++){
    n = Math.round(Math.random()*(10.0));
    vector[i]= n;
    vector[i]++;
    vector[i]= VFotos[n]
}
console.log(vector) 
document.getElementById('b2').disabled=false;
document.getElementById('b1').disabled=false;
}
var aux;   
var aux_2=0;
function siguiente () {
    console.log(vector);
    if (aux_2 == vector.length){
        aux_2 = 0;
    }
    else{
        aux_2 = aux_2+1;
    }
    document.images.Diapositivas.src = vector[aux_2];
        if(vector[aux_2] == vector[5]){
            document.getElementById('b2').disabled =true;
            console.log('desactivado') 
        }
}

function anterior () {
    console.log(vector);
    if (aux_2 == 0){
        aux_2 = vector.length;			
    }
    else{
        aux_2 = aux_2-1;
    }
    document.images.Diapositivas.src = vector[aux_2];
    document.images.Diapositivas.src = vector[aux_2];
        if(vector[aux_2] == vector[0]){
            document.getElementById('b1').disabled =true;
            console.log('desactivado') 
            document.getElementById('b2').disabled=false;
    }
}
///////////////////////////////////
/*function siguiente () {
    if (aux_2 == longV){
        aux_2 = 0;
    }
    else{
        aux_2 = aux_2+1;
    }
    document.images.Diapositivas.src = vector[aux_2];
        if(vector[aux_2] == vector[4]){
            document.getElementById('b2').disabled =true;
            console.log('desactivado') 
        }
}
////////////////////////
function aleatorio (){
    VAux= new Array(6);
    for ( var i = 0; i <6; i++) {
    var azar = Math.round(Math.random()*(VFotos.length ));
    document.images.Diapositivas.src = VFotos[azar];
    console.log("numero: "+azar)
    }
    setTimeout("aleatorio()",500);
}
/*
function randomico(){
    for (var i=1; i<6; i++) {
        //var aleatorio = Math.floor(Math.random()*11)+1;
        var aleatorio = Math.ceil(Math.random()*11);
        VFotos[i]="<img src ='../Imagenes/img"+aleatorio +".jpg' alt='' >";
        var existe = false;
        for (var i=0; i<6; i++){
            if (VFotos [i] == aleatorio){
                existe =true;
                break;
            }
        }
        if (!existe) {
            VFotos[6]=aleatorio;
            
        }
        //aux=aleatorio;
        console.log('vectorqq: '+aleatorio)
    }
    console.log('vectorww: '+ VFotos[aleatorio])
    Diapositivas.innerHTML=VFotos[1];
    muestra=1;
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