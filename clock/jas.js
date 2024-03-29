const secondHand=document.querySelector('.second-hand');
const minHand=document.querySelector('.min-hand');
const hourHand=document.querySelector('.hour-hand');
function setDate(){
    const now=new Date();
    const seconds=now.getSeconds();
    const secondDegrees=((seconds/60)*360)+90;
    secondHand.style.transform=`rotate(${secondDegrees}deg)`;
    
    const minutes=now.getMinutes();
    const minDegrees=((minutes/60)*360)+ ((seconds/60)*6) + 90;
    minHand.style.transform=`rotate(${minDegrees}deg)`;
    
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((minutes/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    console.log(seconds);
}
setInterval(setDate,1000)