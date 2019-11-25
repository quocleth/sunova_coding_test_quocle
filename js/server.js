function loadServers(){
	var xHttp = new XMLHttpRequest();
	xHttp.open('GET', 'https://mobiledev.sunovacu.ca/api/Test/GetCars', true);

	xHttp.onload = function(){
		if(this.status == 200)
		{
			var cars = JSON.parse(this.responseText);
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