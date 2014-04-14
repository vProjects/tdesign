/**
 * @author vasu naman
 */
		
		 $(document).ready(function() 
		 {
		    var canvas = new fabric.Canvas('t-drav');
			
			// create a rectangle object
			var rect = new fabric.Rect({
			  left: 100,
			  top: 100,
			  fill: 'red',
			  width: 500,
			  height: 50
			});
			
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
			
			
			$('#design-print-text-add').click(function(){
				var designText = $('#design-print-text').val().trim();
				if(designButtonClick == 0){
					if(designText == ""){
						
						alert('please enter the text');
						
					}
					else {
						userText.setText(designText);
						canvas.add(userText);
					}
				designButtonClick++;	
				}//designButtonClick first time ends here
				
				else if(designButtonClick > 0){
					if(designText == ""){
						alert('please enter the text');
					}
					else {
						userText.setText(designText);
						canvas.add(userText);
					}
				}
				
								
			});
			
			
			//font selection using the font boxes
			$('.fonts').click(function(){
				var userTextValue = userText.getText();
				if(userTextValue == ''){
					alert('Please enter a text which you want to customize');
				}
				else {
					userText.setFontFamily($(this).html());
					canvas.add(userText);
				}
			});
			
			
			//Adding color to the text
			$('.design-color-palette').click(function(){
				console.log($(this).data('color'));
				var userTextValue = userText.getText();
				if(userTextValue == ''){
					alert('Please enter a text which you want to customize');
				}
				else {
					var userTextColor = $(this).data('color');
					userText.setColor($(this).data('color'));
					canvas.add(userText);
				}

			
			});

		 });
