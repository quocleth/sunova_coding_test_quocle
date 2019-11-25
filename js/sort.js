//sort numbers function
function sortMileage(a, b)
{
	if(Number(a) > Number(b))
	{
		return true;
	}
	else
	{
		return false;
	}
}

//sort strings function
function sortString(a, b)
{
	if(a.toString().toLowerCase() > b.toString().toLowerCase())
	{
		return true;
	}
	else
	{
		return false;
	}
}

//sort table function
function sortData(n){
	var sorting, isSorted, table, rows, previousRow, nextRow;

	table = document.getElementsByTagName('table'); //get a table
	
	sorting = true; //set to true to keep sorting

	while(sorting)
	{
		sorting = false; // no more sorting
		rows = document.getElementsByTagName('tr'); // get each row

		// run a loop through all rows
		for(var i = 0; i < rows.length - 1; i++) 
		{
			isSorted = false; // not sorted yet
			previousRow = rows[i].getElementsByTagName('td')[n] // get the first row to compare
			nextRow = rows[i + 1].getElementsByTagName('td')[n]// get the next row to compare
			
			if(previousRow) // check if not undefined
			{
				//compare data
				if(n == 0)
				{
					if(sortMileage(previousRow.innerHTML, nextRow.innerHTML))
					{
						isSorted = true; //set sorted
						break; // then break the loop to sort
					}
				}
				else
				{
					if(sortString(previousRow.innerHTML, nextRow.innerHTML))
					{
						isSorted = true; //set sorted
						break; // then break the loop to sort
					}
				}
			}
		}

		// need to swap two elements
		if(isSorted)
		{
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); //swap
			sorting = true; // keep sorting
		}
	}
}