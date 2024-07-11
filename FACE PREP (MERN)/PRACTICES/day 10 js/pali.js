function check(){
    var inp=document.getElementById("inp").Value;
    console.log(inp);
    let i=0;
    let j=inp.length-1;
    var result=1;
while(i<j){
    if(inp.charAt(i)!=inp.charAt(j)){
    result=0;
    break;
}
i++;
j--;
}
    if(result==1){
        document.getElementById("output").innerHTML="palindrome";
    }
        else{
            document.getElementById("output").innerHTML="not palindrome";
        }
    
}