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
					  <li class="active"><a href="designer.php"><i class="fa fa-font fa-fw"></i> Add Text</a></li>
					  <li><a href="designer2.php"><i class="fa fa-plus-square fa-fw"></i> Add Logo</a></li>
					</ul>
					<div class="design-text-elements">
						<input type="text" id="design-print-text" placeholder="Please Enter text" />
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

						<div class="design-font-family-holder">
							<ul id="menu">
								<li>Select Font
									<ul>
										<li class="fonts singlet">Singlet</li>
										<li class="fonts gochi">Gochi Hand</li>
										<li class="fonts nova">Nove Square</li>
										<li class="fonts elite">Special Elite</li>
										<li class="fonts joti">Joti One</li>
										<li class="fonts ptsans">PT Sans</li>
										<div class="clear" style="clear:both"></div>
									</ul>
								</li>
							</ul>
							
												
						</div>						
						
					</div>
					
				</div>
				<div class="design-canvas-configure">
					<canvas id="t-drav" width="550" height="400"></canvas>
					<div class="design-nav-buttons">
						<button type="button" class="btn design-addtocart">Add to Cart</button>
						<button type="button" class="btn design-addposition">Add to Different Postion</button>
						<button type="button" class="btn total-price">Total Price</button>
						<button type="button" class="btn remove-text">Remove Text</button>
					</div>
				</div>
			</div>
			<div class="clear" style="clear:both"></div>
		</div>
		
	</body>
</html>
