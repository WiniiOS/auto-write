// import "./style.css";

const title = document.getElementById("autoText")

const text = "Nous sommes des Javascript Monsters!"

let index = 0

let randomSpeed = (min,max) =>{
    return Math.floor(Math.random() * (max - min) + min)
}
const play = () =>{

    title.innerHTML = text.slice(0,index)
    index++
    if (index > text.length) {
        index = 0
    }

    clearInterval(timer)
    timer = setInterval(play, randomSpeed(300,500))
}


let timer = setInterval(play,200)