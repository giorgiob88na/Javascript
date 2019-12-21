// This script splits a given string

// In my example, option displays an aggregated result of a query in a DB. 
//It is an aggregated related a car (Model, Fabric, Kilometers etc)
var strUser2 = l.options[l.selectedIndex].value;
var res2 = strUser2.split(""); //with custom symbol, split substrings without comma, cool! With nothing, put a comma

document.getElementById("IDv").value = res2[0]; // Put value of a substring
document.getElementById("Marc").value = res2[1];
document.getElementById("Modell").value = res2[2];	
document.getElementById("Targ").value = res2[3];									
document.getElementById("KM").value = res2[4];
