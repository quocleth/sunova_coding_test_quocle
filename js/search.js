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
function search(){
	var inputSearch, data, filterSearch, table, th, tr, td;

	inputSearch = document.getElementById("search"); //get input from the search box
	filterSearch = inputSearch.value.trim().toUpperCase(); //trim any space and convert to all upper case to compare
	table = document.getElementById("table"); //get a table
	tr = table.getElementsByTagName("tr"); // get rows
	th = document.getElementsByTagName("th"); //get headers
	data = "";

	//loop through each row
	for(var i = 0; i < tr.length; i++)
	{
		//loop through each header
		for(var j = 0; j < th.length; j++)
		{
			//get data from each row
			td = tr[i].getElementsByTagName("td")[j];
			
			//check if td is not identified
			if(td)
			{
				data += td.textContent; //append to data

				//check data with the input from the search box
				// if matched, show it
				if(data.toUpperCase().indexOf(filterSearch) > -1)
				{
					tr[i].style.display = "";
				}
				else //show none
				{
					tr[i].style.display = "none";
				}
			}
		}
		data = ""; //reset data from keeping appending
 	}
}
/*------------------------------------------------------------------------------*/
