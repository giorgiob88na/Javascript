// This script adds and eliminates rows dynamically except first 2 rows that are necessarily to insert fields for a maintenance
// document   
//								  __________  _________  ________ ___________
/*The table has this structure: Car documents with theese fields | Name/Code|Quantities|Discount|Final price|  FIRST ROW:Block
                                                                  ---------  --------  --------- ------------
								 |__Value___||__Value__|__Value__|__Value___|  SECOND ROW:Block
								 	.	.	   .	     .		  .  Add/Remove
									.	.	   .	     .		  .
									.	.	   .	     .		  .
									.	.	   .	     .		  .
									.	.	   .	     .		  .
									.	.	   .	     .		  .
									.	.	   .	     .		  .
									.	.	   .	     .		  .
									.	.	   .	     .		  .
									.	.	   .	     .		  .
								
																																		.						.			    .					.						.
*/



//Challenges: Add code that, for Name/Code cell, this one has a distinct name  generated automatically retrievable from  server
//and displayed in a list HTML


<script>
var count=1;

function addRow(tab) {
var table = document.getElementById("tab");

var rowCount = table.rows.length;
var row = table.insertRow(rowCount);
var i = table.insertRow(rowCount);

var cell1 = row.insertCell(0);
var element1 = document.createElement("input");
element1.type ="text";
element1.name="txtbox1[]";
element1.id="txtbox1[]";
element1.required="true";


element1.style="text-align:center;";
cell1.appendChild(element1);

var cell2 = row.insertCell(1);
var element2 = document.createElement("input");
element2.type = "text";
element2.name="txtbox2[]";
element2.id="txtbox2[]";
element2.required="true";
element2.style=\"text-align:center;\";");
cell2.appendChild(element2);");



var cell3q = row.insertCell(2);");
var element3q = document.createElement(\"input\");");
element3q.type = \"text\" ;");
element3q.name=\"txtbox3q[]\";");
element3q.id=\"txtbox3q[]\";");
element3q.required=\"true\";");
element3q.style=\"text-align:center;\";");
cell3q.appendChild(element3q);");




var cell3 = row.insertCell(3);");
var element3 = document.createElement(\"input\");");
element3.type = \"text\" ;");
element3.name=\"txtbox3[]\";");
element3.id=\"txtbox3[]\";");
element3.required=\"true\";");
element3.style=\"text-align:center;\";");
cell3.appendChild(element3);");


var cell4 = row.insertCell(4);");
var element4 = document.createElement(\"input\");");
element4.type = \"text\" ;");
element4.name="txtbox4[]";
element4.id=\"txtbox4[]";
element4.required="true";
element4.style="text-align:center;";
element4.setAttribute("onchange",textbox);//Add a script attribute in creation of this one


cell4.appendChild(element4);");



    }

function deleteRow(tab) {
  try {
		var table = document.getElementById(\"tab\");
      var rowCount = table.rows.length;
//for(var i=0; i<rowCount; i++) {
		if( rowCount > 2 ) { //Condition to avoid deleting first two rows
				table.deleteRow(rowCount-1);
				rowCount--;
/*Previous instruction, taken by Internet, that deleted a row if the box was checked, in my example the sw has to delete regardless
				i--;*/
				}

		  }catch(e) {
			  alert(e);
		    }
}

</script>
