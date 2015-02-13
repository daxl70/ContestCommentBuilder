// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}   

chrome.browserAction.onClicked.addListener(function() {

  chrome.tabs.captureVisibleTab(function(screenshotUrl) {
    var viewTabUrl = chrome.extension.getURL('builder.html');
    var targetId = null;

    

    chrome.tabs.create({url: viewTabUrl}, function(tab) {
      targetId = tab.id;
    });
  });
});

var predictions_made = 0;
var total_points = 0;

document.addEventListener('DOMContentLoaded', function() {

	document.getElementById("addPrediction1").addEventListener("click", function(  ){
			clickOnAdd(document.getElementById("addPrediction1"));
			}  );
		
	document.getElementById("addPrediction2").addEventListener("click", function(  ){
			clickOnAdd(document.getElementById("addPrediction2"));
			}  );		
		
	document.getElementById("addPrediction3").addEventListener("click", function(  ){
			clickOnAdd(document.getElementById("addPrediction3"));
			}  );			
			
	document.getElementById("addPrediction4").addEventListener("click", function(  ){
			clickOnAdd(document.getElementById("addPrediction4"));
			}  );					

	document.getElementById("addPrediction5").addEventListener("click", function(  ){
			clickOnAdd(document.getElementById("addPrediction5"));
			}  );	
	
	document.getElementById("addPrediction6").addEventListener("click", function(  ){
			clickOnAdd(document.getElementById("addPrediction6"));
			}  );	
	
	document.getElementById("addPrediction7").addEventListener("click", function(  ){
			clickOnAdd(document.getElementById("addPrediction7"));
			}  );	
	
	document.getElementById("addPrediction8").addEventListener("click", function(  ){
			clickOnAdd(document.getElementById("addPrediction8"));
			}  );		
	
	document.getElementById("addPrediction9").addEventListener("click", function(  ){
			clickOnAdd(document.getElementById("addPrediction9"));
			}  );	
	
	document.getElementById("addPrediction10").addEventListener("click", function(  ){
			clickOnAdd(document.getElementById("addPrediction10"));
			}  );		
			
	document.getElementById("addPrediction11").addEventListener("click", function(  ){
			clickOnAdd(document.getElementById("addPrediction11"));
			}  );					
			
	document.getElementById("addPrediction12").addEventListener("click", function(  ){
			clickOnAdd(document.getElementById("addPrediction12"));
			}  );					
			
	document.getElementById("addPrediction13").addEventListener("click", function(  ){
			clickOnAdd(document.getElementById("addPrediction13"));
			}  );		

	document.getElementById("addPrediction14").addEventListener("click", function(  ){
			clickOnAdd(document.getElementById("addPrediction14"));
			}  );				

	document.getElementById("addPrediction15").addEventListener("click", function(  ){
			clickOnAdd(document.getElementById("addPrediction15"));
			}  );				
			
	document.getElementById("addPrediction16").addEventListener("click", function(  ){
			clickOnAdd(document.getElementById("addPrediction16"));
			}  );			

	document.getElementById("addPrediction17").addEventListener("click", function(  ){
			clickOnAdd(document.getElementById("addPrediction17"));
			}  );		

	document.getElementById("addPrediction18").addEventListener("click", function(  ){
			clickOnAdd(document.getElementById("addPrediction18"));
			}  );				
			
	document.getElementById("addPrediction19").addEventListener("click", function(  ){
			clickOnAdd(document.getElementById("addPrediction19"));
			}  );	
			
	document.getElementById("addPrediction20").addEventListener("click", function(  ){
			clickOnAdd(document.getElementById("addPrediction20"));
			}  );	

	document.getElementById("addPrediction21").addEventListener("click", function(  ){
			clickOnAdd(document.getElementById("addPrediction21"));
			}  );			
			
	document.getElementById("addPrediction22").addEventListener("click", function(  ){
			clickOnAdd(document.getElementById("addPrediction22"));
			}  );		

	document.getElementById("addPrediction23").addEventListener("click", function(  ){
			clickOnAdd(document.getElementById("addPrediction23"));
			}  );	

	document.getElementById("addPrediction24").addEventListener("click", function(  ){
			clickOnAdd(document.getElementById("addPrediction24"));
			}  );		

	document.getElementById("addPrediction25").addEventListener("click", function(  ){
			clickOnAdd(document.getElementById("addPrediction25"));
			}  );	

	document.getElementById("addPrediction26").addEventListener("click", function(  ){
			clickOnAdd(document.getElementById("addPrediction26"));
			}  );	


	document.getElementById("addPrediction27").addEventListener("click", function(  ){
			clickOnAdd(document.getElementById("addPrediction27"));
			}  );	

	document.getElementById("addPrediction27").addEventListener("click", function(  ){
			clickOnAdd(document.getElementById("addPrediction27"));
			}  );				
			
	document.getElementById("addPrediction28").addEventListener("click", function(  ){
			clickOnAdd(document.getElementById("addPrediction28"));
			}  );			
	
	
	//numeric text boxes
	document.getElementById("numeric1").addEventListener("keypress", function(e) {
		if( !isNumber(  String.fromCharCode(e.charCode)  ) ){
			e.preventDefault();
		}
	});
	
	document.getElementById("numeric2").addEventListener("keypress", function(e) {
		if( !isNumber(  String.fromCharCode(e.charCode)  ) ){
			e.preventDefault();
		}
	});
  
	document.getElementById("numeric3").addEventListener("keypress", function(e) {
		if( !isNumber(  String.fromCharCode(e.charCode)  ) ){
			e.preventDefault();
		}
	});

	document.getElementById("numeric4").addEventListener("keypress", function(e) {
		if( !isNumber(  String.fromCharCode(e.charCode)  ) ){
			e.preventDefault();
		}
	});	
  
});

