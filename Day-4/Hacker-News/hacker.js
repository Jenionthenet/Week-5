const storyUl = document.querySelector("#stories")


/*function getStoryURL() {
    const storyId =

    return `https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`
}*/

async function getStoryIds(idsDownloaded) {

    const storyIdUrl = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"

    try {
        let response = await fetch(storyIdUrl)
        let storyIds = await response.json()
        idsDownloaded(storyIds)

    } catch (error) {
        console.log("Exception has occured!")
    }
}


getStoryIds(function (storyIds) {
    console.log(storyIds)
    getArticleInfo(storyIds)

})



function getArticleInfo(storyIds) {

    let articlesData = storyIds.map(async function (storyId) {
        await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`)

            .then(function (response) {
                return response.json()
            }).then(function (result) {
                displayStoryInfo(result)
            })


    })

    console.log(Promise.all(articlesData))
}



function displayStoryInfo(storyInformation) {

    let storyData = `
    <li class="articlesList">
        <div id="titleAuthor"><a href="${storyInformation.url}"><h3>${storyInformation.title}</h3></a>
        <h4 id="author">(${storyInformation.by})</h4></div>
        <div><h5>${new Date(storyInformation.time)}</h5></div>
    </li>
    `
    storyUl.insertAdjacentHTML("beforeend", storyData)
}

