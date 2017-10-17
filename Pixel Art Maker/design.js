$(document).ready(function(){
	$('#btnSubmit').click(function(){
		makeGrid();
	});

	function makeGrid()
	{
		try
		{			
			var c = $('#myCanvas')[0]; 
			var ctx = c.getContext('2d');

			//clear canvas before drawing new grid
			ctx.clearRect(0,0,c.width,c.height);

			var rows = $('#gridHeight').val();
			var columns = $('#gridWidth').val();
            
            var space = 10;
            var x = 10;
            var y = 10;

            ctx.beginPath();
			//row
			for(var i=0; i<rows; i++)
			{
				//column
				for(var j=0; j<columns; j++)
				{	
					ctx.rect(x,y,10,10,'rect_'+i+'_'+j);
					x = x +space;
				}

				x=10;
				y = y + space;
			}		
			
			ctx.stroke();
            ctx.closePath();

			$('#myCanvas').on('click',function(){

			});
		}
		catch(err)
		{
			alert(err);
		}
		
	}		
});