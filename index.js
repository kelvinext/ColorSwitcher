let buttons = document.querySelectorAll(".button");
let container= document.querySelector(".container");
buttons.forEach((button) => {
    button.addEventListener("click" , (e)=> {
        console.log(e.target)
        if(e.target.id === "red"){
            container.style.backgroundColor = e.target.id 
        }
        else if(e.target.id === "blue"){
            container.style.backgroundColor = e.target.id 
        }
        else if(e.target.id === "purple"){
            container.style.backgroundColor = e.target.id 
        }
        else if(e.target.id === "yellow"){
            container.style.backgroundColor = e.target.id 
        }
        else if(e.target.id === "orange"){
            container.style.backgroundColor = e.target.id 
        }
        else if(e.target.id === "black"){
            container.style.backgroundColor = e.target.id 
        }
        else {
            container.style.backgroundColor = "white"
        }
    })
})