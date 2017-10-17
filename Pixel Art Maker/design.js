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

			var rows = $('#gridHeight').val();
			var columns = $('#gridWidth').val();
            
            var space = 10;
            var x = 10;
            var y = 10;

			//row
			for(var i=0; i<rows; i++)
			{
				for(var j=0; j<=columns; j++)
				{	
					ctx.rect(x,y,10,10);
					x = x +space;
				}
				x=10;
				y = y + space;
			}			
			
			
			ctx.stroke();
		}
		catch(err)
		{
			alert(err);
		}
		
	}		
});