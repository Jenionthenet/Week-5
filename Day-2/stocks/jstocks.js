

const symbol = "CVS"
const title = "CVS"
let price = 250
let quantity = 50

const stocksURL = "https://endurable-bead-polo.glitch.me/stocks"

let request = new XMLHttpRequest()
request.open("POST", stocksURL)
request.setRequestHeader("Content-Type", "application/json") 

const body = {
    symbol: symbol,
    title: title,
    price: price,
    quantity: quantity,
}

console.log()

request.send(JSON.stringify(body))