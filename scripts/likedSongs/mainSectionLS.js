const mainSection = document.querySelector(".mainPage");
const likedSongsContr = document.querySelector(".likedSongsContr");

let likedSongsList = localStorage.getItem("likedSongsList") || [];

window.addEventListener('load', function(){
  filterSongs(likedSongsList);
});

function filterSongs(){
  let filteredSongsArray = songsList.filter((song, index) =>
    likedSongsList.includes(index)
  );
  loadAllSongs(filteredSongsArray);
}

function loadAllSongs(songsToLoad){
  console.log(songsToLoad);
  let playIconsArray = [];

  likedSongsContr.innerHTML = '';

  if(songsToLoad.length === 0){
    let noResults = document.createElement('h1');
    noResults.className = "noResults";
    noResults.innerHTML = "No Results Found"

    let noResultsPargh = document.createElement('h4');
    noResultsPargh.className = "noResults"
    noResultsPargh.innerHTML = 'Try exploring some other options'

    allSongCardsContr.appendChild(noResults);
    allSongCardsContr.appendChild(noResultsPargh);
  }

  let orderNumber = 1;

  songsToLoad.forEach((song) => {
    let songCard = document.createElement("div");
    songCard.className = "songCard";
    songCard.dataset.songNumber = songsList.indexOf(song).toString();
    songCard.dataset.songId = `${song.naziv}-${song.izvodjac}`;

    let songOrderNumber = document.createElement("p");
    songOrderNumber.innerHTML = `${orderNumber++}`;
    songOrderNumber.className = "songOrderNumber";

    let songOrderNumberContr = document.createElement("div");
    songOrderNumberContr.className = "songOrderNumberContr";
    songOrderNumberContr.appendChild(songOrderNumber);

    songCard.appendChild(songOrderNumberContr);

    let songImgContr = document.createElement("div");
    songImgContr.className = "songImgContr";
    let songImg = document.createElement("img");
    songImg.className = "songImg";
    songImg.src = song.img;
    songImg.crossOrigin = "Anonymous";

    let songCardPlay = document.createElement("button");
    songCardPlay.className = "songCardPlay";

    let playIcon = document.createElement("i");
    playIcon.className = "fa-solid fa-circle-play";
    songCardPlay.appendChild(playIcon);

    playIconsArray.push(playIcon);
    

    let songDetails = document.createElement("div");
    songDetails.className = "songDetails";

    let songName = document.createElement("p");
    songName.className = "songName";
    songName.innerHTML = `${song.naziv}`;

    let songArtist = document.createElement("p");
    songArtist.className = "songArtist";
    songArtist.innerHTML = `${song.izvodjac}`;

    songCardPlay.addEventListener("click", function () {
      if (playIcon.classList.contains("fa-circle-play")) {
        playIconsArray.forEach((icon) => {
          icon.className = "fa-solid fa-circle-play";
        });
        playIcon.className = "fa-solid fa-circle-pause active";

        /* let updatedIndex = parseInt(songCard.dataset.songNumber); */
        let songIndex = songsList.findIndex(sIndex => `${sIndex.naziv}-${sIndex.izvodjac}` === songCard.dataset.songId)
        updateMusicIndex(songIndex);
        loadMusic(songIndex);
        songAudio.currentTime = 0;
        playMusic();
      } else {
        playIcon.className = "fa-solid fa-circle-play";
        pauseMusic();
      }
    });

    songImgContr.appendChild(songImg);
    songImgContr.appendChild(songCardPlay);

    songDetails.appendChild(songName);
    songDetails.appendChild(songArtist);

    songCard.appendChild(songImgContr);
    songCard.appendChild(songDetails);

    songCard.addEventListener("mouseenter", function () {
      changeMainBackground(songImg);
    });
    songCard.addEventListener("mouseleave", function () {
      mainSection.style.background =
        "linear-gradient(rgb(51, 51, 51), rgb(19, 19, 19))";
    });

    likedSongsContr.appendChild(songCard);
  });
}

function changeMainBackground(image) {
  console.log("tu sam");
  const colorThief = new ColorThief();
  const dominantColor = colorThief.getColor(image);
  const rgbToCss = (rgb) => `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
  const gradient = `linear-gradient(${rgbToCss(
    dominantColor
  )}, rgb(51, 51, 51),rgb(35, 35, 35), rgb(19, 19, 19))`;
  mainSection.style.background = gradient;
}
