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
        col.innerHTML += 
            `<div class = "album-card">
                <img src =${albums[i].album.cover_medium}>
                <p>${albums[i].album.title}</p>
            </div>`
            container.appendChild(col)
    }


})


}

searchIcon.addEventListener("click", toShow)
userSearch.addEventListener("onkeypress", searchingFor)