const loading = document.querySelector(".loading");
const processSvg = document.querySelector(".process");
const toHide = document.querySelectorAll(".hide");
const redirect = document.querySelector(".redirect");

const back = document.querySelector(".svg-container");
const entry = document.querySelectorAll("#input");

const secondStage = document.querySelectorAll(".deux");
const tick = document.querySelector(".tick");

const endBoss = document.querySelector(".payment-method");
const btn = document.querySelector("button");


//going back
back.addEventListener("click", ()=>{
  setTimeout(()=>{
    location.href = "checkout.html";
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
  toHide.forEach((piece)=>{
    piece.style.display = "none";
  })
  loading.style.display = "flex";
  setTimeout(()=>{
    redirect.style.display = "block";
  }, 2500)
  setTimeout(()=>{
    location.href = "../index.html";
  }, 5000)
})



