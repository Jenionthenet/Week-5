// Write your name Jennie, Derek, Sung, Antonio, Cory

const friends = [{name: "Morgan"}, {name: "Karen"}, {name: "ERica"}, {name: "Katie"}]


const numbers = [1,2,3,4,5]
const numbersAsStrings = numbers.map(function(number) {
    return `Number ${number}`
})

console.log(numbersAsStrings)

const friendItems = friends.map(function(friend){

    //let friendLI = document.createElement("li")
    //friendLI.innerHTML = friend.name 

    const friendTemplate=`<li>${friend.name}</li>`
    return friendTemplate
})

console.log(friendItems)

const friendsUL = document.getElementById("friendsUL")

friendsUL.innerHTML = friendItems.join("")




