// Intensidad Suaves
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
                    cafeSeleccionado: "Vaso TakeAway - Descafeinado",
                    info:"Ideal para tomar en el camino",
                    foto:"./img/cafeTakeAway.jpg",
                    linkCompra:"#"
                },
            ];

            const indiceGaleriaCafeSuaveD1 = Math.floor(Math.random()*galeriaCafeSuaveD1.length);

            document.write(`<div class="card">
                <img src=${galeriaCafeSuaveD1[indiceGaleriaCafeSuaveD1].foto} alt=${galeriaCafeSuaveD1[indiceGaleriaCafeSuaveD1].cafeSeleccionado}>
                <h2>${galeriaCafeSuaveD1[indiceGaleriaCafeSuaveD1].cafeSeleccionado}</h2>
                <p class="card-text">${galeriaCafeSuaveD1[indiceGaleriaCafeSuaveD1].info}</p>
                <a href="${galeriaCafeSuaveD1[indiceGaleriaCafeSuaveD1].linkCompra}" class="btn btn-primary">Pagar</a>
                </div>`)

            break;
            case "2":
                let opcionDescafeinada2 = Number;
    
                const galeriaCafeSuave2 = [
                    {
                        cafeSeleccionado: "Cafe doble - Descafeinado",
                        info:"Para disfrutar sentado leyendo un libro",
                        foto:"./img/cafeSalon.jpg",
                        linkCompra:"#"
                    },
                ];
    
                const indiceGaleriaCafeSuave2 = Math.floor(Math.random()*galeriaCafeSuave2.length)
    
                document.write(`<div class="card">
                    <img src=${galeriaCafeSuave2[indiceGaleriaCafeSuave2].foto} alt=${galeriaCafeSuave2[indiceGaleriaCafeSuave2].cafeSeleccionado}>
                    <h2>${galeriaCafeSuave2[indiceGaleriaCafeSuave2].cafeSeleccionado}</h2>
                    <p class="card-text">${galeriaCafeSuave2[indiceGaleriaCafeSuave2].info}</p>
                    <a href="${galeriaCafeSuave2[indiceGaleriaCafeSuave2].linkCompra}" class="btn btn-primary">Pagar</a>
                    </div>`)
    
                break;
                case "3":
                let opcionDescafeinada3 = Number;
    
                const galeriaCafeSuave3 = [
                    {
                        cafeSeleccionado: "Bolsa de 1/4 molido - Descafeinado",
                        info:"Listo para preparar (para cafeteras con filtro de tela) ",
                        foto:"./img/cafePaquete.jpg",
                        linkCompra:"#"
                    }
                ];
    
                const indiceGaleriaCafeSuave3 = Math.floor(Math.random()*galeriaCafeSuave3.length)
    
                document.write(`<div class="card">
                    <img src=${galeriaCafeSuave3[indiceGaleriaCafeSuave3].foto} alt=${galeriaCafeSuave3[indiceGaleriaCafeSuave3].cafeSeleccionado}>
                    <h2>${galeriaCafeSuave3[indiceGaleriaCafeSuave3].cafeSeleccionado}</h2>
                    <p class="card-text">${galeriaCafeSuave3[indiceGaleriaCafeSuave3].info}</p>
                    <a href="${galeriaCafeSuave3[indiceGaleriaCafeSuave3].linkCompra}" class="btn btn-primary">Pagar</a>
                    </div>`)
    
                break;

                default: 
                    alert("Elije una opcion valida");
                    opcionSuaveDescafeinado();
    }
}

