// JavaScript File
function Area(){
    var diameter = document.getElementById("diameter");
    var radius = document.getElementById("radius");
    var diametervalue = +diameter.value;
    var radiusvalue = +(diameter.value/2);
    var submit1= ((diameter.value/2)*(diameter.value/2)*Math.PI);
    var submit2 = (diameter.value*Math.PI);
    var divsubmit1 = document.getElementById("divsubmit1");
    var divsubmit2 = document.getElementById("divsubmit2");
    divsubmit1.innerHTML = submit1;
    divsubmit2.innerHTML = submit2;
    }