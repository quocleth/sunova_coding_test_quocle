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
function loadServers(){
	var xHttp = new XMLHttpRequest();
	xHttp.open('GET', 'https://mobiledev.sunovacu.ca/api/Test/GetCars', true); //retrieve data from the url

	xHttp.onload = function(){
		if(this.status == 200) //if the connection is ok
		{
			var cars = JSON.parse(this.responseText); //get JSON
			var table = "";
			
			for(var i = 0; i < cars.length; i++)
			{
				table += "<tr><td>" + cars[i].mileage + "</td><td>"
					  + cars[i].name + "</td><td>"
					  + cars[i].model + "</td><td>"
					  + cars[i].engine + "</td><td>"
					  + cars[i].color + "</td></tr>";
				document.getElementById("sortable").innerHTML = table;		
			}	
		}
	}
	xHttp.send();
}
/*------------------------------------------------------------------------------*/
