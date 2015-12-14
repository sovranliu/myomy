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
		function setPadding() {
			var index = $('#myCarousel .active').find('div').length,
				lineWidth = $('.item').width(),
				padWidth = (lineWidth - 110*index)/2;
			$('.item').css('padding-left',padWidth + 'px');
		};
		setPadding();
		// 设置视频高度
		if(!((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0))){
		$('#holder').height($('#masthead').height()-8);
		}
		var videoHeight = parseInt($(window).height());
		$('.home-title').css("top",((videoHeight-170-240)/2) + "px")
		function preloadimages(arr){
		    var newimages=[]
		    var arr=(typeof arr!="object")? [arr] : arr  //确保参数总是数组
		    for (var i=0; i<arr.length; i++){
		        newimages[i]=new Image()
		        newimages[i].src=arr[i]
		    }
		};
		//视频
		var video = document.getElementById('home-main-video-pc');
		var dom = $('.videowrap').get(0);
		$(dom).click(function(){
			if(video.paused){
				video.play();
			}else{
				video.pause();
			}
		});
		$('#main-video-play').click(function(e){
			e.stopPropagation();
			$('.video-wrap-fullscreen').css('visibility','visible');
			$('.video-wrap-fullscreen').append(' <video id="big-video" class="img img-responsive" loop="loop" preload="auto" controls src="../images/video.webm"></video>');
			var fullvideoHeight = parseInt($(window).height());
			document.getElementById('big-video').play();
			$('#big-video').css("height",fullvideoHeight+"px");
			video.pause();
		})
		$('.video-close').click(function(){
			$('.video-wrap-fullscreen').css('visibility','hidden');
			document.getElementById('big-video').pause();
			video.play();
		})
		preloadimages(['../images/homepage_products_color.jpg', '../images/homepage_products_black.jpg', '../images/homepage_stores_color.jpg','../images/homepage_stores_black.jpg'])
		$('#dowebok').fullpage({
			afterRender:function(){
				document.getElementById('home-main-video-pc').play();
			},
	    	afterLoad: function(anchorLink, index){
				if(index == 1 || index == 4){
					$('.mainnav').animate({top:"-82px"});
					$('.title_3').animate({'paddingTop':'200px'});
					$('.title_4').hide().removeClass('fadeInDown animated');
					$('#s2,#s3').removeClass('colorful').addClass('blackwhite');
				}
				if(index == 2){
					$('.mainnav').animate({top:"0px"});
					$('.title_3').animate({'paddingTop':'150px'});
					$('.title_4').hide().removeClass('fadeInDown animated');
					$('#s2').removeClass('blackwhite').addClass('colorful');
					$('#s3').removeClass('colorful').addClass('blackwhite');
				}
				if(index == 3){
					if($('.mainnav').css('top') == '-82px'){
						$('.mainnav').animate({top:"0px"});
					}
					$('.title_3').animate({'paddingTop':'200px'});
					$('.title_4').show().addClass('fadeInDown animated');
					$('#s3').removeClass('blackwhite').addClass('colorful');
					$('#s2').removeClass('colorful').addClass('blackwhite');
				}
			},
	    });
	    $('.carousel').carousel({
	  		interval: false
		});
		
		$('.item').find('img').hover(function() {
			$('.item').find('img').removeClass('on');
			$(this).stop().animate({
				  'width':'150px',
				  'height':'130px',
				  'marginTop': '-45px'
			});
			setPadding();
		},function(){
			$(this).stop().animate({
				  'width':'100px',
				  'height':'100%',
				  'marginTop': '0'
			});
		});
		$('.item').find('img').click(function() {
			var url = $(this).attr('src'),
				selecturl = 'url('+url+')';
			$('#s2').css('background-image',selecturl);
			$(this).addClass('on');
			setPadding();
		});
	}else{
		$('html,body').css('overflow','auto');
		var id = 'home-main-video-tw',
			play = 'main-video-play-tw',
			pause = 'main-video-pause-tw';
		//palyVideo(id,play,pause);
		swipe();
		checkImg();
		var defaultImg = $('.swipe-wrap').find('.wrap').eq(0).find('img').eq(0).attr('src');
		$('.img-wrap').find('.checkimg').attr('src',defaultImg);
	}

	//play vedio

	// function palyVideo(id,play,pause){
	// 	var video = document.getElementById(id),
	// 		pausebtn = $('#'+play),
	// 		playbtn = $('#'+pause);
	// 	$(".home-title img").on('click',function(){
	// 		if(video.paused) {
	// 			video.play();
	// 			pausebtn.hide();
	// 			playbtn.css('display','block');
	// 		}
	// 		else {
	// 			video.pause();
	// 			playbtn.hide();
	// 			pausebtn.css('display','block');
	// 		}
	// 	})
	// };
	function swipe() {
		var slider =
		  Swipe(document.getElementById('slider'), {
		    auto: false,
		    continuous: true,
		    callback: function(pos) {
		    	var sliders = $('.img-wrap').find('.sliders');
		    	var num = $('.swipe-wrap').find('.image').length,
		    		slidernum = Math.floor(num/3);
		    	if(pos == '0'){
		    		sliders.html('1-3');
		    	}
		    	if(pos == '1'){
		    		console.log(pos);
		    		sliders.html('4-6');
		    	}
		    	if(pos == '2'){
		    		sliders.html('7-'+num);
		    	}
			}
		  });
		var num = $('.swipe-wrap').find('.image').length;
		$('.img-wrap').find('.number').text(num);
	}
	//点击更换图片
	function checkImg(){
		$('.swipe-wrap').find('.image').click(function(){
			var img = $(this).attr('src');
			$('.img-wrap').find('.checkimg').attr('src',img);
		})
	}
});