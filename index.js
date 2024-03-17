//get the container and reset button
const btnReset = document.getElementById("btnReset");
const container = document.getElementById("container");

//generate 108 div box
for(let i = 1; i <= 108 ; i++){

    //make a div named box
    const box = document.createElement("div");

    //add class box-design to the box
    box.classList.add("box-design");

    //append the box dive to the container
    container.appendChild(box);

    //add event listener to each box
    box.addEventListener("mouseover", (event)=>{

        //generate random RGB
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        //change the background-color of the div box to a random RGB
        event.target.style.cssText = 
        `background-color: rgb(${red},${green},${blue})`;
    })
}

//add event listener to the reset button
btnReset.addEventListener("click", () =>{

    //get all box div with a class box-design
    const allBoxDesign = document.querySelectorAll(".box-design");

    //change all box div color to white using forEach method
    allBoxDesign.forEach(element=>{
        element.style.cssText = 
        "background-color: white";
    })
})