var numberOfButtons=document.querySelectorAll(".kit").length


for( var i=0; i<numberOfButtons; i++){
    document.querySelectorAll(".kit")[i].addEventListener("click",clicked);
}

function clicked(){
    playSound(this.innerHTML);
    // animation(this.innerHTML);
}

document.addEventListener("keydown",pressed);

function pressed(event){
    playSound(event.key);
    // animation(event.key);
}


function playSound(action){
    switch (action) {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
 
         case "a":
             var tom2=new Audio("sounds/tom-2.mp3");
             tom2.play();
             break;
 
         case "s":
                 var tom3=new Audio("sounds/tom-3.mp3");
                 tom3.play();
                 break;
 
         case "d":
                 var tom4=new Audio("sounds/tom-4.mp3");
                 tom4.play();
                 break;
 
         case "j":
                 var crash=new Audio("sounds/crash.mp3");
                 crash.play();
                 break;
             
         case "k":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
 
         case "l":
             var snare=new Audio("sounds/snare.mp3");
             snare.play();
             break;
 
        default:console.log("Wrong");
            break;
    }
}

// function animation(currKey){
//     var activeButton = document.querySelector("."+currKey);
//     activeButton.classList.add("pressed");
//     setTimeout(func,100);
// }
// function func(){
//     activeButton.classList.remove("pressed");
// }