
// This script shows elements on radio checked, true. 
//This also places elements on the left of screen

<script>
function myfunction() {
var g= document.getElementById("vei");
var y=  document.getElementById("auto").checked; // Retrieve check of radio buttons
var z=  document.getElementById("moto").checked;
var t=  document.getElementById("furgo").checked;
var o= document.getElementById("InseVei"); //Elements to show on selection
var x = document.getElementById("macchina");
var b= document.getElementById("forma");
if( y==true || z==true || t==true){ 

  x.style.display = "block";
  o.style.display="block";
  b.style.textAlign="center";
  x.style.textAlign="left";
  x.style.top = "150px";
  x.style.right="910px";
  o.style.textAlign="left";
  o.style.top = "105px"; 


 }

}
</script>
