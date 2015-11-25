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
		$('#dowebok').fullpage({
			afterRender:function(){
				document.getElementById('home-main-video').play();
			},
	    	afterLoad: function(anchorLink, index){
				if(index == 1 || index == 4){
					$('.mainnav').animate({top:"-82px"});
					$('.title_3').hide().removeClass('fadeInLeft animated');
					$('.title_4').hide().removeClass('fadeInDown animated');
					$('#s2,#s3').removeClass('colorful').addClass('blackwhite');
					//$('#s3').removeClass('colorful').addClass('blackwhite');
				}
				if(index == 2){
					$('.mainnav').animate({top:"0px"});
					$('.title_3').show().addClass('fadeInLeft animated');
					$('.title_4').hide().removeClass('fadeInDown animated');
					$('#s2').removeClass('blackwhite').addClass('colorful');
					$('#s3').removeClass('colorful').addClass('blackwhite');
				}
				if(index == 3){
					if($('.mainnav').css('top') == '-82px'){
						$('.mainnav').animate({top:"0px"});
						$('.title_3').hide().removeClass('fadeInLeft animated');
					}
					$('.title_4').show().addClass('fadeInDown animated');
					$('#s3').removeClass('blackwhite').addClass('colorful');
					$('#s2').removeClass('colorful').addClass('blackwhite');
				}
			},
	    });
	    $('.carousel').carousel({
	  		interval: false
		});
		setPadding();
		$('.item').find('img').hover(function() {
			$(this).animate({
				  'width':'150px',
				  'height':'130px',
				  'marginTop': '-45px'
			});
			setPadding();
		},
		function(){
			$(this).animate({
				  'width':'100px',
				  'height':'100%',
				  'marginTop': '0'
			});
		});
		function setPadding() {
			var index = $('#myCarousel .active').find('div').length,
				lineWidth = $('.item').width(),
				padWidth = (lineWidth - 110*index)/2;
				console.log(index);
			$('.item').css('padding-left',padWidth + 'px');
		}
	}

	//play vedio
	var video = document.getElementById('home-main-video'),
		pausebtn = $("#main-video-pause"),
		playbtn = $("#main-video-play");
	$(".home-title img").on('click',function(){
		if(video.paused) {
			video.play();
			playbtn.hide();
			pausebtn.css('display','block');
		}
		else {
			video.pause();
			pausebtn.hide();
			playbtn.css('display','block');
		}
	});
	
});