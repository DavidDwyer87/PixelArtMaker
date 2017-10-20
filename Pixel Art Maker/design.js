$('#btnSubmit').click(function(){
	makeGrid();
});

function makeGrid()
{
	try
	{	
	    //get values from the textboxs		
		let rows = $('#gridHeight').val();
		let columns = $('#gridWidth').val();

		let table = $('#canvas_table');
		
		//clear table before adding new rows and columns
		table.empty();

		//rows
		for(let i=0; i<rows; i++)
		{
			table.append("<tr id=r"+i+"></tr>");
			//columns
			for(let j=0; j<columns; j++)
			{
				$('#r'+i).append("<td id='c"+i+"_"+j+"'></td>");
			}
		}

        //click event for each cell in the table
		$('td').on('click',function(){
			console.log($(this).css('background-color',$('#colorPicker').val()));
		});
	}
	catch(err)
	{
		alert(err);
	}
	
}