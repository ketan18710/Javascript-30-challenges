function setTime(){
    now = new Date()
    const seconds = now.getSeconds()
    secondsHandDegree = ((seconds/60)*360) + 90
    console.log(`rotate(${secondsHandDegree})deg`)
    $('#seconds')[0].style.transform = `rotate(${secondsHandDegree}deg)`
    const minutes = now.getMinutes()
    minutesHandDegree = ((minutes/60)*360) + 90
    console.log(`rotate(${minutesHandDegree})deg`)
    $('#minutes')[0].style.transform = `rotate(${minutesHandDegree}deg)`
    const hours = now.getHours()
    hoursHandDegree = ((hours/60)*360) + 90
    console.log(`rotate(${hours})deg`)
    $('#hours')[0].style.transform = `rotate(${hoursHandDegree}deg)`
    
}
setInterval(setTime,1000)