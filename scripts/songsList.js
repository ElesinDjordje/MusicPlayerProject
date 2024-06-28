let songsList = [
  {
    naziv: "Let It Be",
    izvodjac: "The Beatles",
    img: "https://i.scdn.co/image/ab67616d00001e0284243a01af3c77b56fe01ab1",
    src: "The Beatles - Let It Be",
    izvodjacImg: "https://i.scdn.co/image/ab67616100005174e9348cc01ff5d55971b22433"
  },
  {
    naziv: "September",
    izvodjac: "Earth, Wind & Fire",
    img: "https://i.scdn.co/image/ab67616d00001e024dd033f4cf3a0a58059cde69",
    src: "Earth, Wind & Fire - September (Official HD Video)",
    izvodjacImg: "https://i.scdn.co/image/ab6761610000f1789722e16a886767adf1178f92"

  },
  {
    naziv: "Maneater",
    izvodjac: "Daryl Hall & John Oates",
    img:"https://i.scdn.co/image/ab67616d00001e02cfe4163cbb6d12f3ec15898e",
    src: "Daryl Hall & John Oates - Maneater (Official Video)",
    izvodjacImg: "https://i.scdn.co/image/ab6761610000f178ae81417d966e209b735b1160"
  },
  {
    naziv: "Back In Black",
    izvodjac: "ACDC",
    img: "https://i.scdn.co/image/ab67616d00001e020b51f8d91f3a21e8426361ae",
    src: "ACDC - Back In Black (Official Video)",
    izvodjacImg: "https://i.scdn.co/image/ab6761610000f178c4c77549095c86acb4e77b37"
  },
  {
    naziv: "Highway to Hell",
    izvodjac: "ACDC",
    img: "https://i.scdn.co/image/ab67616d00001e0251c02a77d09dfcd53c8676d0",
    src: "ACDC - Highway to Hell (Official Video)",
    izvodjacImg: "https://i.scdn.co/image/ab6761610000f178c4c77549095c86acb4e77b37"
  },
  {
    naziv: "Adore You ",
    izvodjac: "Harry Styles",
    img: "https://i.scdn.co/image/ab67616d00001e0277fdcfda6535601aff081b6a",
    src: "Adore You",
    izvodjacImg: "https://i.scdn.co/image/ab67616100005174f7db7c8ede90a019c54590bb"
  },
  {
    naziv: "Bad Habit",
    izvodjac: "Steve Lacy",
    img: "https://i.scdn.co/image/ab67616d00001e029904ecb0b1148a128bdd5e36",
    src: "Bad Habit",
    izvodjacImg: "https://i.scdn.co/image/ab6761610000f17809ac9d040c168d4e4f58eb42"
  },
  {
    naziv: "Stayin' Alive",
    izvodjac: "Bee Gees",
    img: "https://i.scdn.co/image/ab67616d00001e0255fb38fda5321a8923911ff9",
    src: "Bee Gees - Stayin' Alive (Official Music Video)",
    izvodjacImg: "https://i.scdn.co/image/c707552215757c7f2dc6071e32d487a3c7b28d3f"
  },
  {
    naziv: "Beggin'",
    izvodjac: "Maneskin",
    img: "https://i.scdn.co/image/ab67616d00001e02fa0ab3a28b5c52d8a5f97045",
    src: "Beggin'",
    izvodjacImg: "https://i.scdn.co/image/ab6761610000f17846d0db8a86fda630ec12401f"
  },
  {
    naziv: "Blinding Lights",
    izvodjac: "The Weeknd",
    img: "https://i.scdn.co/image/ab67616d00001e02a3eff72f62782fb589a492f9",
    src: "Blinding Lights",
    izvodjacImg: "https://i.scdn.co/image/ab67616100005174214f3cf1cbe7139c1e26ffbb"
  },
  {
    naziv: "It's My Life",
    izvodjac: "Bon Jovi",
    img: "https://i.scdn.co/image/ab67616d00001e02032da87dd5980cca49c8f01b",
    src: "It's My Life Bon Jovi HQ",
    izvodjacImg: "https://i.scdn.co/image/ab6761610000f17852aade0d2ea19706074da4b9"
  },
  {
    naziv: "The Lazy Song",
    izvodjac: "Bruno Mars",
    img: "https://i.scdn.co/image/ab67616d00001e02f60070dce96a2c1b70cf6ff0",
    src: "Bruno Mars - The Lazy Song (Lyrics)",
    izvodjacImg: "https://i.scdn.co/image/ab67616100005174c36dd9eb55fb0db4911f25dd"
  },
  {
    naziv: "Circles",
    izvodjac: "Post Malone",
    img: "https://i.scdn.co/image/ab67616d00001e029478c87599550dd73bfa7e02",
    src: "Circles",
    izvodjacImg: "https://i.scdn.co/image/ab67616100005174e17c0aa1714a03d62b5ce4e0"
  },
  {
    naziv: "Paradise City",
    izvodjac: "Guns N' Roses",
    img: "https://i.scdn.co/image/ab67616d00001e0221ebf49b3292c3f0f575f0f5",
    src: "Guns N' Roses - Paradise City (Official Music Video)",
    izvodjacImg: "https://i.scdn.co/image/ab6761610000517450defaf9fc059a1efc541f4c"
  },
  {
    naziv: "Sing of the Times",
    izvodjac: "Harry Styles",
    img: "https://i.scdn.co/image/ab67616d00001e026c619c39c853f8b1d67b7859",
    src: "Harry Styles - Sign of the Times (Official Video)",
    izvodjacImg: "https://i.scdn.co/image/ab67616100005174f7db7c8ede90a019c54590bb"
  },
  {
    naziv: "I Was Made For Lovin' You",
    izvodjac: "Kiss",
    img: "https://i.scdn.co/image/ab67616d00001e024384b6976cadaec272114022",
    src: "Kiss - I Was Made For Lovin' You",
    izvodjacImg: "https://i.scdn.co/image/ab6761610000f178d8205a492a79bfe4b34c567a"
  },
  {
    naziv: "Kiss of Life",
    izvodjac: "Sade",
    img: "https://i.scdn.co/image/ab67616d00001e025e25e034e25258b356774c79",
    src: "Kiss of Life",
    izvodjacImg: "https://i.scdn.co/image/ab6761610000517492883b0e094a36d2f43ad284"
  },
  {
    naziv: "Leave The Door Open",
    izvodjac: "Bruno Mars ft. Anderson. Paak, Silk Sonic",
    img: "https://i.scdn.co/image/ab67616d00001e02d0bbd3ea2ec554f17a6603cc",
    src: "Leave The Door Open",
    izvodjacImg: "https://i.scdn.co/image/ab67616100005174c36dd9eb55fb0db4911f25dd"
  },
  {
    naziv: "Rude",
    izvodjac: "MAGIC!",
    img: "https://i.scdn.co/image/ab67616d00001e02604f8ac39f15d287e251f193",
    src: "MAGIC! - Rude (Official Video)",
    izvodjacImg: "https://i.scdn.co/image/ab6761610000f1788b68d29a8713b8260aa18e19"
  },
  {
    naziv: "Uptown Funk",
    izvodjac: "Mark Ronson ft. Bruno Mars",
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/f4566429747127.5601cc2b9c191.jpg",
    src: "Mark Ronson - Uptown Funk (Official Video) ft. Bruno Mars",
    izvodjacImg: "https://i.scdn.co/image/ab67616100005174105cc9628c315b29d299fbb4"
  },
  {
    naziv: "Nothing Else Matters",
    izvodjac: "Metallica",
    img: "https://i.scdn.co/image/ab67616d00001e02cf84c5b276431b473e924802",
    src: "Metallica - Nothing Else Matters (Official Music Video)",
    izvodjacImg: "https://i.scdn.co/image/ab6761610000517469ca98dd3083f1082d740e44"
  },
  {
    naziv: "Billie Jean",
    izvodjac: "Michael Jackson",
    img: "https://i.scdn.co/image/ab67616d00001e024121faee8df82c526cbab2be",
    src: "Michael Jackson - Billie Jean (Official Video)",
    izvodjacImg: "https://i.scdn.co/image/ab676161000051740e08ea2c4d6789fbf5cbe0aa"
  },
  {
    naziv: "How You Remind Me",
    izvodjac: "Nickelback",
    img: "https://i.scdn.co/image/ab67616d00001e02699a422d25adc550dc5aa11c",
    src: "Nickelback - How You Remind Me [OFFICIAL VIDEO]",
    izvodjacImg: "https://i.scdn.co/image/ab676161000051744ad382f899596d8c7b9e8e09"
  },
  {
    naziv: "Counting Stars",
    izvodjac: "OneRepublic",
    img: "https://i.scdn.co/image/ab67616d00001e029e2f95ae77cf436017ada9cb",
    src: "OneRepublic - Counting Stars",
    izvodjacImg: "https://i.scdn.co/image/ab6761610000517457138b98e7ddd5a86ee97a9b"
  },
  {
    naziv: "Timber",
    izvodjac: "Pitbull ft Ke$ha",
    img: "https://i.scdn.co/image/ab67616d00001e02f2486b438645e97b523e4f90",
    src: "Pitbull - Timber (Official Video) ft. Ke$ha",
    izvodjacImg: "https://i.scdn.co/image/ab67616100005174ee07b5820dd91d15d397e29c"
  },
  {
    naziv: "Bohemian Rhapsody",
    izvodjac: "Queen",
    img: "https://i.scdn.co/image/ab67616d00001e02e8b066f70c206551210d902b",
    src: "Queen  Bohemian Rhapsody (Official Video Remastered)",
    izvodjacImg: "https://i.scdn.co/image/c06971e9ff81696699b829484e3be165f4e64368"
  },
  {
    naziv: "Losing My Religion",
    izvodjac: "R.E.M",
    img: "https://i.scdn.co/image/ab67616d00001e02e2dd4e821bcc3f70dc0c8ffd",
    src: "R.E.M. - Losing My Religion Lyrics",
    izvodjacImg: "https://i.scdn.co/image/ab676161000051746334ab6a83196f36475ada7f"
  },
  {
    naziv: "The Business",
    izvodjac: "Tiësto",
    img: "https://i.scdn.co/image/ab67616d00001e02f461bbc21a9bcec43a926973",
    src: "The Business",
    izvodjacImg: "https://i.scdn.co/image/ab67616100005174e84e08fb1dfa2bf9b5a61563"
  },
  {
    naziv:"Hold The Line",
    izvodjac: "Toto",
    img: "https://i.scdn.co/image/ab67616d00001e02f903e62767a0e22e33b7af83",
    src: "Toto - Hold The Line (Official Video)",
    izvodjacImg: "https://i.scdn.co/image/ab67616100005174a59a5bcab211f964fe9bfb06"
  }
  
  
]