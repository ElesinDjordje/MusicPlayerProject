const trendingSongsList = document.querySelector(".trendingSongsContr"),
  popularArtistsList = document.querySelector(".popularArtistsContr");
const leftArrows = document.querySelectorAll(".arrowLeft"),
  rightArrows = document.querySelectorAll(".arrowRight");
const mainSection = document.querySelector(".mainPage");

window.addEventListener("load", function () {
  loadTrendingSongs(songsList);
  loadPopularArtists(songsList);
});



leftArrows.forEach((leftArrow) => {
  leftArrow.addEventListener("click", function () {
    if (leftArrow.dataset.leftArrowBtn === "trendingSongs") {
      trendingSongsList.style.scrollBehavior = "smooth";
      trendingSongsList.scrollBy(-160, 0);
    } else {
      popularArtistsList.style.scrollBehavior = "smooth";
      popularArtistsList.scrollBy(-160, 0);
    }
  });
});

rightArrows.forEach((rightArrow) => {
  rightArrow.addEventListener("click", function () {
    if (rightArrow.dataset.rightArrowBtn === "trendingSongs") {
      trendingSongsList.style.scrollBehavior = "smooth";
      trendingSongsList.scrollBy(160, 0);
    } else {
      popularArtistsList.style.scrollBehavior = "smooth";
      popularArtistsList.scrollBy(160, 0);
    }
  });
});

function loadTrendingSongs(songsList) {
  let playIconsArray = [];

  songsList.forEach((song, index) => {
    let songCard = document.createElement("div");
    songCard.className = "songCard";
    songCard.dataset.songNumber = index.toString();

    let trendingSongImgContr = document.createElement("div");
    trendingSongImgContr.className = "trendingSongImgContr";
    let trendingSongImg = document.createElement("img");
    trendingSongImg.className = "trendingSongImg";
    trendingSongImg.src = song.img;
    trendingSongImg.crossOrigin = "Anonymous";

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

        let updatedIndex = parseInt(songCard.dataset.songNumber);
        updateMusicIndex(updatedIndex);
        loadMusic(updatedIndex);
        songAudio.currentTime = 0;
        playMusic();
      } else {
        playIcon.className = "fa-solid fa-circle-play";
        pauseMusic();
      }
    });

    trendingSongImgContr.appendChild(trendingSongImg);
    trendingSongImgContr.appendChild(songCardPlay);

    songDetails.appendChild(songName);
    songDetails.appendChild(songArtist);

    songCard.appendChild(trendingSongImgContr);
    songCard.appendChild(songDetails);

    songCard.addEventListener("mouseenter", function () {
      changeMainBackground(trendingSongImg);
    });
    songCard.addEventListener("mouseleave", function () {
      mainSection.style.background =
        "linear-gradient(rgb(51, 51, 51), rgb(19, 19, 19))";
    });

    trendingSongsList.appendChild(songCard);
  });
}

function loadPopularArtists(songList) {
  let artistsArray = [];
  songList.forEach((artist) => {
    if (!artistsArray.includes(artist.izvodjac)) {
      artistsArray.push(artist.izvodjac);
      let artistCard = document.createElement("div");
      artistCard.className = "artistCard";

      let popularArtistImgContr = document.createElement("div");
      popularArtistImgContr.className = "popularArtistImgContr";
      let popularArtistImg = document.createElement("img");
      popularArtistImg.className = "popularArtistImg";
      popularArtistImg.src = artist.izvodjacImg;

      let artistDetails = document.createElement("div");
      artistDetails.className = "artistDetails";

      let artistName = document.createElement("p");
      artistName.className = "artistName";
      artistName.innerHTML = `${artist.izvodjac}`;

      let artistTitle = document.createElement("p");
      artistTitle.className = "artistTitle";
      artistTitle.innerHTML = "Artist";

      popularArtistImgContr.appendChild(popularArtistImg);

      artistDetails.appendChild(artistName);
      artistDetails.appendChild(artistTitle);

      artistCard.appendChild(popularArtistImgContr);
      artistCard.appendChild(artistDetails);

      popularArtistsList.appendChild(artistCard);
    }
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
