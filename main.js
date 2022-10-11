
function opcionSuaveDescafeinado(){
    let op = prompt(`Como le preparamos su cafe?:
        1: Para llevar
        2: Para tomar en el local
        3: Paquete de 1/4 molido
        
        Ingrese 1, 2 o 3.`);
    switch(op){
        case "1":
            let opcionDescafeinada = Number;

            const galeriaCafeSuaveD1 = [
                {
                    cafeSeleccionado: "Vaso TakeAway",
                    info:"Ideal para tomar en el camino",
                    foto:"./img/cafeTakeAway.jpg",
                    linkCompra:"www.google.com"
                },
            ];

            const indiceGaleriaCafeSuaveD1 = Math.floor(Math.random()*galeriaCafeSuaveD1.length);

            document.write(`<div class="card">
                <img src=${galeriaCafeSuaveD1[indiceGaleriaCafeSuaveD1].foto} alt=${galeriaCafeSuaveD1[indiceGaleriaCafeSuaveD1].cafeSeleccionado}>
                <h2>${galeriaCafeSuaveD1[indiceGaleriaCafeSuaveD1].cafeSeleccionado}</h2>
                <p class="card-text">${galeriaCafeSuaveD1[indiceGaleriaCafeSuaveD1].info}</p>
                <a href="${galeriaCafeSuaveD1[indiceGaleriaCafeSuaveD1].linkCompra}" class="btn btn-primary">Comprar</a>
                </div>`)

            break;
            case "2":
                let opcionDescafeinada2 = Number;
    
                const galeriaCafeSuave2 = [
                    {
                        cafeSeleccionado: "Pocillo Salon",
                        info:"Para disfrutar sentado en el salon",
                        foto:"./img/cafeSalon.jpg",
                        linkCompra:"www.google.com"
                    },
                ];
    
                const indiceGaleriaCafeSuave2 = Math.floor(Math.random()*galeriaCafeSuave2.length)
    
                document.write(`<div class="card">
                    <img src=${galeriaCafeSuave2[indiceGaleriaCafeSuave2].foto} alt=${galeriaCafeSuave2[indiceGaleriaCafeSuave2].cafeSeleccionado}>
                    <h2>${galeriaCafeSuave2[indiceGaleriaCafeSuave2].cafeSeleccionado}</h2>
                    <p class="card-text">${galeriaCafeSuave2[indiceGaleriaCafeSuave2].info}</p>
                    <a href="${galeriaCafeSuave2[indiceGaleriaCafeSuave2].linkCompra}" class="btn btn-primary">Comprar</a>
                    </div>`)
    
                break;
                case "3":
                let opcionDescafeinada3 = Number;
    
                const galeriaCafeSuave3 = [
                    {
                        cafeSeleccionado: "Bolsa de 1/4 molido",
                        info:"Listo para preparar en cafeteras de filtro de tela",
                        foto:"./img/cafePaquete.jpg",
                        linkCompra:"www.google.com"
                    }
                ];
    
                const indiceGaleriaCafeSuave3 = Math.floor(Math.random()*galeriaCafeSuave3.length)
    
                document.write(`<div class="card">
                    <img src=${galeriaCafeSuave3[indiceGaleriaCafeSuave3].foto} alt=${galeriaCafeSuave3[indiceGaleriaCafeSuave3].cafeSeleccionado}>
                    <h2>${galeriaCafeSuave3[indiceGaleriaCafeSuave3].cafeSeleccionado}</h2>
                    <p class="card-text">${galeriaCafeSuave3[indiceGaleriaCafeSuave3].info}</p>
                    <a href="${galeriaCafeSuave3[indiceGaleriaCafeSuave3].linkCompra}" class="btn btn-primary">Comprar</a>
                    </div>`)
    
                break;

                default: 
                    alert("Elije una opcion valida");
                    opcionSuaveDescafeinado();
    }
}

function seleccionarVariedadSuave(){
    let op = prompt(`Los cafes suaves que tenemos son:
    1: Descafeinado
    2: Colombia.
    
    Ingrese 1 o 2.`);
    switch(op){
        case "1":
            let variedadSuaveDescafeinado = Number;
            opcionSuaveDescafeinado();
            break;
        case "2":
            let variedadSuaveColombia = Number;
            montoSuaveColombia();
            break;
        default:
            alert("Elija una opcion valida");

    }
}

function seleccionarIntensidad(){
    
    let op = prompt(`Que tipo de café le gusta?
        1: Suave
        2: Intermedio
        3: Fuerte.
        Ingresa 1, 2 o 3.`);
    
    switch(op){
        case "1":
            let cafeSuave = Number;
            seleccionarVariedadSuave();
            break;
        case "2":
            let cafeIntermedio = Number;
            seleccionarVariedadIntermedio();
            break;
        case "3":
            let cafeFuerte = Number;
            seleccionarVariedadFuerte();
            break;
        default:
            alert("Ingrese una de las opciones validas")
    }
}

function elegirRespuesta(respuesta){
    if(respuesta == 'si'){
        seleccionarIntensidad();
    }else{
        alert("bueno, que disfrute su té");
    }
}

function tomarDecision(bienvenida){
    if(bienvenida){
        let respuesta = prompt("¿Querés una recomendacion de Café? si/no").toLowerCase();
        elegirRespuesta(respuesta);
    }
}

function iniciarRecomendacion(){
    let bienvenida = confirm("Bienvenido a CafeMartinez Online");
    tomarDecision(bienvenida)
}

iniciarRecomendacion();