function opcionSuaveColombia(){
    let op = prompt(`Como le preparamos su cafe?:
        1: Para llevar
        2: Para tomar en el local
        3: Paquete de 1/4 molido
        
        Ingrese 1, 2 o 3.`);
    switch(op){
        case "1":
            let opcionColombia = Number;

            const galeriaCafeSuaveC1 = [
                {
                    cafeSeleccionado: "Vaso TakeAway - Colombia",
                    info:"Ideal para tomar en el camino",
                    foto:"./img/cafeTakeAway.jpg",
                    linkCompra:"#"
                },
            ];

            const indiceGaleriaCafeSuaveC1 = Math.floor(Math.random()*galeriaCafeSuaveC1.length);

            document.write(`<div class="card">
                <img src=${galeriaCafeSuaveC1[indiceGaleriaCafeSuaveC1].foto} alt=${galeriaCafeSuaveC1[indiceGaleriaCafeSuaveC1].cafeSeleccionado}>
                <h2>${galeriaCafeSuaveC1[indiceGaleriaCafeSuaveC1].cafeSeleccionado}</h2>
                <p class="card-text">${galeriaCafeSuaveC1[indiceGaleriaCafeSuaveC1].info}</p>
                <a href="${galeriaCafeSuaveC1[indiceGaleriaCafeSuaveC1].linkCompra}" class="btn btn-primary">Pagar</a>
                </div>`)

            break;
            case "2":
                let opcionColombia2 = Number;
    
                const galeriaCafeSuaveC2 = [
                    {
                        cafeSeleccionado: "Cafe doble - Colombia",
                        info:"Para disfrutar sentado leyendo un libro",
                        foto:"./img/cafeSalon.jpg",
                        linkCompra:"#"
                    },
                ];
    
                const indiceGaleriaCafeSuaveC2 = Math.floor(Math.random()*galeriaCafeSuaveC2.length)
    
                document.write(`<div class="card">
                    <img src=${galeriaCafeSuaveC2[indiceGaleriaCafeSuaveC2].foto} alt=${galeriaCafeSuaveC2[indiceGaleriaCafeSuaveC2].cafeSeleccionado}>
                    <h2>${galeriaCafeSuaveC2[indiceGaleriaCafeSuaveC2].cafeSeleccionado}</h2>
                    <p class="card-text">${galeriaCafeSuaveC2[indiceGaleriaCafeSuaveC2].info}</p>
                    <a href="${galeriaCafeSuaveC2[indiceGaleriaCafeSuaveC2].linkCompra}" class="btn btn-primary">Pagar</a>
                    </div>`)
    
                break;
                case "3":
                let opcionColombia3 = Number;
    
                const galeriaCafeSuaveC3 = [
                    {
                        cafeSeleccionado: "Bolsa de 1/4 molido - Colombia",
                        info:"Listo para preparar (para cafeteras con filtro de tela) ",
                        foto:"./img/cafePaquete.jpg",
                        linkCompra:"#"
                    }
                ];
    
                const indiceGaleriaCafeSuaveC3 = Math.floor(Math.random()*galeriaCafeSuaveC3.length)
    
                document.write(`<div class="card">
                    <img src=${galeriaCafeSuaveC3[indiceGaleriaCafeSuaveC3].foto} alt=${galeriaCafeSuaveC3[indiceGaleriaCafeSuaveC3].cafeSeleccionado}>
                    <h2>${galeriaCafeSuaveC3[indiceGaleriaCafeSuaveC3].cafeSeleccionado}</h2>
                    <p class="card-text">${galeriaCafeSuaveC3[indiceGaleriaCafeSuaveC3].info}</p>
                    <a href="${galeriaCafeSuaveC3[indiceGaleriaCafeSuaveC3].linkCompra}" class="btn btn-primary">Pagar</a>
                    </div>`)
    
                break;

                default: 
                    alert("Elije una opcion valida");
                    seleccionarVariedadSuave();
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
            opcionSuaveColombia();
            break;
        default:
            alert("Elija una opcion valida");
            seleccionarVariedadSuave();

    }
}

