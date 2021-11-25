const secondHand =   document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");




function setDate() {
    //console.log(hi);
    let now = new Date();
    let seconds = now.getSeconds();
    let secondHandDegree = ( ( seconds / 60 ) * 360   ) + 90 ;
    secondHand.style.transform = `rotate(${secondHandDegree}deg)`;
   // console.log(secondHandDegree);

   let minutes = now.getMinutes();
   let minuteHandDegree = ((minutes / 60  ) * 360)  + 90 ;
   minHand.style.transform = `rotate(${minuteHandDegree}deg)`;
  // console.log(minuteHandDegree);

  let hours = now.getHours();
  let hourHandDegree = (( hours / 12 )  * 360 )+ 90 ;
  hourHand.style.transform = `rotate( ${hourHandDegree}deg)`; 



}

setInterval(setDate,1000)