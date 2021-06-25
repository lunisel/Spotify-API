const userSearch = document.querySelector("#userInput")

const toDisplay = document.querySelector("#search-container")

const searchIcon = document.querySelector("#search-icon")

const toShow = function(){
    userSearch.classList.toggle("d-none")
    userSearch.focus()
}


const container = document.querySelector(".containerForAPI")

const searchingFor = function(){
fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${userSearch.value}`)
.then(response => response.json())
.then(data => {
    console.log(data.data)
    
    let albums = data.data

    for(let i = 0; i < albums.length; i++){
        let col = document.createElement("div")
        col.classList.add("col-md-3")

        let img = document.createElement("img")
        img.classList.add("img-fluid")
        img.src = albums[i].album.cover_medium
        img.style.cursor = "pointer"

        img.onclick = () => {
            window.location.assign("./artist.html?id=" + albums[i].artist.id)
        }
        let p = document.createElement("p")
        p.innerText = albums[i].album.title
        p.style.color = "white"
        p.style.cursor = "pointer"

        p.onclick = () => {
            window.location.assign("./artist.html?id=" + albums[i].artist.id)
        }

        col.appendChild(img)
        col.appendChild(p)
        container.appendChild(col)
    }


})


}

searchIcon.addEventListener("click", toShow)
userSearch.addEventListener("onkeypress", searchingFor)