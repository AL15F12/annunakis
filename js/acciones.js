// JavaScript Document
	var panel ='<div data-role="panel" id="mipanel" data-theme="a" data-display="push"><div class="panel-content" align="center"> <h3>Menu</h3><img src="imagenes/ann.jpg" width="350" height="199"> <div data-role="controlgroup"> <a data-role="button" href="#Principal" class="vibrar">Principal</a> <a data-role="button" >Mitologia</a>  <a data-role="button"  class="vibrar">Ufologia y criptozoologia</a> <a data-role="button" href="#rep" class="vibrar">Reptilianos</a> </div> </div> </div>';
		
		$(document).on('pagebeforecreate', '[data-role=page]', function () {
  if ($(this).find('[data-role=panel]').length === 0) {
    $('[data-role=header]').before(panel);
  }
});



$(document).ready(function(e) {
 document.addEventListener("deviceready",function(){
  $('.vibrar').tap(function(){
    navigator.notification.vibrate(500);
  });
    $('.beep').tap(function(){
    navigator.notification.beep(1);
  });
 },false); //deviceready
}); //document ready

