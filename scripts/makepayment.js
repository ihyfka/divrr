const back = document.querySelector(".svg-container");
const entry = document.querySelectorAll("#input");

const secondStage = document.querySelectorAll(".deux");
const tick = document.querySelector(".tick");

const endBoss = document.querySelector(".payment-method");
const btn = document.querySelector("button");


//going back
back.addEventListener("click", ()=>{
  setTimeout(()=>{
    location.href = "markupl/checkout.html";
  }, 300)
})


//verify input != blank/ 2nd stage
for(i=0;i<entry.length;i++){
  entry[i].addEventListener("blur", ()=>{
    const entries = Array.from(entry);
    if(entries.every(entry => entry.value)){
      secondStage.forEach((component)=>{
        component.style.display = "flex";
        component.classList.add("active");
      })
    }
  })
}


//3rd stage
tick.addEventListener("change", function(){
  if(this.checked){
    endBoss.style.display = "grid";
  }else{
    endBoss.style.display = "none";
  }
})


//proceeding
btn.addEventListener("click", ()=>{
  setTimeout(()=>{
    location.replace("/index.html");
  }, 7000)

})