function addPredictionToTable( points, prediction, left_value, right_value ){

	var predictions_made_table = document.getElementById("predictions_made");
	
	//delete the empty message row and add headers
	if( predictions_made == 0 ){
	
		while( predictions_made_table.rows.length > 0 ){
		
			predictions_made_table.deleteRow(0);
		
		}
		
		//add headers
		var header = predictions_made_table.createTHead();
		var row = header.insertRow(0);
		var cell = row.insertCell(0);
		cell.innerHTML = "<b>Delete</b>";
		cell = row.insertCell(0);
		cell.innerHTML = "<b>Prediction</b>";
		cell.style.width="80%";
		cell = row.insertCell(0);
		cell.innerHTML = "<b>Points</b>";
		
		//add footer
		var footer = predictions_made_table.createTFoot();
		var row = footer.insertRow(0);
		var cell = row.insertCell(0);
		cell.colSpan = 3;
		
		var div = document.getElementById('middle_div');
		
		var button = document.createElement("INPUT");
		button.setAttribute("type", "button");
		button.setAttribute("value", "Generate Comment");
		button.setAttribute("id", "button");
		button.addEventListener("click", function(){
			createComment();
		});
		
		div.appendChild(button);
		
	
	}
	
		var row = predictions_made_table.tBodies[0].insertRow( 0 );
		var cell = row.insertCell(0);
		cell.appendChild( img_create( "delete.png", "delete prediction", "delete prediction" ) );
		cell = row.insertCell(0);
		cell.innerHTML = left_value.trim()+" " +prediction.trim()+" "+right_value.trim();
		cell = row.insertCell(0);
		cell.innerHTML = points;

	predictions_made++;
	total_points += parseInt(points);
	
	updateFooter();
	
} 

function img_create(src, alt, title) {
    var img= document.createElement('img');
    img.src= src;
    if (alt!=null) img.alt= alt;
    if (title!=null) img.title= title;
	
	img.height = "16";
	img.width = "16";
	img.style.cursor = "pointer";
	
	img.addEventListener("click", function(){ 
		
		//img -> cell -> row -> tbody
		
		var row = img.parentNode.parentNode;
		
		var tBody = img.parentNode.parentNode.parentNode;
		
		var points = row.cells[0].textContent;
		
		tBody.removeChild(row);
		
		predictions_made--;
		
		total_points -= parseInt(points);
		
		updateFooter();
		
		if(  predictions_made == 0 ){
		
			tBody.parentNode.deleteTHead();
			tBody.parentNode.deleteTFoot();
		
			var row = tBody.insertRow(0);
			var cell = row.insertCell(0);
			
			cell.innerHTML = "No predictions added yet";
			
			var div = document.getElementById('middle_div');
			var button = document.getElementById('button');
			
			div.removeChild(button);
			
		
		}
		
		
	});
    return img;
}


function updateFooter(){
	
	var predictions_made_table = document.getElementById("predictions_made");
	
	predictions_made_table.tFoot.rows[0].cells[0].innerHTML = "Total Points: "+total_points;
	

}

var onePlayerPrediction = ["SELECT","INPUT"];  //type 1
var lineUpPrediction = ["SELECT","TEXTAREA"]; //2
var scorePrediction = ["INPUT","INPUT"]; //3
var substitutionInOutPrediction = ["SELECT","INPUT","SELECT","INPUT"]; //4
var teamPrediction = ["SELECT"]; //5
var teamPrediction2 = ["SELECT", "SELECT"]; //6


