function main(){
    document.getElementById('content').style.display="none";
    let lost= document.getElementById('main-result').innerHTML;
    if(lost=="You Lost"){
        alert("you lost");
    }
    else{

   
    let x
    do{
        x=Math.floor((Math.random()*100)/7.6);
    }while(x==0)
    
    let val=Number(document.getElementById('result').innerHTML);
    let total=val+x;
    document.getElementById('result').innerHTML=total;

    if(total<21){
        document.getElementById('main-result').innerHTML="Generate another card";
    }
    else if(total==21){
        document.getElementById('main-result').innerHTML="Congratulations,You Won";
        alert("Congratulations!");
        document.getElementById('btn-res').style.display="inline-block";
    }else if(total>21){
        document.getElementById('main-result').innerHTML="You Lost";
       
        document.getElementById('btn-res').style.display="inline-block";
        alert("Click restarat to play again.");
    }

    
    var img=document.createElement("img");
    img.src="images/"+ x +".png";

    document.body.appendChild(img).style.margin="20px";
}

}

function restart(){
    location.reload();
}