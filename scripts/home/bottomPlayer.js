const playPauseBtn = document.querySelector("#playPause i"),
  backwardBtn = document.getElementById("backward"),
  forewardBtn = document.getElementById("foreward"),
  likeBtn = document.getElementById("like"),
  shuffleBtn = document.getElementById("shuffle"),
  repeatBtn = document.getElementById("repeat");
const songImage = document.querySelector(".imageContr img"),
  songName = document.getElementById("nazivPesme"),
  songArtist = document.getElementById("izvodjac"),
  songAudio = document.getElementById("songAudio"),
  songCurrentTimeP = document.querySelector(".currentTime"),
  songDurationP = document.querySelector(".duration");
const progressBar = document.querySelector(".progressBar"),
  progressBarFull = document.querySelector(".progressBarFull");
const volumeBtn = document.getElementById("volumeIcon"),
  volumeBar = document.querySelector(".volumeBar"),
  volumeBarFull = document.querySelector(".volumeBarFull");

let currentVolume = parseFloat(localStorage.getItem("currentVolume")) || 1; 
let likedSongsList = JSON.parse(localStorage.getItem("likedSongsList")) || [];
/* if(localStorage.getItem("currentVolume")){
  currentVolume = parseFloat(localStorage.getItem("currentVolume"));
}else{
  currentVolume = 1;
} */
let songHistory = [];

let musicIndex;
if (localStorage.getItem("musicIndex")) {
  musicIndex = parseInt(localStorage.getItem("musicIndex"));
} else {
  musicIndex = 0;
}

console.log(musicIndex);
//load music
window.addEventListener("load", () => {
  loadMusic(musicIndex);
  updateBodyBackground(songImage);
  loadVolume(currentVolume);
  console.log(currentVolume);
  console.log(typeof (localStorage.getItem("shuffleActive") === "true"));

  if (localStorage.getItem("shuffleActive") === "true") {
    shuffleBtn.classList.add("active");
  }

  if (localStorage.getItem("repeatActive") === "true") {
    repeatBtn.classList.add("active");
  }
  if(localStorage.getItem("playBtnState") === "true"){
    playMusic();
  }else{
    pauseMusic();
  }
  
});
//default pozadina
document.body.style.background =
  "linear-gradient(to bottom right, #000000, #333333)";

//precice na tastaturi
document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === " ") {
    if (playPauseBtn.classList.contains("fa-pause")) {
      pauseMusic();
    } else {
      playMusic();
    }
  }

  if (e.ctrlKey && e.key === "ArrowLeft") {
    previousSong();
  }

  if (e.ctrlKey && e.key === "ArrowRight") {
    nextSong();
  }
});

//zvuk

volumeBarFull.addEventListener("click", function (e) {
  let positionX = e.offsetX;
  let volumeTotalWidth = volumeBarFull.clientWidth;
  let changedVolume = positionX / volumeTotalWidth;

  volumeBar.style.width = `${changedVolume * 100}%`;
  console.log((positionX/volumeTotalWidth)*100)
  songAudio.volume = changedVolume;

  localStorage.setItem("currentVolume", changedVolume);
  currentVolume = changedVolume;

  console.log("posle setovanja",localStorage.getItem("currentVolume"));
  if(songAudio.volume === 0){
    volumeBtn.className = "fa-solid fa-volume-xmark" 
  }else if(songAudio.volume > 0.5){
    volumeBtn.className = "fa-solid fa-volume-high" 
  }else {
    volumeBtn.className = "fa-solid fa-volume-low" 
  }
});

volumeBtn.addEventListener("click", muteSound);

//like dugme
likeBtn.addEventListener("click", function () {
  /* if(likeBtn.classList.contains("fa-solid")){
    likeBtn.className = "fa-regular fa-heart"
  }else{
    likeBtn.className = "fa-solid fa-heart"
    
  }
/*   likeBtn.classList.toggle("fa-solid"); 
  addToLikedSOngs(musicIndex); */

  toggleLikedSongs(musicIndex);
});

//klik na play i pause
playPauseBtn.addEventListener("click", function () {
  let songCardPlayIcon = document.querySelector(`.songCard[data-song-number='${musicIndex}'] .songCardPlay i`);
  playPauseBtn.classList.toggle('active');
  if (playPauseBtn.classList.contains("active")) {
    songCardPlayIcon.className = 'fa-solid fa-circle-pause active'
    localStorage.setItem("playBtnState", true);
    playMusic();
  } else {
    songCardPlayIcon.className = 'fa-solid fa-circle-play'
    localStorage.setItem("playBtnState", false);
    pauseMusic();
  }
});

//nazad/napred dugme
forewardBtn.addEventListener("click", nextSong);
backwardBtn.addEventListener("click", previousSong);

