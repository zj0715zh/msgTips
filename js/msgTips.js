$(function() {
	window.ZouJieTips = function(options) {
		var defaults = {			
			timeOut : 3000,	//提示层显示的时间			
			msg : "fsdfsfds",	//显示的信息		
			speed : 300,	//滑动速度			
			type : "success"//提示类型（1、success 2、error 3、warning）
		};
		var options = $.extend(defaults,options);
		var bid = parseInt(Math.random()*100000);
		if($(".tip_container").length==0){
			$("body").prepend('<div id="tip_container'+bid+'" class="container tip_container"><div id="tip'+bid+'" class="mtip"><i class="micon"></i><span id="tsc'+bid+'"></span><i id="mclose'+bid+'" class="mclose"></i></div></div>');
		}
		var $tip_container = $("#tip_container"+bid)
		var $tip = $("#tip"+bid);
		var $tipSpan = $("#tsc"+bid);
		var $colse = $("#mclose"+bid);
		$tip.attr("class", options.type).addClass("mtip");	
		$tipSpan.html(options.msg);	
		$tip_container.slideDown(options.speed);
		window.timer = setTimeout(function (){
			// $tip_container.slideUp(options.speed);//隐藏
			$tip_container.remove();//移除
		}, options.timeOut);
		$tip_container.on("mouseover",function() {
			clearTimeout(window.timer);
		});
		
		$tip_container.on("mouseout",function() {
			window.timer = setTimeout(function (){
				$tip_container.slideUp(options.speed);
				$tip_container.remove();//移除
			}, options.speed);
		});
	
		$colse.on("click",function() {
			$tip_container.remove();
		});
	}
});