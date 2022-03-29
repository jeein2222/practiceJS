const h2=document.querySelector(".hello h2")
console.log(h2.innerText)

function handleTitleClick(){
    // const currentColor=h2.style.color;
    // let newColor;
    // if(currentColor==="blue"){
    //     newColor="tomato"
    // }else{
    //     newColor="blue"
    // }
    // h2.style.color=newColor;
    h2.classList.toggle("clicked")
}

h2.addEventListener("click",handleTitleClick)