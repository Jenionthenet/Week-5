// Internet 
// Request and Response 

// Request = HTML pages, images, mp3, mp4, gifs, js, css
// Response = Content returned from the server 

// API = Application Programable Interface - Two applications can talk to each other 

// Asynchronous Requests 

// types of request 
// GET - Get the resource from the server 
// POST - Create new content 
// PATCH - Update existing content or part of the content 
// PUT - Updating existing content 

const postsUL = document.getElementById("postsUL")

let request = new XMLHttpRequest()

// The load function is a callback function which will be called back later..
request.addEventListener('load', function() {

    console.log(this.responseText)
    // JSON.parse is going to convert the text to JSON object. The text should be VALID JSON
    //const posts = JSON.parse(this.responseText)
    //const postItems = posts.map(function(post) {
    //    const postItem = `<li>${post.title}</li>`
    //    return postItem
    //})

    //postsUL.innerHTML = postItems.join("")

})

request.open('GET', 'https://dog.ceo/api/breeds/image/random')
// sends the request to the above url 
console.log('about to send a request')
request.send() 



