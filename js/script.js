/*
    CONFIGURACIÓN PERSONALIZADA 
*/

//PARA AGREGAR O QUITAR EL BACKGROUND DEL MENU DE NAVEGACIÓN
window.onscroll = function() {
    const menu = document.getElementById('menuDeNavegacionPrincipal');
    if(window.scrollY > 250){
        menu.classList.add('bg-primary');
    }else{
        menu.classList.remove('bg-primary');
    }
};

//PARA CALCULAR EL TIEMPO RESTANTE UTILIZANDO LA LIBRERIA COUNTDOWN
function calcularTiempoRestante(mes, dia, hora, minuto, segundo){
    let ahora = new Date(); //Fecha Actual
    let concierto = new Date(2020, 7, 21); //Fecha del Evento
    let resultado = countdown(ahora, concierto); //Calculo la diferencia
    
    //Variables
    let meses = resultado.months;
    let dias = resultado.days;
    let horas = resultado.hours;
    let minutos = resultado.minutes;
    let segundos = resultado.seconds;
    //Cargo en la vista
    mes.innerHTML = meses;
    dia.innerHTML = dias;
    hora.innerHTML = horas;
    minuto.innerHTML = minutos;
    segundo.innerHTML = segundos;
    //console.log(`El resultado es: ${dias} días ${horas} horas ${minutos} minutos y ${segundos} segundos`);   
}

let mes = document.getElementsByClassName('meses')[0];
let dia = document.getElementsByClassName('dias')[0];
let hora = document.getElementsByClassName('horas')[0];
let minuto = document.getElementsByClassName('minutos')[0];
let segundo = document.getElementsByClassName('segundos')[0];

setInterval('calcularTiempoRestante(mes, dia, hora, minuto, segundo)', 1000);

/*
    CONFIGURANDO POLYFILLS
*/

let spy = new Gumshoe('#menuNavegacion a');