function clickOnAdd( addImage ){

		cells = addImage.parentNode.parentNode.cells;
		
		points = cells[0].textContent;
			
		prediction = cells[1].textContent;
				
		prediction_value_left = "";
		prediction_value_right = "";
				
		var cell = cells[2];
				
		var index = 0;
		var elementArray = [];
		var objectArray = [];
				
		for( var i = 0 ; i < cell.childNodes.length ; i++ ){

			if( cell.childNodes[i].tagName == "SELECT" || cell.childNodes[i].tagName == "INPUT" ||
				cell.childNodes[i].tagName == "TEXTAREA" ){
						
				elementArray[index] = cell.childNodes[i].tagName;
				objectArray[index] = cell.childNodes[i];
						
				index++;
						
			}
		
		}

		var prediction_type = getPredictionType(elementArray);
		
		switch(prediction_type){
		
			//one player prediction
			case 1:
			
				var select = objectArray[0];
				var input = objectArray[1];
			
				prediction_value_left =  input.value.length>0?input.value:select.value;
			
			break;
			
			//line up prediction
			case 2:
			
				var select = objectArray[0];
				var textarea = objectArray[1];
				
				prediction_value_left = select.value;
				prediction_value_right = textarea.value;
			
			break;
			
			//score prediction
			case 3:
			
				var input1 = objectArray[0];
				var input2 = objectArray[1];
				
				prediction_value_right = input1.value +" - " + input2.value;
			
			break;
			//substitution IN OUT prediction
			case 4:
			
				var select1 = objectArray[0];
				var input1 = objectArray[1];
				var select2 = objectArray[2];
				var input2 = objectArray[3];
				
				var in_value =  input1.value.length>0?input1.value:select1.value;
						
				var out_value =  input2.value.length>0?input2.value:select2.value;
						
				prediction_value_right = ": "+in_value+" <b>IN</b> "+out_value+" <b>OUT</B>";
			
			
			break;
			//team prediction
			case 5:
			
				var select = objectArray[0];
				
				prediction_value_left = select.value;
			
			break;
			//team prediction 2
			case 6:
			
				var select1 = objectArray[0];
				var select2 = objectArray[1];
				
				prediction_value_left = select1.value;
				prediction_value_right = "in"+ select2.value;
			
			break;			
			
		
		}
			
		addPredictionToTable(points, prediction, prediction_value_left, prediction_value_right);


} 

function isNumber(n) {

  return !isNaN(parseFloat(n)) && isFinite(n);
}


function getPredictionType( elementArray ){

	if( onePlayerPrediction.equals( elementArray )){

		return 1;
	
	}	
	
	if(  lineUpPrediction.equals( elementArray ) ){
	
		return 2;
	
	}
	
	if( scorePrediction.equals(elementArray) ){

		return 3;
	
	}	
	
	if( substitutionInOutPrediction.equals(elementArray)){
	
		return 4;
		
	}
	
	if( teamPrediction.equals(elementArray) ){

		return 5;

	}	
	
	if( teamPrediction2.equals(elementArray) ){

		return 6;

	}	


} 

function createComment(){
	
	//all the data will be dumped here
	var json = new Array(7);
	
	json[1] = new Array();
	json[2] = new Array();
	json[3] = new Array();
	json[4] = new Array();
	json[5] = new Array();
	json[6] = new Array();
	
	var table = document.getElementById("predictions_made").tBodies[0];
	
	//iterate the table
	
	for( var i= 0 ; i < table.rows.length ; i++ ){

		var row = table.rows[i];
		
		var points = parseInt(row.cells[0].textContent);
		
		var prediction = row.cells[1].innerHTML;
		
		
		
		prediction = replaceAll( prediction, "<b>", "**");
		prediction = replaceAll( prediction, "</b>", "**");
		
		json[points][json[points].length] = prediction;
		

	}	
	
	var comment = "";
	
	for( var i = 6 ; i > 0 ; i-- ){

		if( json[i].length > 0 ){

			if( i != 1 ) 
				comment+= "**"+i+" Points**  \n";
			else
				comment+= "**"+i+" Point**  \n";
			
			for( var j = 0 ; j < json[i].length ; j++ ){

				comment+= json[i][j]+"  \n";
			
			}	

			comment+= "  \n";
		
		}		
	
	}	
	
	var comment_div =  document.getElementById("right_div");	
	
	removeChildren( comment_div );
	
	var area = document.createElement("TEXTAREA");
		area.cols = "50";
		area.rows = "25";
		area.value = comment;

		
	comment_div.appendChild(area);
	area.select();
	

}

function replaceAll(string, find, replace) {
  return string.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

function escapeRegExp(string) {
    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

function removeChildren( div ){

	var children = div.childNodes;
	
	while( children.length > 0){

		div.removeChild( children[0] );
	

	}	


}


