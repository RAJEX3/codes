let saveEl=document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count}

function save() {
    let best= count + " - "
   saveEl.textContent +=best
   count=0
   countEl.textContent=0
}
save()

/*let username="per"
let message="You have tree new notifications"
console.log(message)
let messageToUser=message + "," + username + "!"
console.log(messageToUser)*/

/*let name="Anuoluwa"
let greeting ="Hi, my name is "
let myGretting = greeting + " " + name
function boss(){
    console.log(myGretting)
}

let welcomeEl=document.getElementById("welcome-El")

let name="Anuoluwa"
let greeting="Nice to see you back"

welcomeEl.innerText = greeting +" " + name

name +="❤️"

welcomeEl.innerText = greeting + " " + name*/

 



