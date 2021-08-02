const jokesUL = document.getElementById("jokeUL")

let request = new XMLHttpRequest()

request.addEventListener('load', function() {
    const result = JSON.parse(this.responseText)
    let joke  = result.value.joke
    console.log(joke)
    /*const jokeItem = (function(joke){
        const jokeItem = `<li>${joke.joke}</li>`
        return jokeItem 
    })
    jokeUL.innerHTML = jokeItem.join("") */
})

request.open('GET', "http://api.icndb.com/jokes/random")
request.send()

console.log(jokeItem)