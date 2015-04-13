$(document).ready(function(){
	$('.slider').glide({
		autoplay:false,
		arrows:false,
	});


	$('.qtyplus').click(function(e){
        fieldName = $(this).attr('field');
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        if (!isNaN(currentVal)) {
            $('input[name='+fieldName+']').val(currentVal + 1);
        } else {
            $('input[name='+fieldName+']').val(0);
        }
        return false;
    });
    $(".qtyminus").click(function(e) {
        fieldName = $(this).attr('field');
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        if (!isNaN(currentVal) && currentVal > 0) {
            $('input[name='+fieldName+']').val(currentVal - 1);
        } else {
            $('input[name='+fieldName+']').val(0);
        }
        return false;

    });


    $('.product__information .title').on('click', function(){
    	$(this).parent().toggleClass('open');
    });
});