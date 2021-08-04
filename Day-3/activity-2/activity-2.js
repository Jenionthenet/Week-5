const ordersURL = "https://troubled-peaceful-hell.glitch.me/orders"

function getAllOrders(ordersDownloaded) {

    fetch(ordersURL)
        .then(function(response) {
            return response.json()
        }).then(function(result) {
            ordersDownloaded(result)
        }).catch(function (error) {
            console.log(error)
        })

}

getAllOrders(function(orders){
    console.log(orders)
})



function retrieveAllOrders(ordersDownloaded) {

    fetch(ordersURL)
    .then(response => {
            return response.json()
    }).then(result => {
            ordersDownloaded(result)
        }).catch(error => {
            console.log(error)
        })

}

retrieveAllOrders(function(orders){
    console.log(orders)
})