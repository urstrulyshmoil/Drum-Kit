let total_drums=document.getElementsByClassName("drum").length;


for(i=0;i<total_drums;i++){   
    let tag=document.getElementsByClassName("drum")[i]
    tag.addEventListener("click",function(){
        let btn_html=this.innerText;
        makeSound(btn_html)
        btnAnimate(btn_html)
    })
}

document.addEventListener("keypress",function(event){
    makeSound(event.key)
    btnAnimate(event.key)
})


function makeSound(key){

    switch(key){
        case "w":
            let tom1=new Audio("./sounds/tom-1.mp3")
            tom1.play()
            break;

        case "a":
            let tom2=new Audio("./sounds/tom-2.mp3")
            tom2.play()
            break;

        case "s":
            let tom3=new Audio("./sounds/tom-3.mp3")
            tom3.play()
            break;

        case "d":
            let tom4=new Audio("./sounds/tom-4.mp3")
            tom4.play()
            break;

        case "j":
            let snare=new Audio("./sounds/snare.mp3")
            snare.play()
            break;

        case "k":
            let crash=new Audio("./sounds/crash.mp3")
            crash.play()
            break;

        case "l":
            let kickBass=new Audio("./sounds/kick-bass.mp3")
            kickBass.play()
            break;

        default: console.log("wrong input");

    }
}

function btnAnimate(key){
    let active_btn=document.querySelector("."+key)
    active_btn.classList.add("pressed")

    setTimeout(function(){
        active_btn.classList.remove("pressed")
    },200)
}