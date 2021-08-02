const dogFactsUL = document.getElementById("dogFactsUL")
const dogFactsURL = "https://island-bramble.glitch.me/dog-facts"
let request = new XMLHttpRequest()

request.addEventListener('load', function() {
    console.log(this.responseText)

    const facts = JSON.parse(this.responseText)
    const factItems = facts.map(function(fact) {
        const factItem = `<li>${fact.fact}</li>`
        return factItem
    })
    dogFactsUL.innerHTML = factItems.join("")
    console.log(facts)
})

request.open("Get", dogFactsURL)
request.send()