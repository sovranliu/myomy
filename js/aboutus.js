
$(document).ready(function(){
  $("#js_dropdown").click(function(){
    var url = $("#js_dropdown").css("background-image");
    var bg = $('.bg-mast');

    if(url.match("close")){
    	$("#js_dropdown").removeClass('closenav').addClass('opennav');
    	bg.hide();
    }
    else{
    	$("#js_dropdown").removeClass('opennav').addClass('closenav');
    	bg.show();
    }
  });
});