//namestanje progress bar-a i vreme pesme
songAudio.addEventListener("timeupdate", (e) => {
  let currentSongTime = e.target.currentTime;
  localStorage.setItem("currentSongTime", currentSongTime);

  let durationOfSong = e.target.duration;

  let progressBarWidth = (currentSongTime / durationOfSong) * 100;

  if (currentSongTime) {
    localStorage.setItem("progressBarWith", progressBarWidth);
  } else {
    localStorage.setItem("progressBarWith", 0);
  }
  progressBar.style.width = `${progressBarWidth}%`;

  minutesCurrent = Math.floor(songAudio.currentTime / 60);
  secondsCurrent = Math.floor(songAudio.currentTime % 60);
  if (secondsCurrent < 10) {
    secondsCurrent = "0" + secondsCurrent;
  }
  songCurrentTimeP.innerHTML = `${minutesCurrent}:${secondsCurrent}`;

  songAudio.addEventListener("loadeddata", () => {
    minutesDuration = Math.floor(songAudio.duration / 60);
    secondsDuration = Math.floor(songAudio.duration % 60);
    if (secondsDuration < 10) {
      secondsDuration = "0" + secondsDuration;
    }
    songDurationP.innerHTML = `${minutesDuration}:${secondsDuration}`;
  });
});

repeatBtn.addEventListener("click", repeatSongActive);
shuffleBtn.addEventListener("click", shuffleSongsActive);
progressBarFull.addEventListener("click", (e) => {
  let progressBarWidthPixel = progressBarFull.clientWidth;
  let positionX = e.offsetX;
  let songTotalDuarion = songAudio.duration;
  songAudio.currentTime =
    (positionX / progressBarWidthPixel) * songTotalDuarion;
  playMusic();
});

songAudio.addEventListener("ended", function () {
  if (repeatBtn.classList.contains("active")) {
    repeatSong();
  } else if (shuffleBtn.classList.contains("active")) {
    shuffleSongs();
  } else {
    nextSong();
  }
});

/*FUNKCIJE----------------------------------------------------------------------------
-------------------------------------------------------------------------------------*/



function loadMusic(index, updateSongHistory = true) {
  songName.innerHTML = songsList[index].naziv;
  songArtist.innerHTML = songsList[index].izvodjac;
  songImage.crossOrigin = "Anonymous";
  songImage.src = `${songsList[index].img}`;
  songAudio.src = `/music/${songsList[index].src}.mp3`;
  progressBar.style.width = `${localStorage.getItem("progressBarWidth")}%`;

  updateMusicIndex(index);
  updateLikeBtnState(index);

  if(localStorage.getItem("currentSongTime")){
    songAudio.currentTime = localStorage.getItem("currentSongTime");
  }
  else{
    songAudio.currentTime = 0;
  }

  //localStorage.setItem("musicIndex", index);
  if(updateSongHistory){

    setSongHistory(index);
  }
}

function updateMusicIndex(index) {
  musicIndex = index;
  localStorage.setItem("musicIndex", index);
}

function muteSound() {
  console.log("u mute funkciji: ", currentVolume);
  if (
    volumeBtn.classList.contains("fa-volume-high") ||
    volumeBtn.classList.contains("fa-volume-low")
  ) {
    songAudio.volume = 0;
    volumeBtn.className = "fa-solid fa-volume-xmark"; 

    volumeBar.style.width = 0;
  } else if (volumeBtn.classList.contains("fa-volume-xmark")) {
    loadVolume(currentVolume);

    if(songAudio.volume < 0.5){
      volumeBtn.className = "fa-solid fa-volume-low" ;
    }else if(songAudio.volume >= 0.5){
      volumeBtn.className = "fa-solid fa-volume-high";
    }
  }
}

function loadVolume(volumeValue) {
  songAudio.volume = volumeValue;
  currentVolume = volumeValue;
  console.log(volumeValue*100);
  volumeBar.style.width = `${volumeValue * 100}%`;
  if(songAudio.volume === 0){
    console.log("0 volume", volumeBtn.classList);
    volumeBtn.className = "fa-solid fa-volume-xmark" 
  }else if(songAudio.volume > 0.5){
    console.log("vece od 0.5 ", volumeBtn.classList);
    
    volumeBtn.className = "fa-solid fa-volume-high" 
  }else {
    console.log("manje od 0.5 ", volumeBtn.classList);
    volumeBtn.className = "fa-solid fa-volume-low" 
  }
}


