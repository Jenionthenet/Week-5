const pictureContainer = document.getElementById("pictureContainer")
const showPicBtn = document.getElementById("showPicButton")
const dogPicsURL = "https://dog.ceo/api/breeds/image/random"

showPicBtn.addEventListener('click', function() {
    let request= new XMLHttpRequest()

    request.addEventListener('load',function() {
        console.log(this.responseText)

        const picResult = JSON.parse(this.responseText)
        
        const pictureURL = ` <img 
        src="${picResult.message}" />`
        //return pictureURL
        pictureContainer.innerHTML = pictureURL
} )
console.log()
request.open("GET", dogPicsURL)

request.send()
})

