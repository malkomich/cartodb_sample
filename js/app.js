const request = require('request');

const stations = "ListaEESSPrecio";
const cp = "C.P.";
const address = "Dirección";
const schedule = "Horario";
const lat = "Latitud";
const lon = "Longitud";
const location = "Localidad";
const town = "Municipio";
const province = "Provincia";
const brand = "Rótulo";
const biodiesel = "Precio Biodiesel";
const bioethanol = "Precio Bioetanol";
const compressed_gas = "Precio Gas Natural Comprimido";
const liquefied_gas = "Precio Gas Natural Licuado";
const diesel = "Precio Gasoleo A";
const diesel_plus = "Precio Nuevo Gasoleo A";
const petrol_95 = "Precio Gasolina 95 Protección";
const petrol_98 = "Precio Gasolina  98";

var url = 'https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/';

request({
  method: 'GET',
  url: url,
  json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {

      for (var index in body[stations] ) {
        var station = body[stations][index];

        if (station.hasOwnProperty(address)) {
          console.log(station[address]);
        }

        if(station.hasOwnProperty(petrol_95) && station[petrol_95] != null) {
          var p95 = parseFloat(station[petrol_95].replace(',', '.'));
          console.log(p95);
        } else {
          console.log("Oil 95 not available.");
        }
      }
    }
})
