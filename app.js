$(document).ready(function() {

  var url = 'https://api.darksky.net/forecast/';
  var key = '745bbc6acb39d01b414c339bb2e6e3d6';
  var cors = 'https://cors-anywhere.herokuapp.com/';
  var coords = {
    scl: '-33.4377968,-70.6504451',
    lmc: '-32.995786,-71.2665818',
  }
  var queryParams = ['exclude=[minutely,hourly,daily,alerts,flags]', 'lang=es', 'units=auto'];

  $('#select').on('change', function() {
    $.ajax({
      url: cors + url + key + '/' + coords[$(this).val()] + '?' + queryParams[0] + '&' + queryParams[1] + '&' + queryParams[2],
      method: 'GET'
    }).then(function(data) {
      console.log(data);
      $('#resumen').text(parseInt(data.currently.temperature) + 'º' + data.currently.summary);

    });
  });

  //function generarMapa({
    //var mymap = L.map('mapid').setView([51.505, -0.09], 13);

  })
})
