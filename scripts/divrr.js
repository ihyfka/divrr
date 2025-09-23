const nav = document.querySelector("nav");
const search = document.querySelector(".search");
const settings = document.querySelector(".settings");
const settingContainer = document.querySelector(".settings-container");
const backSettings = document.querySelector(".setting-back");

const searchCTA = document.querySelector(".search-cta");
const advancedSearch = document.querySelector(".advanced-search");
const advImg = advancedSearch.querySelector(".img");

const inpFakeShots = document.querySelectorAll(".fake-shot");
const advInput = advancedSearch.querySelector("input");
const advBtn = advancedSearch.querySelector("button");

const section = document.querySelector("section");
const songSectionDiv = document.querySelector(".songs");
const songTabActive = document.querySelector(".song-bottom-design");
const needPremiumService = document.querySelectorAll(".need-premium");

const main = document.querySelector(".main");
const goAway = document.querySelectorAll(".goaway");
const musicChoice = document.querySelectorAll(".index-overview");
const indexedCurrentSong = document.querySelectorAll(".index-song-title");
const container = document.querySelector(".container");

const audioSet = document.querySelector(".audio-set");
const thumbnail = document.querySelector(".nowplaying-thumbnail");
const songTitle = document.querySelector(".song-title");

const timeline = document.querySelector(".timeline");
const dynamicTime = document.querySelector(".current-time");
const songDuration = document.querySelector(".song-duration");

const artisteName = document.querySelector(".artiste-name");
const liked = document.querySelector(".add-to-liked");
const likedSvg = document.querySelector(".add-to-liked-svg");

const goBackwards = document.querySelector(".backwards-svg");
const play = document.querySelectorAll(".play");
const pause = document.querySelectorAll(".pause"); 
const playBtn = document.querySelector(".play-svg");
const pauseBtn = document.querySelector(".pause-svg");
const goForwards = document.querySelector(".forwards-svg");
const lyricsBtn = document.querySelector(".container-options");

const footer = document.querySelector("footer");
const footerReopen = document.querySelectorAll(".footer-reopen");
const footerThumbnail = document.querySelector(".active-thumbnail-img");
const footerSongTitle = document.querySelector(".active-song-title");
const footerArtiste = document.querySelector(".active-artiste");
const activePlayBtn = document.querySelector(".active-play-svg");
const activePauseBtn = document.querySelector(".active-pause-svg");
const activeGoForwards = document.querySelector(".active-forwards-svg");


//handling premium
for(l=0;l<needPremiumService.length;l++){
  needPremiumService[l].addEventListener("click", ()=>{
    setTimeout(()=>{
      window.open("/markupL/getpremium.html"); 
    }, 300)
  })
}



//toggle advSearch tab
let isEnabled = false;
function enabled(){
  isEnabled = true;
  advancedSearch.style.display = "flex";
  section.style.display = "none";
  main.style.opacity = ".3";
  footer.style.opacity = "0";
}
function disabled(){
  isEnabled = false;
  advancedSearch.style.display = "none";
  section.style.display = "flex";
  main.style.opacity = "1";
  footer.style.opacity = "1";
}
search.addEventListener("click", (e)=>{
  songTabActive.classList.add("tabActive");
  e.stopPropagation();
  isEnabled ? disabled() : enabled();
})
document.addEventListener("click", (e)=>{
  //e.stopPropagation();
  advInput.removeAttribute("readonly", "true");
  if(!advancedSearch.contains(e.target) && !settingContainer.contains(e.target)){  //&& !settings.contains(e.target)*/ && !settingContainer.contains(e.target)){
    advInput.value = "";
    disabled();
  }
})



//free-tier search negation
advInput.addEventListener("input", ()=>{
  if(advInput.value !== ""){
    for(i=0;i<inpFakeShots.length;i++){
      inpFakeShots[i].style.display = "block";
    }
  }
  if(advInput.value.length >= 7){
    advInput.setAttribute("readonly", "true");
    for(i=0;i<inpFakeShots.length;i++){
      inpFakeShots[i].style.display = "none";
    }
    searchCTA.style.position = "absolute";
    searchCTA.style.top = "0";
    searchCTA.style.width = "100%";
 
    advancedSearch.style.position = "fixed";
    advancedSearch.style.top = "13%";
    advancedSearch.style.height = "57vh";
    advancedSearch.style.width = "95%";
    setTimeout(()=>{
      searchCTA.style.display = "block";
      advImg.style.display = "block";
      advInput.style.display = "none";
      advBtn.style.display = "block";
    }, 300)
  }
})



