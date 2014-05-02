<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">

		<!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame
		Remove this if you use the .htaccess -->
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

		<title>Product Designer first step</title>
		<meta name="description" content="">
		<meta name="author" content="vasu naman">

		<meta name="viewport" content="width=device-width; initial-scale=1.0">
		<link rel="stylesheet" type="text/css" href="css/style.css" />
		<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
		<link href='http://fonts.googleapis.com/css?family=Sniglet|Gochi+Hand|Nova+Square|Special+Elite|Joti+One|PT+Sans+Caption' rel='stylesheet' type='text/css'>

		<!-- Replace favicon.ico & apple-touch-icon.png in the root of your domain and delete these references -->
		<link rel="shortcut icon" href="/favicon.ico">
		<link rel="apple-touch-icon" href="/apple-touch-icon.png">
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
		<script type="text/javascript">
			var color = 'red';
		</script>
		<script src="js/fabric.js" type="text/javascript"></script>
		<script src="js/elements.js" type="text/javascript"></script>	
		<script src="js/tabs.js" type="text/javascript"></script>


 <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
			
	</head>
	
	<body>
		<div class="design-canvas-area">
			<div class="design-menu">
				<div class="design-brand design-brand-active">Add Logo</div>
				<div class="design-devider"></div>
				<div class="design-brand">Add Text</div>
				<div class="design-devider"></div>
			</div>

			<div class="design-tabs">
				<div class="design-product-description d-tabs">Details</div>
				<div class="design-product-review d-tabs">Review</div>
				<div class="design-product-faq d-tabs">FAQ</div>
				<div class="design-product-option d-tabs">Options</div>
				<div class="clear" style="clear:both"></div>
			</div>
			
			<div class="design-area">
				<div class="design-configure">
					<ul class="nav nav-pills nav-stacked">
					  
					  <!--<li><a href="designer2.php"><i class="fa fa-plus-square fa-fw"></i> Add Logo</a></li>-->
					  <div class="clear" style="clear:both"></div>
					</ul>
					<div class="logo-design">
						<div class="design-text-elements">
	<!--						<div class="design-color-palette-holder">
	
								<h5>Text Color</h5>
								<div class="design-color-palette" data-color="000000" style="background: rgb(0,0,0);"></div>
								<div class="design-color-palette" data-color="ff0000" style="background: rgb(255,0,0);"></div>
								<div class="design-color-palette" data-color="00ff00" style="background: rgb(0,255,0);"></div>
								<div class="design-color-palette" data-color="0000ff" style="background: rgb(0,0,255);"></div>
								<div class="design-color-palette" data-color="ffff00" style="background: rgb(255,255,0);"></div>
								<div class="design-color-palette" data-color="00ffff" style="background: rgb(0,255,255);"></div>
								<div class="design-color-palette" data-color="ff00ff" style="background: rgb(255,0,255);"></div>
								<div class="design-color-palette" data-color="6699CC" style="background: rgb(192,192,192);"></div>
								<div class="design-color-palette" data-color="6600CC" style="background: #6600CC;"></div>
								<div class="design-color-palette" data-color="6699CC" style="background: #6699CC;"></div>
								<div class="design-color-palette" data-color="9900CC" style="background: #9900CC;"></div>
								<div class="clear" style="clear:both"></div>
	
							</div>
	-->
							<div class="design-picture-holder">
	
								<!-- file upload through file choose -->
	
								  <form id="form1" enctype="multipart/form-data" method="post" action="Upload.aspx">
								    <div class="row">
								      <label for="fileToUpload" class="desing-upload-logo" >Upload Your Logo</label>
								      <input type="file" name="fileToUpload" id="fileToUpload" onchange="fileSelected();"/>
								    </div>
								    <div id="fileName"></div>
								    <div id="fileSize"></div>
								    <div id="fileType"></div>
								    <div class="row">
								      <input type="button" onclick="uploadFile()" class="design-file-upload" value="Upload" />
										<input type="button" onclick="removePic()" value="Remove" />
	   							      <div class="clear" style="clear:both"></div>
								    </div>
								    <div id="progressNumber"></div>
								  </form>
	
								<div class="design-picture"><img src="images/ubuntu.png" alt="ubuntu"/> </div>
								<div class="design-picture"><img src="images/ubuntucircle.png" alt="ubuntucircle"/></div>
								<div class="design-picture"></div>
								<div class="design-picture"></div>
								<div class="design-picture"></div>
								<div class="design-picture"></div>
								
								
	
	<!--
	
								<article>
								  <div id="holder">
								  	Please Drag an image to upload
								  </div> 
								  <p id="upload" class="hidden"><label>Drag &amp; drop not supported, but you can still upload via this input field:<br><input type="file"></label></p>
								  <p id="filereader">File API &amp; FileReader API not supported</p>
								  <p id="formdata">XHR2's FormData is not supported</p>
								  <p id="progress">XHR2's upload progress isn't supported</p>
								  <p>Upload progress: <progress id="uploadprogress" min="0" max="100" value="0">0</progress></p>
								</article>
	-->
								<div class="clear" style="clear:both"></div>
							</div>
							
						</div>
					</div>
					<!-- logo design class end here -->
					<div class="design-product-desc">
						is baar modi sarkar
					</div>
					<!-- design-product-desc ends here -->
					<div class="design-product-review-details">
						is baar rahul sarkar
					</div>
					<!-- design-product-review ends here -->
					<div class="design-faq">
						is baar aam aadmin ki sarkar
					</div>
					<!-- design-faq ends here -->
					</div>
					<div class="design-canvas-configure">
						
						<canvas id="t-drav" width="350" height="350"></canvas>
						<div class="design-nav-buttons">
							<button type="button" class="btn design-addtocart">Add to Cart</button>
							<button type="button" class="btn design-addposition">Add to Different Postion</button>
							<button type="button" class="btn total-price">Total Price</button>
							<button type="button" class="btn remove-text">Remove Logo</button>
						</div>
					</div>
				</div>
			</div>
		
<!-- 	<script src="js/file.js" type="text/javascript"></script> -->	
	</body>
</html>
