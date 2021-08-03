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
            <h3 class="liH3" onClick= showMovieDetails("${movie.imdbID}") >${movie.Title}</h3>
        </li>
        `
        return movieItem

    })
    moviesUL.innerHTML = movieItems.join("")

})
request.open("GET", batMoviesURL)
request.send()


function showMovieDetails(id) {
    
      console.log(id)


const selectedMovieUrl = `http://www.omdbapi.com/?i=${id}&apikey=47657be6
    `
console.log(selectedMovieUrl)  

let detailRequest = new XMLHttpRequest()
detailRequest.addEventListener("load", function () {
    const result = JSON.parse(this.responseText)
    console.log(result)
    const movieDetails = function() {
        const  detailsItem = `
        <h1>${result.Title}</h1>
        <div><img class="posterPic"src="${result.Poster}" alt=""></div>
        <h3>Year: ${result.Year}</h3>
        <h3>Rating: ${result.Rated}</h3>
        <h3>Released on: ${result.Released}</h3>
        <h3>Director: ${result.Director}</h3>`
        
        return detailsItem

    }      
    
    emptyDiv.innerHTML = movieDetails()
    
})


detailRequest.open("GET", selectedMovieUrl)
detailRequest.send()
}