//settings
function checkAudioPlaying(){
  if(!audioSet.paused && !audioSet.ended){
    footer.style.display = "block";
  }else{
    footer.style.display = "none";
  }
}
    //opening settings
function intoSettings(){
  nav.style.display = "none";
  settingContainer.classList.add("serrings");
  settingContainer.addEventListener("animationend", ()=>{
    section.style.display = "none";
    main.style.display = "none";
  })
}
settings.addEventListener("click", ()=>{
  intoSettings();
  
  /*history.replaceState({
    activeSettingsContainer:true
  }, "")*/
  
  history.pushState({
      activeSettingsContainer:true
    }, "")
})
    //leaving settings
function outtaSettings(){
  nav.style.display = "";
  settingContainer.classList.remove("serrings");
  main.style.display = "grid";
  section.style.display = "flex"
  checkAudioPlaying();
  
  /*history.replaceState({
    activeSettingsContainer:true
  }, "")*/
  
}
backSettings.addEventListener("click", outtaSettings);



window.addEventListener("popstate", (e)=>{
  if(e.state && e.state.activeSettingsContainer){
    // basically do nothing but if u want to...
    //reopen container on click;
    //intoSettings();
  }else{
    //minimize container
    outtaSettings();
  }
})



//songTab
songTabActive.classList.add("tabActive");
for(let k=0;k<needPremiumService.length;k++){
  needPremiumService[k].addEventListener("click", (e)=>{
    songTabActive.classList.remove("tabActive");
    e.stopPropagation();
  })
}
document.addEventListener("click", (e)=>{
  songTabActive.classList.add("tabActive");
  e.stopPropagation();
})



//container animation
function madeChoiceAlready(){
  goAway.forEach((component)=>{
    component.classList.add("inactive");
  })
  document.body.style.minHeight = "100vh";
  container.classList.add("active");
  if(container.classList.contains("minimize")){
    container.classList.remove("minimize");
  }
  isEnabled;
  container.style.display = "flex";
  container.style.position = "fixed";
  container.style.bottom = "0";
  footer.style.display = "none";
}



//adding favourites
function loadLoveState(songId){
  let savedLovedInfo = localStorage.getItem("music_"+songId);
  if(savedLovedInfo === "true"){
    likedSvg.classList.add("added-favourites");
  }else{
    likedSvg.classList.remove("added-favourites");
  }
}
let nowPlayingDataId = null;
if(liked){
  liked.addEventListener("click", ()=>{ 
    likedSvg.classList.toggle("added-favourites");
    let isFave = likedSvg.classList.contains("added-favourites");
    localStorage.setItem("music_"+nowPlayingDataId, isFave);
  })
}



//now playing highlighted
function nowPlaying(){
  const choiceMusic = Array.from(document.querySelectorAll(".index-overview"));
  choiceMusic.forEach((song, indx)=>{
    if(indx === isPlayingIndex){
      song.childNodes[3].childNodes[1].classList.add("song-currently-on");
    }else{
      song.childNodes[3].childNodes[1].classList.remove("song-currently-on");
    }
  })
}



//picking music
let track_index = null;
for(let i=0;i<musicChoice.length;i++){
  musicChoice[i].addEventListener("click",(e)=>{
    if(isEnabled) return;
    songTabActive.classList.add("tabActive");
    
    if(main.contains(e.target)) madeChoiceAlready();
    
    track_index = i;
    isPlayingIndex = track_index;
    nowPlaying();
    nowPlayingDataId = music[i].id || i;
    thumbnail.childNodes[1].src = music[i].thumbnail;
    songTitle.textContent = music[i].name;
    artisteName.textContent = music[i].artiste;
    setTimeout(()=>{
      audioSet.src = music[i].path;
      audioSet.play();
    }, 10)
    footerThumbnail.src = music[i].thumbnail;
    footerSongTitle.textContent = music[i].name;
    footerArtiste.textContent = music[i].artiste;
    activeGoForwards.style.display = "inline";
      //updating likes..
    musicChoice.forEach((pick)=>{
      loadLoveState(e.target);
      pick.addEventListener("click", (e)=>{
        e.preventDefault();
        nowPlayingDataId = pick.dataset.id;
        loadLoveState(nowPlayingDataId);
        playing();
        nowPlaying();
      })
    })
    history.pushState({
      activeMusicContainer:true
    }, "")
  })
}



