
$(function(){
  IsPC();
  
  function IsPC() {
      var userAgentInfo = navigator.userAgent;
      var Agents = ["Android", "iPhone",
                  "SymbianOS", "Windows Phone",
                  "iPad", "iPod"];
      var flag = true;
      for (var v = 0; v < Agents.length; v++) {
          if (userAgentInfo.indexOf(Agents[v]) > 0) {
              flag = false;
              break;
          }
      }
      return flag;
  }
  if(IsPC() == true){
    $('.container').css({"width":"90%!important","margin-left":"5%!important","max-width":"1596px!important"});
    if(parseInt($('.container').width()) >= 1596){
       $('.container').css("margin","0 auto!important");
    }
  }else{
    $('.container').css({"width":"100%","margin-left":0});
  }
    $('.bg-mast').click(function(){
        return false;
    })
  $("#js_dropdown").click(function(){
    var url = $("#js_dropdown").css("background-image");
    var bg = $('.bg-mast');
    if(url.match("close")){
    	$(this).removeClass('closenav').addClass('opennav');
    	bg.hide();
    }
    else{
    	$(this).removeClass('opennav').addClass('closenav');
    	bg.show();
    }
  });

  $(window).scroll(function(){
      var scrollTop = $(window).scrollTop();
      if(scrollTop >= 84+70+32){
          $('.mainnav').css({top:"0px"});
      }else{
          $('.mainnav').css({top:"-82px"});
      }
  });
  $(window).scroll(function(){
　　var scrollTop = $(this).scrollTop();
　　var scrollHeight = $(document).height();
　　var windowHeight = $(this).height();
　　if(scrollTop + windowHeight == scrollHeight){
　　　　$('.mainnav,.pronav').hide();
　　}
    else{
        $('.mainnav,.pronav').show();
    }
  });
    
});