//Intensidad Intermedio
function opcionIntermedioSelecto(){
    let op = prompt(`Como le preparamos su cafe?:
    1: Para llevar
    2: Para tomar en el local
    3: Paquete de 1/4 molido
    
    Ingrese 1, 2 o 3.`);
    switch(op){
        case "1":
            let opcionSelecto = Number;

            const galeriaCafeIntermedioS1 = [
                {
                    cafeSeleccionado: "Vaso TakeAway - Selecto",
                    info:"Ideal para tomar en el camino",
                    foto:"./img/cafeTakeAway.jpg",
                    linkCompra:"#"
                }
            ];

            const indiceGaleriaCafeS1 = Math.floor(Math.random()*galeriaCafeIntermedioS1.length);

            document.write(`<div class="card">
            <img src=${galeriaCafeIntermedioS1[indiceGaleriaCafeS1].foto} alt=${galeriaCafeIntermedioS1[indiceGaleriaCafeS1].cafeSeleccionado}>
            <h2>${galeriaCafeIntermedioS1[indiceGaleriaCafeS1].cafeSeleccionado}</h2>
            <p class="card-text">${galeriaCafeIntermedioS1[indiceGaleriaCafeS1].info}</p>
            <a href="${galeriaCafeIntermedioS1[indiceGaleriaCafeS1].linkCompra}" class="btn btn-primary">Pagar</a>
            </div>`)

        break;
        case "2":
            let opcionSelecto2 = Number;

            const galeriaCafeIntermedioS2 = [
                {
                    cafeSeleccionado: "Cafe doble - Selecto",
                    info:"Para disfrutar sentado leyendo un libro",
                    foto:"./img/cafeSalon.jpg",
                    linkCompra:"#"
                },
            ];

            const indiceGaleriaCafeS2 = Math.floor(Math.random()*galeriaCafeIntermedioS2.length);

            document.write(`<div class="card">
            <img src=${galeriaCafeIntermedioS2[indiceGaleriaCafeS2].foto} alt=${galeriaCafeIntermedioS2[indiceGaleriaCafeS2].cafeSeleccionado}>
            <h2>${galeriaCafeIntermedioS2[indiceGaleriaCafeS2].cafeSeleccionado}</h2>
            <p class="card-text">${galeriaCafeIntermedioS2[indiceGaleriaCafeS2].info}</p>
            <a href="${galeriaCafeIntermedioS2[indiceGaleriaCafeS2].linkCompra}" class="btn btn-primary">Pagar</a>
            </div>`)
        
        break;
        case "3":
            let opcionSelecto3 = Number;

            const galeriaCafeIntermedioS3 = [
                {
                    cafeSeleccionado: "Bolsa de 1/4 molido - Selecto",
                    info:"Listo para preparar (para cafeteras con filtro de tela) ",
                    foto:"./img/selecto.jpg",
                    linkCompra:"#"
                }
            ];

            const indiceGaleriaCafeS3 = Math.floor(Math.random()*galeriaCafeIntermedioS3.length);

            document.write(`<div class="card">
            <img src=${galeriaCafeIntermedioS3[indiceGaleriaCafeS3].foto} alt=${galeriaCafeIntermedioS3[indiceGaleriaCafeS3].cafeSeleccionado}>
            <h2>${galeriaCafeIntermedioS3[indiceGaleriaCafeS3].cafeSeleccionado}</h2>
            <p class="card-text">${galeriaCafeIntermedioS3[indiceGaleriaCafeS3].info}</p>
            <a href="${galeriaCafeIntermedioS3[indiceGaleriaCafeS3].linkCompra}" class="btn btn-primary">Pagar</a>
            </div>`)

        break;
        default:
            alert("Elije una opcion valida");
            opcionIntermedioSelecto();
    }
}

function seleccionarVariedadIntermedio(){
    let op = prompt(`Los cafes intermedios que tenemos son:
    1: Selecto
    2: Brasil.
    
    Ingrese 1 o 2.`)
    switch(op){
        case "1" :
            let variedadItermedioSelecto = Number;
            opcionIntermedioSelecto();
            break;
        case "2" :
            let varierdadIntermedioBrasil = Number;
            opcionIntermedioBrasil();
            break;
            default:
                alert("Elija una opcion valida");
                seleccionarVariedadIntermedio();
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
            alert("Ingrese una de las opciones validas");
            seleccionarIntensidad();
    }
}

function elegirRespuesta(respuesta){
    if(respuesta == 'si'){
        seleccionarIntensidad();
    }else{
        alert("Que tenga un buen dia!");
    }
}

function tomarDecision(bienvenida){
    if(bienvenida){
        let respuesta = prompt("¿Querés una recomendacion de Café?  SI / NO").toLowerCase();
        elegirRespuesta(respuesta);
    }
}

function iniciarRecomendacion(){
    let bienvenida = confirm("--------Bienvenido a CafeMartinez Online--------");
    tomarDecision(bienvenida)
}

iniciarRecomendacion();
