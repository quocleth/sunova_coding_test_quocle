//-----------------------------------------
// NAME: Quoc Le
// Email: quocleth@gmail.com
// Phone: (204) 915-6184
// **** Sunova Coding Challenge - Software Developer position ****
//
// REMARKS: Implement a a table using JavaScript to retrieve the data (XML) from Sunova server
//					- Sort every column by ascending and descending order.
//					- Search and filter every column in the search box.
//-----------------------------------------


/*------------------------------------------------------------------------------*/
//sort numbers function in Asc. order
function sortMileageAsc(a, b){
	if(Number(a) > Number(b))
	{
		return true;
	}
	else
	{
		return false;
	}
}
/*------------------------------------------------------------------------------*/


/*------------------------------------------------------------------------------*/
//sort strings function in Asc. order
function sortStringAsc(a, b){
	if(a.toString().toLowerCase() > b.toString().toLowerCase())
	{
		return true;
	}
	else
	{
		return false;
	}
}
/*------------------------------------------------------------------------------*/


/*------------------------------------------------------------------------------*/
//sort numbers function in Desc. order
function sortMileageDesc(a, b){
	if(Number(a) < Number(b))
	{
		return true;
	}
	else
	{
		return false;
	}
}
/*------------------------------------------------------------------------------*/


/*------------------------------------------------------------------------------*/
//sort strings function in Desc. order
function sortStringDesc(a, b){
	if(a.toString().toLowerCase() < b.toString().toLowerCase())
	{
		return true;
	}
	else
	{
		return false;
	}
}
/*------------------------------------------------------------------------------*/


/*------------------------------------------------------------------------------*/
//sort table function
function sortData(n, m){
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
				//check if it is ASC
				if(m === true)
				{
					//check if it is the first column - Mileage
					if(n == 0)
					{
						if(sortMileageAsc(previousRow.innerHTML, nextRow.innerHTML))
						{
							isSorted = true; //set sorted
							break; // then break the loop to sort
						}
					}
					else //check other columns which are compare strings
					{
						if(sortStringAsc(previousRow.innerHTML, nextRow.innerHTML))
						{
							isSorted = true; //set sorted
							break; // then break the loop to sort
						}
					}
				}
				else //check if it is DESC
				{
					//check if it is the first column - Mileage
					if(n == 0)
					{
						if(sortMileageDesc(previousRow.innerHTML, nextRow.innerHTML))
						{
							isSorted = false; //set sorted
							break; // then break the loop to sort
						}
					}
					else //check other columns which are compare strings
					{
						if(sortStringDesc(previousRow.innerHTML, nextRow.innerHTML))
						{
							isSorted = false; //set sorted
							break; // then break the loop to sort
						}
					}
				}
			}
		}

		// need to swap two elements if it is Asc
		if(isSorted)
		{
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); //swap
			sorting = true; // keep sorting
		}
		else  //need to swap two elements if it is Desc
		{
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); //swap
			sorting = true; // keep sorting
		}
	}
}
/*------------------------------------------------------------------------------*/