<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"

  "http://www.w3.org/TR/html4/strict.dtd">

<html lang="en">

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
	<title>cvi_busy_lib.js :: demo</title>

	<style type="text/css" media="all">

	@media screen, projection {

		body {background-color: #0000a0; color: #444;}

		h1, h2 {color: #0000a0; margin: .2em 0;}
		big {color: #0000a0;}
		img {

		  margin-right: 8px; 
		  width: 64px; 
		  height: 64px; 
		  border: 2px solid blue;   
		}
		small {font-size: 60%; color: red;}
		.wrapper {
		  margin: 3% 2%;
		  padding: 0;
		}

		.main {

		  width: 100%;

		  margin: 8px 0;

		  padding: 0;

		  color: #444;

		}

		.content {

		  width: 66%;        

		  float: left;        

		  margin: 0;

		  padding: 1% 2%;
		  background-color: #ccc;

		  border: 8px solid white;

		}

		.sidebar {

		  margin-left: 73%; 

		  padding: 1%;

		  font-size: 90%;
		  background-color: #fcc;

		  border: 8px solid white;
		  -moz-border-radius-bottomright: 32px;
		  -webkit-border-bottom-right-radius: 32px;		  

		}

		.clear {

		  clear: both;   

		  height: 1px;

		  overflow: hidden;  

		  margin: 0;          

		}
		.header {
		  background-color: #ccf; 
		  color: #444; 
		  font-size: 90%;
		  margin: 0; 
		  padding: .2em 2%;
		  border: 8px solid white;
		  -moz-border-radius-topleft: 16px;
		  -moz-border-radius-topright: 16px;
		  -webkit-border-top-left-radius: 16px;
		  -webkit-border-top-right-radius: 16px;
		}

		.footer {

		  background-color: #cfc;  

		  color: #444;

		  margin: 0;    
		  font-size: 90%;
		  padding: 1% 2%;
		  border: 8px solid white;
		  -moz-border-radius-topright: 32px;
		  -moz-border-radius-bottomleft: 16px;
		  -moz-border-radius-bottomright: 16px;
		  -webkit-border-top-right-radius: 32px;
		  -webkit-border-bottom-left-radius: 16px;
		  -webkit-border-bottom-right-radius: 16px;		  

		}
		a { outline: 0; -moz-outline: none; }			
	} 

	</style>

<!--[if IE 6]>
	<style type="text/css">

		.header, .sidebar {position:relative}
	</style>
<![endif]-->

	<script type="text/javascript" src="cvi_busy_lib.js"></script>
	<script type="text/javascript" charset="utf-8">
		var xval, tval, bval, rval, lval;
		function block_viewport() {
			xval=getBusyOverlay('viewport',{color:'blue', opacity:0.75, text:'viewport: loading...', style:'text-shadow: 0 0 3px black;font-weight:bold;font-size:16px;color:white'},{color:'#ff0', size:256, type:'o'});
			if(xval) {var c=0,t=100;
				xval.ntime=window.setInterval(function() {
					xval.settext('viewport: loading...'+c+'%'); c++; 
					if(c>t) {window.clearInterval(xval.ntime); xval.remove();}
				},50);
			}
		}
		function showajax(){
			try {lval.remove(); lval='';}catch(e) {lval=getBusyOverlay(this,{color:'black', opacity:0.5, text:'loading', style:'text-decoration:blink;font-weight:bold;font-size:12px;color:white'},{color:'#fff', size:128, type:'o'});}
		}
	</script>
</head>

<body>

<div class="wrapper">
	<h2><button onclick="block_viewport();"><big>Viewport</big></button> <small>[<i>click to add viewport overlay, will be removed after 5 seconds.</i>]</small></h2>
	<div id="top" class="header" onclick="try {tval.remove(); tval='';}catch(e) {tval=getBusyOverlay(this,{color:'blue',opacity:0.25});}">
		<h2>Top  <small>[<i>Click to add overlay and click again to remove.</i>]</small></h2>
		<p>Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum. Defacto lingo est igpay atinlay. Marquee selectus non provisio incongruous feline nolo contendre.</p>

	</div>

	<div class="main">

		<div id="left" class="content" onclick="try {lval.remove(); lval='';}catch(e) {lval=getBusyOverlay(this,{color:'black', opacity:0.5, text:'loading', style:'text-decoration:blink;font-weight:bold;font-size:12px;color:white'},{color:'#fff', size:128, type:'o'});}">
			<h1>Left  <small>[<i>Click to add overlay and click again to remove.</i>]</small></h1>
			<p><img src="images/spam.jpg" align="left" alt="0" />Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>

			<p>Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum. Defacto lingo est igpay atinlay. Marquee selectus non provisio incongruous feline nolo contendre.</p>

			<p>Gratuitous octopus niacin, sodium glutimate. Quote meon an estimate et non interruptus stadium. Sic tempus fugit esperanto hiccup estrogen. Glorious baklava ex librus hup hey ad infinitum. Non sequitur condominium facile et geranium incognito.</p>

		</div> 

		<div id="right" class="sidebar" onclick="try {rval.remove(); rval='';}catch(e) {rval=getBusyOverlay(this,{color:'white', opacity:0.5},{color:'#00f', size:32, type:'c', iradius:10, weight:6});}">

			<h2>Right</h2>
			<p><small>[<i>Click to add overlay and click again to remove.</i>]</small></p>
			<p>Gratuitous octopus niacin, sodium glutimate. Quote meon an estimate et non interruptus stadium.</p>

			<p>Sic tempus fugit esperanto hiccup estrogen. Glorious baklava ex librus hup hey ad infinitum. Non sequitur condominium facile et geranium incognito.</p>

		</div>

		<div class="clear"></div>

	</div>

	<div id="bottom" class="footer" onclick="try {bval.remove(); bval='';}catch(e) {bval=getBusyOverlay(this,{color:'green',opacity:0.25});}">
		<h2>Bottom  <small>[<i>Click to add overlay and click again to remove.</i>]</small></h2>
		<p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>

	</div>

	<div id="button" class="button"></div>

</div>

</body>

</html>

