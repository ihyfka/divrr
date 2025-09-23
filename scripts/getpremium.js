const nav = document.querySelector("nav");
const navLinks = nav.querySelectorAll("a[href^='#']");

const plan = document.querySelectorAll(".plan");
const freeDiv = document.querySelector(".free");
const paidDiv = document.querySelector(".paid");
const btn = document.querySelector("button");


//prevent history stacking
navLinks.forEach((link)=>{
  link.addEventListener("click", function(e){
    e.preventDefault();
    let aim = document.querySelector(this.getAttribute("href"));
    if(aim){
      aim.scrollIntoView({
        behaviour:"smooth"
      })
      history.replaceState(null, null, this.getAttribute("href"))
    }
  })
})



//highlighting picked plan
let free = true;
freeDiv.addEventListener("click", ()=>{
  freeDiv.classList.add("selected-plan");
  paidDiv.classList.remove("selected-plan");
  return free = true;
})
paidDiv.addEventListener("click", ()=>{
  free = false;
  freeDiv.classList.remove("selected-plan");
  paidDiv.classList.add("selected-plan");
  return free = false;
})



//nextSteps
btn.addEventListener("click", ()=>{
  if(free){
    setTimeout(()=>{
      location.replace("../index.html");
    }, 300)
  }else{
    //nav to checkout.
    setTimeout(()=>{
      location.href = "checkout.html";
    }, 300)
  }
})





