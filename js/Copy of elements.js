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
					
						
						
										
						canvas.add(userText[$(this).index()]);
						
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
					//canvas.add(activeElement);
					canvas.renderAll();
					
				}
				else {
					alert('Please select the text that you want to customize');
				}

				

			});
			
			
			//Adding color to the text
			$('.design-color-palette').click(function(){
				
				//variable that says which elements is an active element
				var activeElement = canvas.getActiveObject();
				
				if(activeElement) {
					
					activeElement.setColor($(this).data('color'));
					//canvas.add(activeElement);
					canvas.renderAll();
					
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
					canvas.renderAll();
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
					//canvas.add(activeElement);
					canvas.renderAll();
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
					//canvas.add(activeElement);
					canvas.renderAll();
				}
				else {
					alert('Please select the element in the design');
				}
				
			});	
			
			
			
			
			
			//variable to manage only one logo in the canavas
			var toggle = 1;
			var myImage = new Array();
			//adding an image to the canvas
			$(document).on( "click", ".design-picture img", function(){
				
				
				//the image src which will generate the image
				var selectedImage = $(this).attr('src');
				
				
				fabric.Image.fromURL(selectedImage,
								function(oImg) {
											 	
										if(canvas.getObjects().length < 2){	 
											
											switch(toggle) {
												case 1:
											 		myImage[toggle] = oImg;
											 		toggle =2;
											 		oImg.scaleToWidth(200);
											 		canvas.remove(myImage[2]);
											 		canvas.add(oImg);
											 		break;
												case 2:
											 		myImage[toggle] = oImg;
											 		toggle =1;
											 		oImg.scaleToWidth(200);
											 		canvas.remove(myImage[1]);
											 		canvas.add(oImg);
											 		break;
											 	default: 
											 		console.log('I am in default now');
											 		
												}																													
											} 
											else {
												alert('You can add only one LOGO at a time');
											}	
				 				

							});
				});
				
				
				//getting the values of the canvas for the site owner
				$('.design-addtocart').click(function(){
					//console.log(JSON.stringify(canvas));
					canvas.renderAll();
					console.log(canvas.toSVG());
				});
				
				
				//getting clicked on select other position
			     $('.design-addposition').click(function(){
			     
			   
			      if( canvas.getObjects().length < 2 )
			       {
			        alert("Please select one image.");
			       }
			       else
			       {
			        //here modiFiedUrl is the url defined in the addLogo.phtml so that we can use a php url here in javascript
			        var a = canvas.getObjects();
			        var xmlData = canvas.toSVG();
			        
			         $.ajax({
				            type: "POST",
				            url:"please specify url here",
				            data: xmlData,
				            beforeSend:function(){
				                // this is where we append a loading image
				                $('').html('');
				              },
				            success:function(result){
				                
								console.log(result);
				                $("").html('');
				                return false;
			            }});
			        
			        
			        	var url = canvas.item(1).getSrc();
			        	
			        	
			        	var temp = url.indexOf("temp");
			        	
			        	
			        	var ImageName = url.substr(temp+5);    
			       }
			     });
				

	});
	
	
	
	
	//functions which is for file upload
	
	 function fileSelected() {
        var file = document.getElementById('fileToUpload').files[0];
        if (file) {
          var fileSize = 0;
          if (file.size > 1024 * 1024)
            fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
          else
            fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + 'KB';

          document.getElementById('fileName').innerHTML = 'Name: ' + file.name;
          document.getElementById('fileSize').innerHTML = 'Size: ' + fileSize;
          document.getElementById('fileType').innerHTML = 'Type: ' + file.type;
        }
      }

      function uploadFile() {
        var fd = new FormData();
        fd.append("fileToUpload", document.getElementById('fileToUpload').files[0]);
        var xhr = new XMLHttpRequest();
        xhr.upload.addEventListener("progress", uploadProgress, false);
        xhr.addEventListener("load", uploadComplete, false);
        xhr.addEventListener("error", uploadFailed, false);
        xhr.addEventListener("abort", uploadCanceled, false);
        xhr.open("POST", "upload.php");
        xhr.send(fd);
      }

      function uploadProgress(evt) {
        if (evt.lengthComputable) {
          var percentComplete = Math.round(evt.loaded * 100 / evt.total);
          document.getElementById('progressNumber').innerHTML = percentComplete.toString() + '%';
        }
        else {
          document.getElementById('progressNumber').innerHTML = 'unable to compute';
        }
      }

      function uploadComplete(evt) {
        /* This event is raised when the server send back a response */
        //alert(evt.target.responseText);
        
        //position of the div where image will be added
        var addImagePosition;
        
        for(i = 0; i<6; i++){
        	console.log('I am inside the loop');
        	console.log(i);
        	if($('.design-picture img')[i] == undefined){
        		
        		console.log(i);
        		addImagePosition = i;
        		//console.log(addImagePosition);
        		console.log($('.design-picture')[addImagePosition]);
        		
        		//div where we want to add the uploaded image
        		var desiredDiv = $('.design-picture')[addImagePosition];
        		
        		desiredDiv.innerHTML = '<img src="'+evt.target.responseText+'" alt="logo" style="width: 60px;">';
        		break;
        	}
        	else if(i==5){
        		alert('you can upload maximum 6 images');
        	}
        	
        }
        
      }

      function uploadFailed(evt) {
        alert("There was an error attempting to upload the file.");
      }

      function uploadCanceled(evt) {
        alert("The upload has been canceled by the user or the browser dropped the connection.");
      }

		
	//function to remove pic
	function removePic(){
		$('.design-picture')[5].innerHTML = '';
	}
	
	
