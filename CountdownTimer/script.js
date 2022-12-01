const hoursEl  = document.getElementById("hours");
const daysEl = document.getElementById("days");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears ="1 Jan 2023";
const newYears1 = "1 Jan 2024"
function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = new Date(newYearsDate - currentDate) ;
    if(totalSeconds>=0){
        const seconds =Math.floor((totalSeconds % (1000 * 60)) / 1000);
        const mins = Math.floor((totalSeconds % (1000 * 60 * 60)) / (1000 * 60));
        const hours = Math.floor((totalSeconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const days = Math.floor(totalSeconds / (1000 * 60 * 60 * 24));
    
        hoursEl.innerHTML=hours;
        daysEl.innerHTML=days;
        minsEl.innerHTML=formatTime(mins);
        secondsEl.innerHTML=formatTime(seconds);
    }
   
    if(totalSeconds<=0){
        const newYearsDate = new Date(newYears1);
        const currentDate = new Date();
        const totalSeconds = new Date(newYearsDate - currentDate);
        
        const seconds =Math.floor((totalSeconds % (1000 * 60)) / 1000);
        const mins = Math.floor((totalSeconds % (1000 * 60 * 60)) / (1000 * 60));
        const hours = Math.floor((totalSeconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const days = Math.floor(totalSeconds / (1000 * 60 * 60 * 24));
    
        hoursEl.innerHTML=hours;
        daysEl.innerHTML=days;
        minsEl.innerHTML=formatTime(mins);
        secondsEl.innerHTML=formatTime(seconds);
    }
    
}

function formatTime(time){
    return time < 10 ? escape("0"+time) : time;
}



setInterval(countdown,1000)
