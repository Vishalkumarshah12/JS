// generate a random color

function randomColor(){
    const hex = '0123456789ABCDEF';
    let color = "#" ;
    for(let  i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}


    let intervalId; 

    const startChangingColor = function(){
        if(!intervalId){
            change = setInterval(changebgColor,1000)
        }
       function changebgColor(){
            document.body.style.backgroundColor = randomColor()
       }
    }

    const stopChangingColor = function(){
       clearInterval(change)
       intervalId = null;
    }

   document.querySelector('#start').addEventListener
   ('click',startChangingColor)

   document.querySelector('#stop').addEventListener
   ('click',stopChangingColor)
  