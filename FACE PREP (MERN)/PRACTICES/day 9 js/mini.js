function add(){
    var num_1=parseInt(document.getElementById('num_1').value);
    var num_2=parseInt(document.getElementById('num_2').value);
    var num_3=num_1+num_2;
    document.getElementById("ans").innerHTML=num_3;
    
}
function sub(){
    var num_1=parseInt(document.getElementById('num_1').value);
    var num_2=parseInt(document.getElementById('num_2').value);
    var num_3=num_1-num_2;
    document.getElementById("ans").innerHTML=num_3;
    
}
function mul(){
    var num_1=parseInt(document.getElementById('num_1').value);
    var num_2=parseInt(document.getElementById('num_2').value);
    var num_3=num_1*num_2;
    document.getElementById("ans").innerHTML=num_3;
    
}
function div(){
    var num_1=parseInt(document.getElementById('num_1').value);
    var num_2=parseInt(document.getElementById('num_2').value);
    var num_3=num_1/num_2;
    document.getElementById("ans").innerHTML=num_3;
    
}