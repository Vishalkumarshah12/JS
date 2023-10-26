const clock = document.getElementById("clock")

setInterval(function(){
     const localDate = new Date()
     clock.innerHTML = localDate.toLocaleTimeString()
},1000)