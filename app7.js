// Alarm Clock [Logical Alarm]

/*Given a day of the week as 0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 
4=Thursday, 5=Friday, 6=Saturday, and a boolean indicating if I am on
vacation, return a string of the form "7:00" indicating when the alarm
clock should ring. 
Weekdays, the alarm should be "7:00" and on weekends it should be "10:00".
However, If I am on vacation, then on weekdays it should be "10:00" 
and on weekends it should be off

function = alarmClock(day, vacation) {alarmClock(1, false) -"7:00"}
{alarmClock(5, false) -"7:00"} {alarmClock(6, true) -"off"}
{alarmClock(6, false) -"10:00";} {alarmClock(4, true)-"10:00"}*/

let alarmClock = document.getElementById('btn')

let alarmTune = new Audio('/alarm-clock-short-6402.mp3')
alarmClock.addEventListener('click',() =>{

alarmTune.play()

})

let btnDismiss = document.getElementById('btnDismiss')

btnDismiss.addEventListener('click',() =>{
alarmTune.pause()
alarmTune.currentTime = 0
})


let day = 4;
let vacation = false;

if ((day>0 && day<6) && (vacation == false)) {
  console.log("7:00");
}
   else if ((day>0 && day<6) && (vacation == false)) { 
    console.log("7:00");
}
else if ((day>0 && day==6) && (vacation == true)) {
console.log("off");
}
else if ((day>0 && day==6) && (vacation == false)) {
console.log("10:00");
}

else if ((day>0 && day==4) && (vacation == true)) {

  console.log("10:00");
}