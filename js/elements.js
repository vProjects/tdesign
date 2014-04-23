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

			
			$('#design-print-text').change(function(){
				
				//maximum no. of lines a user can add
				var userText = new Array();
				
				if(canvas.getObjects().length < 4){
					var designText = $('#design-print-text').val().trim();
					

					
					switch (i){
						case 0:
								userText[i] = new fabric.Text(designText,{
													left: 100,
													top: 100,
													fontSize: 40,
													fontFamily: 'Comic Sans'
												});
								
													
								canvas.add(userText[i]);
								i++;
								break;
						case 1:
								userText[i] = new fabric.Text(designText,{
													left: 100,
													top: 150,
													fontSize: 40,
													fontFamily: 'Comic Sans'
												});
								
													
								canvas.add(userText[i]);
								i++;
								break;
						case 2:
								userText[i] = new fabric.Text(designText,{
													left: 100,
													top: 200,
													fontSize: 40,
													fontFamily: 'Comic Sans'
												});
								
													
								canvas.add(userText[i]);
								i++;
								break;
						default:
								if(canvas.getObjects().length < 4){
										userText[i] = new fabric.Text(designText,{
															left: 0,
															top: 0,
															fontSize: 40,
															fontFamily: 'Comic Sans'
														});
										
															
										canvas.add(userText[i]);
										i++;
										break;									
								}
								
						
					}
					
					console.log(i);
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
				canvas.remove(activeElement);
			});
			
			
			//adding an image to the canvas
			$('#holder').click(function(){
				
				
				console.log(canvas.getObjects().length); 
				//the image src which will generate the image
				var selectedImage = $(this).children().attr('src');
				var toggle = 1;
				
				fabric.Image.fromURL(selectedImage,
											 function(oImg) {
											 	
											 	
											 	if(toggle == 1 ){
											 		var myImage = oImg;
											 		toggle =2;
											 		console.log('me in toggle one');
											 	}
											 	else if(toggle ==2){
											 		var myImage2 = oImg;
											 		toggle =1;
											 		console.log('me in toggle two');
											 	}
											 	
				 	canvas.add(oImg);
				 	if(canvas.getObjects().length > 2){
				 			console.log(canvas.getObjects());
				 			console.log(' myImage');
							canvas.remove(myImage[canvas.getObjects().length -1]);
						}
				});
			});

		 });
