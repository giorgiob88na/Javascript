// This script calculates a discount of a price, getting the price, quantities and the percentage
// Elements are placed in a row of a table and getting the single field by the id
<script>
function textbox(){
  var z1=0;
  var sc1=0;
  var x1=document.getElementById(\"txtbox3[]\").value;
  alert(\"Length:\"+x1.length);
	var y1=document.getElementById(\"txtbox4[]\").value;
	var q1=document.getElementById(\"txtbox3q[]\").value;
  z1=y1*q1;
	sc1=(z1*x1)/100;
	var tot1=z1-sc1;
  document.getElementById(\"txtbox4[]\").value =tot1;
  }
</script>
