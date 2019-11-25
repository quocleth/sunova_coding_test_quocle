//search function
function search(){
	var inputSearch, data, filterSearch, table, th, tr, td;

	inputSearch = document.getElementById("search");
	filterSearch = inputSearch.value.trim().toUpperCase();
	table = document.getElementById("table");
	tr = table.getElementsByTagName("tr");
	th = document.getElementsByTagName("th");
	data = "";

	for(var i = 0; i < tr.length; i++)
	{
		for(var j = 0; j < th.length; j++)
		{
			td = tr[i].getElementsByTagName("td")[j];
			if(td)
			{
				data += td.textContent;
				if(data.toUpperCase().indexOf(filterSearch) > -1)
				{
					tr[i].style.display = "";
				}
				else
				{
					tr[i].style.display = "none";
				}
			}
		}
		data = "";
 	}
}