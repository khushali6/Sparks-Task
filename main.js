var time_bef=/*document.getElementById("task_tym").textContent*/"21 Sep 2021";
var task_name=document.getElementById("task_nm").textContent;
//document.querySelector("h1").textContent=task_name;
document.getElementById("add_item").addEventListener("click", show);


function show(){
   
    document.querySelector(".form").style.visibility = "visible";
}

function countdown(){
    const newTime=new Date(time_bef);
    const currentTime=new Date();

    const total_seconds=(newTime-currentTime) / 1000;
    const days=Math.floor(total_seconds / 3600 / 24);
    const hours=Math.floor(total_seconds/3600) % 24;
    const minutes=Math.floor(total_seconds/60)% 60;
    const seconds=Math.floor(total_seconds %60);
    document.getElementById("days").textContent=days;
    document.getElementById("hours").textContent=hours;
    document.getElementById("mins").textContent=minutes;
    document.getElementById("sec").textContent=seconds;
}
countdown();
setInterval(countdown,1000);