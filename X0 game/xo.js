let val="x"
function cli(obj){
 if(obj.innerHTML==""){
    if(val=="x"){
        obj.innerHTML="x";
        val="0";
    }
    else{
        obj.innerHTML="0";
        val="x";
    }
    check();
 }
}
function check(){
    var box1=document.getElementById("box1").innerHTML;
    var box2=document.getElementById("box2").innerHTML;
    var box3=document.getElementById("box3").innerHTML;
    var box4=document.getElementById("box4").innerHTML;
    var box5=document.getElementById("box5").innerHTML;
    var box6=document.getElementById("box6").innerHTML;
    var box7=document.getElementById("box7").innerHTML;
    var box8=document.getElementById("box8").innerHTML;
    var box9=document.getElementById("box9").innerHTML;

    if((box1==box2)&&(box1==box3)&&(box1!="")){
        window.alert(box1+" WIN THE GAME")
        strikeWinner([document.getElementById("box1"),document.getElementById("box2"),document.getElementById("box3")]);
        reset();
    }
    if((box4==box5)&&(box4==box6)&&(box4!="")){
        window.alert(box4+" WIN THE GAME")
        strikeWinner([document.getElementById("box4"),document.getElementById("box5"),document.getElementById("box6")]);
        reset();
    }
    if((box7==box8)&&(box7==box9)&&(box7!="")){
        window.alert(box7+" WIN THE GAME")
        strikeWinner([document.getElementById("box7"),document.getElementById("box8"),document.getElementById("box9")]);
        reset();
    }
    if((box1==box4)&&(box1==box7)&&(box1!="")){
        window.alert(box1+" WIN THE GAME")
        strikeWinner([document.getElementById("box1"),document.getElementById("box4"),document.getElementById("box7")]);
        reset();
    }
    if((box2==box5)&&(box2==box8)&&(box2!="")){
        window.alert(box2+" WIN THE GAME")
        strikeWinner([document.getElementById("box2"),document.getElementById("box5"),document.getElementById("box8")]);
        reset();
    }
    if((box3==box6)&&(box3==box9)&&(box3!="")){
        window.alert(box3+" WIN THE GAME")
        strikeWinner([document.getElementById("box3"),document.getElementById("box6"),document.getElementById("box9")]);
        reset();
    }
    if((box1==box5)&&(box1==box9)&&(box1!="")){
        window.alert(box1+" WIN THE GAME")
        strikeWinner([document.getElementById("box1"),document.getElementById("box5"),document.getElementById("box9")]);
        reset();
    }
    if((box3==box5)&&(box3==box7)&&(box3!="")){
        window.alert(box3+" WIN THE GAME")
        strikeWinner([document.getElementById("box3"),document.getElementById("box5"),document.getElementById("box7")]);
        reset();
    }
}


// else if (!val.includes("-")) {
//     return "tie";
//     window.alert("MATCH TIE PLAY AGAIN")
// }
// function strikeWinner(elements){
//     elements.forEach(element => {
//         element.style.textdecoration="line-through";
        
//     });



// function butt(){
//     for(let i=1;i<10;i++){
//         document.getElementById(${i}).innerHTML="";
   
//     }
// }