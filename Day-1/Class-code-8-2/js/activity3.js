
const showPhotoButton = document.getElementById("showPhotoButton")
const dogImage = document.getElementById("dogImage")

const dogPictureURL = 'https://dog.ceo/api/breeds/image/random'

showPhotoButton.addEventListener('click', function() {

    let request = new XMLHttpRequest() 
    request.open('GET', dogPictureURL)

    request.addEventListener('load', function() {
        // this = request 
        const result = JSON.parse(this.responseText)
        dogImage.setAttribute("src", result.message)
    })

    request.send()
})
