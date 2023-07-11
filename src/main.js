const inputs= document.getElementById("date");
const shows= document.getElementById("age");
const calculate= document.getElementById("calc");

calculate.addEventListener( "click", ()=>{

    let dates= new Date()
    let inputedDate= new Date(inputs.value).getTime();
    let futures= dates.getTime();
 let final=Math.floor( ( futures - inputedDate)/1000/60/60/24/12/30)
    shows.innerHTML= `You Are ${final} Years Old!`
})
