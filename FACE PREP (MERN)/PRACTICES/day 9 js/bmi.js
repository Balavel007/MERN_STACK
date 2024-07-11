function bmi(){
     var h=parseInt(document.getElementById("h").value);
     var w=parseInt(document.getElementById("w").value);
     if(h<200 && h>50){
        if(w<150 && w>20){
          var m=h/100;
          var bala=w/(m*m);
          document.getElementById("avg").innerHTML="YOUR BMI IS     "+ bala.toFixed(2);
        }else{
           window.alert("SORRY PLEASE ENTER CORRECTLY !");
        } 
    }else{
        window.alert("SORRY PLEASE ENTER CORRECTLY !");
      } 
    
}

