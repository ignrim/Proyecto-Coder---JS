$('#calcular').click(function () {
  var deposito = $('#capital').val();
  var tna = 42 / 100;
  var duracion = $('#duracion').val();
 
 
  if(deposito!='' && tna!='' && duracion>='30'){
  var cf = deposito * (1 + tna * (duracion / 365));
var interes =  cf - deposito;
        if (cf >= 1000) {
        $('#calc_result').text('$' + cf.toFixed(2));
        $('#calc_interes').text('$' + interes.toFixed(2));
        $('#tna').text(tna.toFixed(2)+"%");
        $('#dias').text( duracion + ' días');
        $('#monto').text('$' + deposito);
        $('#clac_error').text('');
        $('#duracion').removeClass('danger');
        $('#capital').removeClass('danger');
    } 
    else {
      $('#capital').addClass('danger');
      $('#clac_error').text('Ingrese valor mayor a $1000.');
      
    }
    
  }else{
      $('#clac_error').text('Ingrese un valor de días mayor a 30');
      $('#duracion').addClass('danger');
  }

});