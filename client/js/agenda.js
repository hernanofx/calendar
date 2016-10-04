const EVENTS = [{
    id: 1,
    title: 'Realizar el trabajo',
    category: 'Trabajo',
    startdate: '2017-10-30T22:00:00.000Z',
    enddate: '2017-12-20T21:15:00.000Z',
    dueDate: '2016-08-06T22:00:00.000Z'
}, {
    id: 2,
    title: 'Ensayo en palermo',
    category: 'Banda',
    startdate: '2018-07-16T16:30:00.000Z',
    enddate: '2018-12-05T05:16:00.000Z',
    dueDate: '2016-06-16T23:00:00.000Z'
}, {
    id: 3,
    title: 'Partido de padel',
    category: 'Deporte',
    startdate: '2019-02-03T08:00:00.000Z',
    enddate: '2019-12-17T22:16:30.000Z',
    dueDate: '2016-10-31T00:00:00.000Z'
}, {
    id: 4,
    title: 'Juntada con amigos',
    category: 'Sociales',
    startdate: '2020-01-31T23:30:00.000Z',
    enddate: '2020-12-04T22:11:00.000Z',
    dueDate: '2016-03-23T01:00:00.000Z'
}, {
    id: 5,
    title: 'Reunion con el jefe',
    category: 'Trabajo',
    startdate: '2021-08-28T05:05:00.000Z',
    enddate: '2021-12-15T22:15:00.000Z',
    dueDate: '2016-01-28T02:00:00.000Z'
}, {
    id: 6,
    title: 'Partido de futbol',
    category: 'Deporte',
    startdate: '2022-06-24T19:23:00.000Z',
    enddate: '2022-12-26T22:19:10.000Z',
    dueDate: '2016-04-14T03:00:00.000Z'
}, {
    id: 7,
    title: 'Reunion amigos del colegio',
    category: 'Sociales',
    startdate: '2023-11-18T11:10:00.000Z',
    enddate: '2023-12-01T22:12:30.000Z',
    dueDate: '2016-03-20T04:00:00.000Z'
}, ];


//Función y variables de la fecha de carga  / de comienzo / finalizacion del evento
function addEventToAgenda(description, dueDate, category, startdate, enddate ) {
var dayOfMonth = dueDate.getDate(),
    monthNumber =  dueDate.getMonth(),
    year = dueDate.getFullYear(),
    dayOfWeek = dueDate.getDay(),
    hours = dueDate.getHours(),
    minutes = dueDate.getMinutes(),
    seconds = dueDate.getSeconds(),
    week = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'],
    pdayOfWeek = week[dayOfWeek],
    pdayOfMonth = dayOfMonth,
    month = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
    pMonth = month[monthNumber];

// Variables de la hora del comienzo del evento
var diaDelMes = new Date(startdate),
    diaDelMes2 = diaDelMes.getUTCDate(),
    numeroMes =  new Date(startdate),
    numeroMes = numeroMes.getUTCMonth(),
    año = new Date(startdate),
    año2 = año.getUTCFullYear(),
    diaDeSemana = new Date(startdate),
    diaDeSemana2 = diaDeSemana.getUTCDay(),
    horas = new Date(startdate),
    horas2 = horas.getUTCHours(),
    minutos = new Date(startdate),
    minutos2 = minutos.getUTCMinutes(),
    segundos = new Date(startdate),
    segundos2 = segundos.getUTCSeconds(),
    semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'],
    fdiasDeSemana = semana[diaDeSemana2],
    fdiaDelMes = diaDelMes2,
    meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
    fmeses = meses[numeroMes];

// Variables de la hora de finalización del evento
var diaDelMesF = new Date(enddate),
    diaDelMesF2 = diaDelMesF.getUTCDate(),
    numeroMesF =  new Date(enddate),
    numeroMesF = numeroMesF.getUTCMonth(),
    añoF = new Date(enddate),
    añoF2 = añoF.getUTCFullYear(),
    diaDeSemanaF = new Date(enddate),
    diaDeSemanaF2 = diaDeSemanaF.getUTCDay(),
    horasF = new Date(enddate),
    horasF2 = horasF.getUTCHours(),
    minutosF = new Date(enddate),
    minutosF2 = minutosF.getUTCMinutes(),
    segundosF = new Date(enddate),
    segundosF2 = segundosF.getUTCSeconds(),
    semanaF = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'],
    fdiasDeSemanaF = semanaF[diaDeSemanaF2],
    fdiaDelMesF = diaDelMesF2,
    mesesF = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
    fmesesF = mesesF[numeroMesF];

// Agrego los 0 cuando me pone una sola cifra
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (horas2 < 10) {
        horas2 = "0" + horas2;
    }
    if (minutos2 < 10) {
        minutos2 = "0" + minutos2;
    }
    if (segundos2 < 10) {
        segundos2 = "0" + segundos2;
    }

    if (horasF2 < 10) {
        horasF2 = "0" + horasF2;
    }
    if (minutosF2 < 10) {
        minutosF2 = "0" + minutosF2;
    }
    if (segundosF2 < 10) {
        segundosF2 = "0" + segundosF2;
    };

//  Se insertan los datos obtenidos en una tabla

jQuery('tbody').append(`
<tr class ="database1" id="database1">

        <td class="">
        <div class="">${fdiaDelMes} </div>
        <div class="">${fdiasDeSemana},${horas2}:${minutos2}</div>
        <div class="">${fmeses}, ${año2}</div>
        </div>
        </td>

        <td class="">
        <div class="">${fdiaDelMesF} </div>
        <div class="">${fdiasDeSemanaF}, ${horasF2}:${minutosF2}</div>
        <div class="">${fmesesF}, ${añoF2}</div>
        </td>

        <td class="">
        <div class="">
          ${description}
        </div>
        </td>

        <td class="">
        <div class="">
          ${category}
          </div>
          </td>

        <td class="">
        <div class="">${pdayOfMonth} </div>
        <div class="">${pdayOfWeek},${hours}:${minutes}:${seconds}</div>
        <div class="">${pMonth}, ${year}</div>
        </td>

</tr>

`);
}

// Sacamos los valores de los inputs y los agregamos a la función addEventToAgenda

jQuery('#add').on('click', function() {
var value_event = jQuery('#inputEventT').val();
var value_category = jQuery('#categoryInputT').val();
var value_startDate = jQuery('#startEventT').val();
var value_endDate = jQuery('#endEventT').val();


addEventToAgenda(value_event, new Date ( ), value_category, value_startDate, value_endDate);
});


EVENTS.forEach(function(event) {

var d = new Date(event.dueDate);
addEventToAgenda(event.title, d, event.category, event.startdate, event.enddate);

});
