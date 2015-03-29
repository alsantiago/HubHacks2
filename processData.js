//console.log(data[0]);
//console.log(data[0].lat);
var output = {};
var BB = [];
var busStep2 = [];
var busList = [];
//console.log(data.length);
//console.log(data[1]);
//console.log(data[1].lat);
for(var i =0; i < data.data.length; i++){
	output = {};
	output.lat = data.data[i][12][1];
	output.lng = data.data[i][12][2];
	//output.status = data.data[i][10];
	if(data.data[i][10] ==='YELLOW'){		//somewhere between 60-80% full
		output.status =0.6;

	}
	if(data.data[i][10] ==='RED'){
		output.status =1;

	}
	if(data.data[i][10] ==='GREEN') {
		output.status =0;
	}

	output.address = data.data[i][8];
	output.dateAndTime = data.data[i][9];
	
	var partsArray = output.dateAndTime.split('T');
	output.date = partsArray[0];
	output.time = partsArray[1];
	//output.vehicleId = data[i].vehicleId;
	BB.push(output);
}

//console.log(busStep1);

/*		//If we need to create time series data
for(var i =0; i < busStep1.length; i++){
	output = {};
	if(busList === null){							//if there is no bus list, create it
		busList.push(busStep1.vehicleId);
	} else {
		for (var j =0;j <busList.length; j++){		//loop through the whole current bus list

			if (busStep1.vehicleId === busList[j]){		//if the vehicleId matches something on the bus list, put new data with same bus
				output.lat = data[i].lat;
				output.lng = data[i].lon;
				output.time = data[i].lastTime;
				output.vehicleId = data[i].vehicleId;
				busStep2.push(output);
			}
		}

	}
	
}

*/