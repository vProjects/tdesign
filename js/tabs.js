/* js to maintain tabs behaviour 
 * author: Vasu Naman
 */
$(document).ready(function(){
	$('.d-tabs').click(function(){
		
		console.log($(this).html());
		switch ($(this).html()){
			case 'Details':
				$('.design-product-desc').css({'display':'block'});
				$('.design-product-review-details').css({'display':'none'});
				$('.design-faq').css({'display':'none'});
				$('.logo-design').css({'display':'none'});
				break;	
			case 'Review':
				$('.design-product-desc').css({'display':'none'});
				$('.design-product-review-details').css({'display':'block'});
				$('.design-faq').css({'display':'none'});
				$('.logo-design').css({'display':'none'});
				
				break;
			case 'FAQ':
				$('.design-product-desc').css({'display':'none'});
				$('.design-product-review-details').css({'display':'none'});
				$('.design-faq').css({'display':'block'});
				$('.logo-design').css({'display':'none'});

				break;
			case 'Options':
				$('.design-product-desc').css({'display':'none'});
				$('.design-product-review-details').css({'display':'none'});
				$('.design-faq').css({'display':'none'});
				$('.logo-design').css({'display':'block'});

				break;


		}
		
	});
});