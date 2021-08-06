     
var SecuenciaID = null
var imagen = 0
var duracion = 3000    
{
imagenes = new CreaArray(3)
imagenes[1].src = "img/laPulga.jpg"
imagenes[2].src = "img/luchoDiaz.jpg"
imagenes[3].src = "img/pele.jpg"
}    
function CreaArray(n) {
    this.length = n
    for (var i = 1; i<=n; i++) {
        this[i] = new Image()
    }
    return this
}    
function MostrarSecuencia() {
    {
        console.log(document.images["secuencia"]);
        document.images["secuencia"].src = imagenes[imagen].src
        imagen++
        if ( imagen == 4 )
            imagen = 1
    }
    SecuenciaID = setTimeout("MostrarSecuencia()", duracion)
    SecuenciaEjecutandose = true
}    
function IniciarSecuencia() {
    imagen = 1
    MostrarSecuencia()
}