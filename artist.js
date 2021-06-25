// API
let id = new URLSearchParams(window.location.search).get("id")

console.log(id)

let row = document.getElementsByClassName("row")[1]
    let arrTitles = []
    let arrAlbums = []

    
const findAlbums = function(query) {
  
  fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
  .then(result => result.json())
  .then(data => {
    let arrOfSongs = data.data
    for(let i=0; i<arrOfSongs.length; i++){
      if (arrTitles.includes(arrOfSongs[i].album.title)){
        return
      } else {
        arrTitles.push(arrOfSongs[i].album.title)
        arrAlbums.push(arrOfSongs[i].album)
      }
      arrAlbums.forEach((album) => {
        let col = document.createElement("div")
        col.classList.add("col-3")

        let img = document.createElement("img")
        img.classList.add("img-fluid")
        img.style.width = "15rem"
        img.src = album.cover_big
        
        let p = document.createElement("p")
        p.innerHTML = `${album.title}`
        
        img.onclick = () => {
          window.location.assign("./album.html?id=" + album.id)
        }
        p.onclick = () => {
          window.location.assign("./album.html?id=" + album.id)
        }
        col.appendChild(img)
        col.appendChild(p)
        row.appendChild(col)
        
})      
    }
  })
}
findAlbums("queen")
console.log(arrAlbums)
console.log(arrAlbums.length)



/* 
const displayArtist = function(id){
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${id}`)
    .then(result => result.json())
    .then(artists => {
       console.log(artists)
    })
  }

displayArtist("412") */