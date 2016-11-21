//jquery
$(function(){
	//1.スムーススクロール
    $('a[href^=#]').click(function(){
    	
    	var speed = 400;
    	var href = $(this).attr("href");
    	var position = $(href).offset().top;
    	
    	$('body,html').animate({scrollTop:position}, speed, 'linear');
    	return false;
    	
    });
    
    
    //2 スクロールが始まったらボタン表示
    $(window).scroll(function(){
	var footer=$(".l_footer_nav");
	var fixedClass 	= 'is_fixed';
	if($(this).scrollTop() >300){
	footer.addClass(fixedClass).fadeIn();
	}else{
	footer.removeClass(fixedClass).fadeOut();

	}

	});

/*    
    $(window).scroll(function () {
    	var footer = $(".l_footer_nav");
    	var fixedClass 	= 'is_fixed';
        if ($(this).scrollTop() > 300) {
            footer.addClass(fixedClass).fadeIn(3000);
        } else {
           footer.removeClass(fixedClass).fadeOut(3000);
        }
    });
    */
        
});