//namestanje pozadine na osnovu slike
function updateBodyBackground(image) {
  image.addEventListener("load", () => {
    const colorThief = new ColorThief();
    const dominantColor = colorThief.getColor(image);
    const pallete = colorThief.getPalette(image, 3);
    const rgbToCss = (rgb) => `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    const gradient = `linear-gradient(${rgbToCss(dominantColor)}, ${rgbToCss(
      pallete[1]
    )}, ${rgbToCss(pallete[2])})`;
    document.body.style.background = gradient;
  });
}

function playMusic() {
  playPauseBtn.classList.remove("fa-play");
  playPauseBtn.classList.add("fa-pause");
  songAudio.play();
}

function pauseMusic() {
  let songCardPlayIcon = document.querySelector(`.songCard[data-song-number='${musicIndex}'] .songCardPlay i`);
  songCardPlayIcon.className = "fa-solid fa-circle-play";
  playPauseBtn.classList.remove("fa-pause");
  playPauseBtn.classList.add("fa-play");
  songAudio.pause();
}

function updatePlayIcons(index){
  let allPlayIcons = document.querySelectorAll(".songCardPlay i");
    allPlayIcons.forEach((icon) =>{
      icon.className = "fa-solid fa-circle-play";
    })
    let currentPlayIcon = document.querySelector(`.songCard[data-song-number='${index}'] .songCardPlay i`);
    currentPlayIcon.className = 'fa-solid fa-circle-pause active'

}

function nextSong() {
  playIconsArray = [];

  backwardBtn.disabled = false;
  localStorage.removeItem("currentSongTime");
  if (shuffleBtn.classList.contains("active")) {
    shuffleSongs();
  } else {
    musicIndex++;
    if (musicIndex > songsList.length - 1) {
      musicIndex = 0;
    } else {
      musicIndex = musicIndex;
    }
    updatePlayIcons(musicIndex);
    loadMusic(musicIndex, true);
    playMusic();
  }
  localStorage.setItem("musicIndex", musicIndex);
}

function previousSong() {
  console.log("song history: ", songHistory.length);
  localStorage.removeItem("currentSongTime");
  if (songHistory.length > 1) {
    console.log("PRE pop-a: ", songHistory);
    songHistory.pop();
    console.log("POSLE pop-a: ", songHistory);
    musicIndex = songHistory.pop();
    if (musicIndex) {
      backwardBtn.disabled = false;
      console.log("music index ", musicIndex);
      updatePlayIcons(musicIndex);
      loadMusic(musicIndex);
      playMusic();
    } else {
      backwardBtn.disabled = true;
    }
  } else {
    if (shuffleBtn.classList.contains("active")) {
      console.log("tu sam");
      shuffleSongs(true);
    } else {
      songHistory = [];
      musicIndex --;
      if (musicIndex < 0) {
        musicIndex = songsList.length - 1;
      } 
      updatePlayIcons(musicIndex);
      loadMusic(musicIndex, false);
      playMusic();
    }
  }
}

function repeatSongActive() {
  repeatBtn.classList.toggle("active");
  if (repeatBtn.classList.contains("active")) {
    localStorage.setItem("repeatActive", true);
  } else {
    localStorage.setItem("repeatActive", false);
  }
}

function repeatSong() {
  if (repeatBtn.classList.contains("active")) {
    console.log(repeatBtn.classList);
    songAudio.currentTime = 0;
    playMusic();
  }
}

function shuffleSongsActive() {
  shuffleBtn.classList.toggle("active");
  if (shuffleBtn.classList.contains("active")) {
    localStorage.setItem("shuffleActive", true);
  } else {
    localStorage.setItem("shuffleActive", false);
  }
}

function shuffleSongs(fromPreviousSong = false) {
  localStorage.removeItem("currentSongTime");

  randomNmbr = Math.floor(Math.random() * songsList.length);
  do {
    randomNmbr = Math.floor(Math.random() * songsList.length);
  } while (musicIndex === randomNmbr);
  musicIndex = randomNmbr;
  if(fromPreviousSong){
    songHistory = [];
  }



  updatePlayIcons(musicIndex);
  loadMusic(musicIndex, !fromPreviousSong);
  playMusic();
}

function setSongHistory(index) {
  if (songHistory[songHistory.length] - 1 !== index) {
    songHistory.push(index);
  }
  if (songHistory.length > 10) {
    songHistory = songHistory.slice(-10);
  }

  console.log("trenutna istorija: ", songHistory);
}

function toggleLikedSongs(index){
  const songIndex = likedSongsList.indexOf(index);
  if(songIndex === -1){
    likedSongsList.push(index);
    likeBtn.className = "fa-solid fa-heart";
  }else{
    likedSongsList.splice(songIndex, 1);
    likeBtn.className = "fa-regular fa-heart";
  }
  localStorage.setItem("likedSongsList", JSON.stringify(likedSongsList));
}

function updateLikeBtnState(index){
  if(likedSongsList.includes(index)){
    likeBtn.className = "fa-solid fa-heart"
  }
  else{
    likeBtn.className = "fa-regular fa-heart"
  }
}
