$(function(){
	//fullpage
    $('#dowebok').fullpage();

    //series' detail
    $('.serie-plus').click(function(){
    	if($(".serie-plus").text()=='+'){
    		$(".serie-plus").text('x');
    		$(".serie-plus").parent().siblings().show();
    	}
    	else if($(".serie-plus").text()=='x'){
    		$(".serie-plus").text('+');
    		$(".serie-plus").parent().siblings().hide();
    	}
    	
    });
});