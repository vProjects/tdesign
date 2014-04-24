/**
 * @author vasu naman
 */
		
		 $(document).ready(function() 
		 {
		    var canvas = new fabric.Canvas('t-drav');
			
			// create a rectangle object
			var rect = new fabric.Rect({
			  left: 100,
			  top: 50,
			  fill: 'red',
			  width: 350,
			  height: 300
			});
			
			//here we initialize the text to stay on the page and we add that to the canavas
			var userText = new fabric.Text('',{
							left: 100,
							top: 100,
							fontSize: 20,
							fontFamily: 'Comic Sans'
						});
			
			
			
			// "add" rectangle onto canvas
			canvas.add(rect);
			rect.set('selectable', false); 
			
			
			//global variables
			var designButtonClick = 0;
			// variable through userText will be accessed
			var i = 0;

			
			$('.design-print-text').change(function(){
				
				var designText = $(this).val().trim();
				//maximum no. of lines a user can add
				var userText = new Array();
				
				if(canvas.getObjects().length < 4){
					if($(this).index() == 0){
						userText[$(this).index()] = new fabric.Text(designText,{
											left: 100,
											top: 100,
											fontSize: 40,
											fontFamily: 'Comic Sans'
										});
					}
					
					if($(this).index() == 1){
						userText[$(this).index()] = new fabric.Text(designText,{
											left: 100,
											top: 150,
											fontSize: 40,
											fontFamily: 'Comic Sans'
										});
					}
					
					if($(this).index() == 2){
						userText[$(this).index()] = new fabric.Text(designText,{
											left: 100,
											top: 200,
											fontSize: 40,
											fontFamily: 'Comic Sans'
										});
					}
					
						
						console.log('added');
										
						canvas.add(userText[$(this).index()]);
						
						
						console.log(userText[$(this).index()]);
						console.log(userText[$(this).index()].width);
						i++;
						if(i==4){
							i = 0;
						}
				
				}
					
					
			else {
					alert('You can add only three lines');
				}
				
				
			});
			
			
			
			//font selection using the font boxes
			$('.fonts').click(function(){
								
				//variable that says which elements is an active element
				var activeElement = canvas.getActiveObject();
				
				//fonts selected by the users
				var fontSelection = $(this).html();
				

				if(activeElement) {
					
					activeElement.setFontFamily(fontSelection);
					canvas.add(activeElement);
					
				}
				else {
					alert('Please select the text that you want to customize');
				}

				

			});
			
			
			//Adding color to the text
			$('.design-color-palette').click(function(){
				
				//variable that says which elements is an active element
				var activeElement = canvas.getActiveObject();
				
				console.log($(this).data('color'));

				if(activeElement) {
					
					activeElement.setColor($(this).data('color'));
					canvas.add(activeElement);
					
				}
				else {
					alert('Please select the text that you want to customize');
				}
			
			});
			
			
			//removing text from the canvas 
			$('.remove-text').click(function(){
				
				//variable that says which elements is an active element
				var activeElement = canvas.getActiveObject();
				if(activeElement){
					canvas.remove(activeElement);
				}
				else {
					alert('Please select any element to remove from the design');
				}
			});
			
			
			//changes font-size
			$('.design-font-size-holder').change(function(){
				var fontSize = $('.design-font-size-selectbox').val();
				var activeElement = canvas.getActiveObject();
				
				if(activeElement){
					activeElement.setFontSize(fontSize);
					canvas.add(activeElement);
				}
				else {
					alert('Please select the element in the design');
				}
			});
			
			
			//changes font-property
			$('.design-font-type').click(function(){
				var fontStyle = $(this).val();
				var activeElement = canvas.getActiveObject();
				
				if(activeElement){
					activeElement.setFontStyle(fontStyle);
					canvas.add(activeElement);
				}
				else {
					alert('Please select the element in the design');
				}
				
			});	
			
			
			
			
			
			//variable to manage only one logo in the canavas
			var toggle = 1;
			var myImage = new Array();
			//adding an image to the canvas
			$(document).on( "click", "'#holder img'", function(){
				
				
				console.log(canvas.getObjects().length); 
				//the image src which will generate the image
				var selectedImage = $(this).children().attr('src');
				console.log(selectedImage);
				
				

				
				
				fabric.Image.fromURL(selectedImage,
											 function(oImg) {
											 	
											 	
											 	if(toggle == 1 ){
											 		myImage[toggle] = oImg;
											 		console.log(myImage[toggle]);
											 		toggle =2;
											 		oImg.scaleToWidth(200);
											 		console.log('me in toggle one');
											 	}
											 	else if(toggle ==2){
											 		myImage[toggle] = oImg;
											 		toggle =1;
											 		oImg.scaleToWidth(200);
											 		console.log('me in toggle two');
											 	}
											 	
				 	canvas.add(oImg);
				 	if(canvas.getObjects().length > 2){
				 			//console.log(canvas.getObjects());
				 			//console.log(' myImage');
							canvas.remove(myImage[1]);
						}
				});
			});

		 });