//leaving the container
function pickedMusicAlready(){
  goAway.forEach((component)=>{
    component.classList.remove("inactive");
  })
  container.classList.remove("active");
  container.classList.add("minimize");
}
window.addEventListener("popstate", (e)=>{
  if(e.state && e.state.activeMusicContainer){
    // basically do nothing but if u want to...
    //reopen container on click;
    madeChoiceAlready();
  }else{
    //minimize container
    pickedMusicAlready();
  }
})
    //reopen container on footer click
for(i=0;i<footerReopen.length;i++){
  footerReopen[i].addEventListener("click",()=>{
    madeChoiceAlready();
    history.pushState({
      activeMusicContainer:true
    }, "")
  }
)}



//toggle container play/pause/nav icons
function playing(){
  pauseBtn.style.display = "inline";
  playBtn.style.display = "none";
  activePauseBtn.style.display = "inline";
  activePlayBtn.style.display = "none";
  audioSet.play();
}
function pausing(){
  playBtn.style.display = "inline";
  pauseBtn.style.display = "none";
  activePlayBtn.style.display = "inline";
  activePauseBtn.style.display = "none";
  audioSet.pause();
}
pauseBtn.addEventListener("click", pausing);
playBtn.addEventListener("click", playing);
  //toggle footer components
activePauseBtn.addEventListener("click", pausing);
activePlayBtn.addEventListener("click", playing);
activeGoForwards.addEventListener("click", nextTrack);
  //forwards
function nextTrack(index){
  if(track_index === music.length -1){
    activeGoForwards.style.display = "none";
    if(audioSet.ended){
      pausing(); 
      activeGoForwards.style.display = "inline";    
    }
  }else{
    track_index++;
    isPlayingIndex = track_index;
    nowPlaying();
    loadLoveState(track_index);
    music[index] = music[track_index];
    thumbnail.childNodes[1].src = music[track_index].thumbnail;
    songTitle.textContent = music[track_index].name;
    artisteName.textContent = music[track_index].artiste;
    setTimeout(()=>{
      audioSet.src = music[track_index].path;
      audioSet.play();
    }, 300)
    footerThumbnail.src = music[track_index].thumbnail;
    footerSongTitle.textContent = music[track_index].name;
    footerArtiste.textContent = music[track_index].artiste;
    playing();
  }
}
goForwards.addEventListener("click", nextTrack);
  //backwards
function prevTrack(index){
  if(track_index > 0){
    track_index -= 1;
    isPlayingIndex = track_index;
    nowPlaying();
    loadLoveState(track_index);
    music[index] = music[track_index];
    thumbnail.childNodes[1].src = music[track_index].thumbnail;
    songTitle.textContent = music[track_index].name;
    artisteName.textContent = music[track_index].artiste;
    setTimeout(()=>{
      audioSet.src = music[track_index].path;
      audioSet.play();
    }, 300)
    footerThumbnail.src = music[track_index].thumbnail;
    footerSongTitle.textContent = music[track_index].name;
    footerArtiste.textContent = music[track_index].artiste;
    playing();
    activeGoForwards.style.display = "inline";
  }
}
goBackwards.addEventListener("click", prevTrack);



//update timer
function setUpdate(){
  if(!isNaN(audioSet.duration)){
    timeline.value = (audioSet.currentTime * 100 / audioSet.duration);
      //seeker
    timeline.addEventListener("input", (e)=>{
      audioSet.currentTime = (e.target.value * audioSet.duration / 100);
      //update currentTime
      timeline.value = (audioSet.currentTime * 100 / audioSet.duration);
    })
    let currentMins = Math.floor(audioSet.currentTime / 60);
    let currentSecs = Math.floor(audioSet.currentTime - currentMins * 60);
    let durationMins = Math.floor(audioSet.duration / 60);
    let durationSecs = Math.floor(audioSet.duration - durationMins * 60);
    if(currentSecs < 10 ){
      currentSecs = "0" + currentSecs;
    }
    if(currentMins < 10){
      currentMins = "0" + currentMins;
    }
    if(!durationMins < 10){
      durationMins;
    }else{
      durationMins = "0" + durationMins;
    }
    if(durationSecs < 10){
      durationSecs = "0" + durationSecs;
    }
    dynamicTime.textContent = `${currentMins}:${currentSecs}`;
    songDuration.textContent = `${durationMins}:${durationSecs}`;
  }
  if(audioSet.ended){
    nextTrack();
  }
}
  //update per second
let updateTimer = setInterval(setUpdate, 1000);


//clearing localStorage
setInterval(()=>{
  alert("Local Cache is being cleared frequently to aid device resource allocation optimization :)")
  localStorage.clear();
}, 7200000)

