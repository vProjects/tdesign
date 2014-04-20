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
		<script src="js/fabric.js" type="text/javascript"></script>
		<script src="js/elements.js" type="text/javascript"></script>	


 <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
			
	</head>
	
	<body>
		<div class="design-canvas-area">
			<div class="design-menu">
				<div class="design-brand">BuyWork Wear</div>
				<div class="design-devider"></div>
			</div>
			
			<div class="design-area">
				<div class="design-configure">
					<ul class="nav nav-pills nav-stacked">
					  <li class="active"><a href="designer.html"><i class="fa fa-font fa-fw"></i> Add Text</a></li>
					  <li><a href="designer2.html"><i class="fa fa-plus-square fa-fw"></i> Add Logo</a></li>
					</ul>
					<div class="design-text-elements">
						<div class="design-color-palette-holder">
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
						
						<div class="design-picture-holder">
<!--
							<div class="design-picture"><img src="images/ubuntu.png" alt="ubuntu"/> </div>
							<div class="design-picture"><img src="images/ubuntucircle.png" alt="ubuntucircle"/></div>
							<div class="design-picture"></div>
							<div class="design-picture"></div>
							<div class="design-picture"></div>
							<div class="design-picture"></div>
-->

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
							<div class="clear" style="clear:both"></div>
						</div>
						
					</div>
					
				</div>
				<div class="design-canvas-configure">
					<canvas id="t-drav" width="550" height="400"></canvas>
				</div>
			</div>
		</div>
	<script src="js/file.js" type="text/javascript"></script>	
	</body>
</html>
