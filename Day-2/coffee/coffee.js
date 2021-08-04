const addEmail = document.getElementById("emailTxBx")
const drinkType = document.getElementById("typeOfDrink")
const drinkSize = document.getElementById("drinkSize")
const price = document.getElementById("price")

const ordersUL = document.getElementById("ordersUl")

const getOrderBtn = document.getElementById("getOrderBtn")
const addOrderBtn = document.getElementById("addOrderBtn")
const delOrderBtn = document.getElementById("deleteBtn")

const deletedEmail = document.getElementById("emailOfDeletedOrder")

const searchEmail = document.getElementById("searchEmail")
const searchBtn = document.getElementById("searchBtn")

const ordersURL = "https://troubled-peaceful-hell.glitch.me/orders"

getOrderBtn.addEventListener("click", function () {
    getAllOrders()

})


function getAllOrders() {

    let allRequest = new XMLHttpRequest()
    allRequest.open("GET", ordersURL)
    allRequest.send()

    allRequest.addEventListener("load", function () {
        const coffeOrders = JSON.parse(this.responseText)
        const coffOrdersItems = coffeOrders.map(function (order) {
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
    })

}




drinkSize.addEventListener("change", function () {
    console.log(drinkSize.value, price.value)
    if (drinkSize.value == "small") {
        price.value = 3.99
    } else if (drinkSize.value == "medium") {
        price.value = 4.99
    } else if (drinkSize.value == "large") {
        price.value = 5.99
    }
})

function addOrder() {
    const body = {
        email: addEmail.value,
        type: drinkType.value,
        size: drinkSize.value,
        price: price.value,
    }
    let request = new XMLHttpRequest()
    request.open("POST", ordersURL)
    request.setRequestHeader("Content-Type", "application/json")
    request.send(JSON.stringify(body))
    addEmail.value = ""

}
addOrderBtn.addEventListener("click", function () {

    addOrder()

})

function deletDrinkOrder() {
    const delOrder = `${ordersURL}/${deletedEmail.value}`
    let delRequest = new XMLHttpRequest()
    delRequest.open("DELETE", delOrder)
    delRequest.send()
    alert("YOUR ORDER HAS BEEN DELETED!!")
    getAllOrders()
    console.log(delOrder)
    deletedEmail.value = ""
}

delOrderBtn.addEventListener("click", function () {
    deletDrinkOrder()
})


function getOrderByEmail() {
    let searchEmailOrder = `${ordersURL}/${searchEmail.value}`
    let searchRequest = new XMLHttpRequest()
    searchRequest.open("GET", searchEmailOrder)
    searchRequest.send()
    searchEmail.value = ""

    searchRequest.addEventListener("load", function () {
        const orders = JSON.parse(this.responseText)
        const orderItems = function () {
            console.log(orders)
            return `

            <li>
                <h4>${orders.email}</h4>
                <h4>${orders.type}</h4>
                <h4>${orders.size}</h4>
                <h4>${orders.price}</h4>
            </li>
            `
        }
        console.log(orderItems)
        ordersUL.innerHTML = orderItems

    })
}

searchBtn.addEventListener("click", function () {
    getOrderByEmail()
})