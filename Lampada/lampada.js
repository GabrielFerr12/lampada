const turnOn = document.getElementById ( 'turnOn' );
const turnOff = document.getElementById ( 'turnOff' );
const lamp = document.getElementById ( 'lamp' );

function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1
}

function lampOn () {
    if ( !isLampBroken () ) {
        lamp.src = 'https://fernandoleonid.github.io/mini-projetos-js/01-lamp/img/ligada.jpg';
    }
}

function lampOff () {
    if ( !isLampBroken () ) {
        lamp.src = 'https://fernandoleonid.github.io/mini-projetos-js/01-lamp/img/desligada.jpg';
    }
}

function lampBroken () {
    lamp.src = 'https://fernandoleonid.github.io/mini-projetos-js/01-lamp/img/quebrada.jpg';
}

turnOn.addEventListener ( 'click', lampOn );
turnOff.addEventListener ( 'click', lampOff );
lamp.addEventListener ( 'mouseover', lampOn );
lamp.addEventListener ( 'mouseleave', lampOff );
lamp.addEventListener ( 'dblclick', lampBroken );
