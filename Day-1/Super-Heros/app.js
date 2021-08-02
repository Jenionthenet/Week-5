const moviesUL = document.getElementById("moviesUL")
const batMoviesURL = "https://www.omdbapi.com/?s=batman&apikey=47657be6"
const emptyDiv = document.getElementById("emptyDiv")
const titleBtns = document.getElementsByClassName("movieBtns")
let request = new XMLHttpRequest()

request.addEventListener('load', function(){
    console.log(this.responseText)

    const movies = JSON.parse(this.responseText)
    console.log(movies)
    const movieItems = movies.Search.map(function(movie) {
        const movieItem = `
        <li class = "lists">
            <div>
                <img  class="posters" src="${movie.Poster}" alt="">
            </div>
            <a href="#emptyDiv"><button onClick= showMovieDetails("${movie.imdbID}) class="movieBtns">${movie.Title}</button></a>
        </li>
        `
        return movieItem

    }) 
    moviesUL.innerHTML = movieItems.join("")
    

})
request.open("GET", batMoviesURL)
request.send()


function showMovieDetails(id) {
    const movieId = btn.getAttribute('data-movieId')

        console.log(id) 
}
    // http://www.omdbapi.com/?i=insertSelectedimdbIDhere&apikey=insertyourkeyhere

    const selectedMovieUrl = `http://www.omdbapi.com/?i=${id}&apikey=47657be6
    `

    console.log(selectedMovieUrl) // see if this url works 
    let detalRequest = new XMLHttpRequest()
    detalRequest.addEventListener("load", function(){
        const result = JSON.parse(this.responseText)
        console.log(result)
    })
        detailRequest.open("GET", selectedMovieUrl)
        detailRequest.send()
    
    
    /*
    movies.map(function(movie) {
        const movieItemII = `<h1>${movie.Title}</h1>
        <div><img class="posterPic"src="${movie.Poster}" alt=""></div>
        <h3>${movie.year}</h3>
        <h3>${movie.Rated}</h3>
        <h3>${movie.Released}</h3>
        <h3>${movie.Director}</h3>`
        return movieItemII
    }) 
})



