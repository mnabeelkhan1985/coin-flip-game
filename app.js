var p1=prompt("Enter Player 1 name");
var p2=prompt("Enter Player 2 Name");
document.getElementById("p1").innerHTML =p1;
document.getElementById("p2").innerHTML =p2;
var randomNum=Math.random();
function myFunction() {
    var roundNum=Math.round(randomNum);
    if(roundNum===1){
        var str1="Heads";
        var str2="Tails";
    }
    document.getElementById("str1").innerHTML=str1;
    document.getElementById("str2").innerHTML=str2;
     if(roundNum===0){
        var str1="Tails";
        var str2="Heads";
    }
    document.getElementById("str1").innerHTML=str1;
    document.getElementById("str2").innerHTML=str2;

}if(str1==="Heads"){
    document.write("Congratulations, Player 1 ",p1,"Won")
}
if(str1==="Tails"){
    document.write("Congratulations, Player 2 ",p2,"Won")
}

    


