$(document).ready(function(){
	$('#btnSubmit').click(function(){
		makeGrid();
	});

	function makeGrid()
	{
		try
		{
			var c = document.getElementById("myCanvas");	
			var ctx = c.getContext('2d');

			// Create gradient
			var grd = ctx.createLinearGradient(0,0,200,0);
			grd.addColorStop(0,"red");
	        grd.addColorStop(1,"white");

	        // Fill with gradient
	     	ctx.fillStyle = grd;

	     	var x = 5;
	     	var y = 5;

	     	for(var i=0; i<40; i++)
	     	{
	     		x = x+9;
	     		ctx.fillRect(x,y,10,10);
				ctx.stroke();	
	     	}
					
		}
		catch(err)
		{
			alert(err);
		}
		
	}		
});