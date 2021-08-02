const moviesUL = document.getElementById("moviesUL")
const batMoviesURL = "https://www.omdbapi.com/?s=batman&apikey=47657be6"
const emptyDiv = document.getElementById("emptyDiv")
const titleBtns = document.getElementsByClassName("movieBtns")
let request = new XMLHttpRequest()

request.addEventListener('load', function () {
    console.log(this.responseText)

    const movies = JSON.parse(this.responseText)
    console.log(movies)
    const movieItems = movies.Search.map(function (movie) {
        const movieItem = `
        <li class = "lists">
            <div>
                <img  class="posters" src="${movie.Poster}" alt="">
            </div>
            <h3 onClick= showMovieDetails("${movie.imdbID}") >${movie.Title}</h3>
        </li>
        `
        return movieItem

    })
    moviesUL.innerHTML = movieItems.join("")


})
request.open("GET", batMoviesURL)
request.send()


function showMovieDetails(id) {
    //const movieId = button.getAttribute('movieBtns')

    console.log(id)

// http://www.omdbapi.com/?i=insertSelectedimdbIDhere&apikey=insertyourkeyhere

const selectedMovieUrl = `http://www.omdbapi.com/?i=${id}&apikey=47657be6
    `

console.log(selectedMovieUrl) // see if this url works 

let detailRequest = new XMLHttpRequest()
detailRequest.addEventListener("load", function () {
    const result = JSON.parse(this.responseText)
    console.log(result)
    const movieDetails = function() {
        const  detailsItem = `
        <h1>${result.Title}</h1>
        <div><img class="posterPic"src="${result.Poster}" alt=""></div>
        <h3>${result.year}</h3>
        <h3>${result.Rated}</h3>
        <h3>${result.Released}</h3>
        <h3>${result.Director}</h3>`
        
        return detailsItem

    }      
    
    emptyDiv.innerHTML = movieDetails()
    
})



detailRequest.open("GET", selectedMovieUrl)
detailRequest.send()
}




