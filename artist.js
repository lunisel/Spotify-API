// function to display popular symbols
function displayPopularSymbols(event) {
  //Get all the targets
  const popularNumberTarget =
    event.currentTarget.children[0].children[0].children[0]
  const popularPlayTarget =
    event.currentTarget.children[0].children[0].children[1]
  const likePopularTarget = event.currentTarget.children[2].children[0]
  const popularDotsTarget = event.currentTarget.children[2].children[2]
  //get all the arrays
  const popularNumberArray = document.querySelectorAll(
    ".popular-table-heading .popular-number"
  )
  const playPopularArray = document.querySelectorAll(
    ".popular-table-heading .play-popular"
  )
  const likePopularArray = document.querySelectorAll(".like-poupular")
  const popularDotsArray = document.querySelectorAll(".popular-dots")

  //loop to display the every sign
  for (let i = 0; i < popularNumberArray.length; i++) {
    const popularNumber = popularNumberArray[i]
    const playPopular = playPopularArray[i]
    const likePopular = likePopularArray[i]
    const popularDots = popularDotsArray[i]

    //Now toggle d-none in each one
    if (popularNumberTarget === popularNumber) {
      popularNumber.classList.toggle("d-none")
    }
    if (popularPlayTarget === playPopular) {
      playPopular.classList.toggle("d-none")
    }
    if (likePopularTarget === likePopular) {
      likePopular.classList.toggle("invisible")
    }
    if (popularDotsTarget === popularDots) {
      popularDots.classList.toggle("invisible")
    }
  }
}

// function to show play button on mouse over on display cards
function showPlaySign(event) {
  //get target play button
  const playCardTarget = event.currentTarget.children[0].children[1]

  // get array of play buttons on cards
  const playCardArray = document.querySelectorAll(
    ".artist-song-cards .play-artist-cards"
  )

  for (let i = 0; i < playCardArray.length; i++) {
    const playCard = playCardArray[i]
    if (playCardTarget === playCard) {
      playCard.classList.toggle("invisible")
    }
  }
}

// show play sign, like button and three dot dropdown
// Get the TR array to add event listeners
const tableRowArray = document.querySelectorAll(".popular-table table tbody tr")
//Add event listeners
for (let i = 0; i < tableRowArray.length; i++) {
  const tableRow = tableRowArray[i]
  tableRow.addEventListener("mouseenter", displayPopularSymbols)
}

for (let i = 0; i < tableRowArray.length; i++) {
  const tableRow = tableRowArray[i]
  tableRow.addEventListener("mouseleave", displayPopularSymbols)
}

//Toggle invisible on the play button on the cards
//get array of the cards
const artistSongCardsArray = document.querySelectorAll(".artist-song-cards")

//add event listeners to all cards
for (let i = 0; i < artistSongCardsArray.length; i++) {
  const artistSongCard = artistSongCardsArray[i]
  artistSongCard.addEventListener("mouseenter", showPlaySign)
}
for (let i = 0; i < artistSongCardsArray.length; i++) {
  const artistSongCard = artistSongCardsArray[i]
  artistSongCard.addEventListener("mouseleave", showPlaySign)
}
