let dot = document.getElementById("dot")

let contact = document.getElementById("contact")

contact.addEventListener("click", ()=> {
  
})

function carregar() {
  setInterval( ()=> {
    if(dot.style.marginTop == "10px") {
      dot.style.marginTop = "60px"
    }
    else {
      dot.style.marginTop = "10px"
    }
  },1000)
}