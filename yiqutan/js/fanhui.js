/*点击左箭头，返回上一页*/
var cb = document.getElementById('zuojian')
cb.onclick = function(){
    // window.location.reload();    //刷新  
            //  window.history.go(1);         //前进  
             // window.history.go(-1);        //返回+刷新  
             // window.history.forward();  //前进  
              window.history.back();       //返回  
}

 /*点击三杠导航栏滑出*/
$(document).ready(function(){

  $("#sangang").click(function(){
  
  var div = $("#daohangh");
  
  if(div.hasClass("dest")) {
	div.removeClass("dest").animate({left:"100%"});
	} else {
	
	div.addClass("dest").animate({left:"40%"});
	
  }
  })
  })
  

 
 /*轮播代码*/
  $(document).ready(function(e) {
    var unslider04 = $('#b04').unslider({
		dots: true
	}),
	data04 = unslider04.data('unslider');
	/*
	$('.unslider-arrow04').click(function() {
        var fn = this.className.split(' ')[1];
        data04[fn]();
    });
	*/
	
	$("#lunbo").on("touchstart", function(e) {
    e.preventDefault();
    startX = e.originalEvent.changedTouches[0].pageX,
    startY = e.originalEvent.changedTouches[0].pageY;
	});
	$("#lunbo").on("touchmove", function(e) {
    e.preventDefault();
    moveEndX = e.originalEvent.changedTouches[0].pageX,
    moveEndY = e.originalEvent.changedTouches[0].pageY,
    X = moveEndX - startX,
    Y = moveEndY - startY;
      
    if ( Math.abs(X) > Math.abs(Y) && X > 0 ) {
       // alert("left 2 right");
		 data04["prev"]();
		//unslider.prev();
    }
    else if ( Math.abs(X) > Math.abs(Y) && X < 0 ) {
       // alert("right 2 left");
	   //unslider.next();
	    data04["next"]();
    }	
	});
  })