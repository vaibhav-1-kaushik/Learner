
     var first =document.getElementById("task-1");
     var timeout=20;
     var count=0;
     let ser;
     let score=0;
    
     
    function updatecount(){      
    count++;
    if(count<=timeout){
        document.getElementById("bhaoo").innerText=" "+count;
    }else{
        document.getElementById("bhaoo").innerText="game Over";
        count=0;
        document.getElementById("in-put").style.display="none";
        document.getElementById("in").style.display="none";
        clearInterval(ser)
    }
}

function Start(){
    first.innerHTML=""+Math.floor(Math.random() * 1000000000);
    document.getElementById("in-put").style.display="inline";
    document.getElementById("put").style.display="none";
    document.getElementById("in").style.display="inline";
    ser= setInterval(updatecount,1000);
}
  
function submit(){
let value =document.getElementById("in-put").value;
if(value==(first.innerHTML)&&count<timeout){
    alert(timeout)
    document.getElementById("in-put").value= "";
    first.innerHTML="";  
    document.getElementById("sc-re").innerText=score;
    score++;
    --timeout;
    clearInterval(ser);
    count=0;
    Start();
}else{
    alert("wrong input");
    document.getElementById("in-put").value="";
    first.innerHTML="";
    count=0;
    clearInterval(ser);
    document.getElementById("bhaoo").innerText="game Over";
    document.getElementById("in-put").style.display="none";
    document.getElementById("in").style.display="none";
}
    
}
