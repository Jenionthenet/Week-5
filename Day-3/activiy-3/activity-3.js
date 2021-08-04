const ordersURL = "https://troubled-peaceful-hell.glitch.me/orders"
const addOrderBtn = document.getElementById("addOrders")
const displayBtn = document.getElementById("displayOr")

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
   // displayOrders(orders)
})


function addOrders() {
fetch(ordersURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email: "smile@gmail.com",
        type: "hot chocolate",
        size: "small",
        price: 3.50,
    })
  })
}

function displayOrders(coffeOrders){
    //coffeOrders = JSON.parse(this.responseText)
        const coffOrdersItems = coffeOrders.map(function(order) {
            return `
            <li class= allOrders>
                <h4><b>Email:  </b> ${order.email}</h4>
                <h4><b>Drink Type:  </b> ${order.type}</h4>
                <h4><b>Size: </b> ${order.size}</h4>
                <h4><b>Price: </b> ${order.price}</h4>
            </li>
        
           `
        })

        ordersUL.innerHTML = coffOrdersItems.join("")
    console.log(coffOrdersItems)
}



  addOrderBtn.addEventListener("click", function() {
    addOrders()
    getAllOrders()
    
  })

  displayBtn.addEventListener("click", function() {
    getAllOrders(function(orders) {
        displayOrders(orders)
    })
  })

