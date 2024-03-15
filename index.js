const btnBoxNumber = document.getElementById("btnBoxNumber");
const container = document.getElementById("container");

btnBoxNumber.addEventListener("click", () =>{

    const allBoxDesign = document.querySelectorAll(".box-design");

    allBoxDesign.forEach(element=>{
        element.style.cssText = 
        "background-color: white";
    })
})

for(let i = 1; i <= 108 ; i++){

    const box = document.createElement("div");
    box.classList.add("box-design");
    container.appendChild(box);

    box.addEventListener("mouseover", (event)=>{

        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        event.target.style.cssText = 
        `background-color: rgb(${red},${green},${blue})`;
    })
}