const back = document.querySelector(".svg-container");
const btn = document.querySelector("button");


//going back
back.addEventListener("click", ()=>{
  setTimeout(()=>{
    location.href = "../markupL/getpremium.html";
  }, 300)
})



//proceeding
btn.addEventListener("click", ()=>{
  setTimeout(()=>{
    location.href = "../markupL/makepayment.html";
  }, 300)
})