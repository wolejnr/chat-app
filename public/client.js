const socket = io()

const form = document.querySelector('#form')
const username = document.querySelector("#username")
const input = document.querySelector("#input")
const theChat = document.querySelector("#messages")

function getRandomHexColor() {
    const hex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${hex.padStart(6, '0')}`;
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if(username.value.trim() !== '' && input.value.trim() !== '') {
        socket.emit("message", {"username": username.value, "message": input.value})
        input.value = ""
        
    }
})

socket.on("message", (msg) => {
    const li = document.createElement("li")
    const span = document.createElement("span")
    span.classList.add("username")
    span.style.color = getRandomHexColor()
    span.textContent = msg.username
    li.append(span, `: ${msg.message}`)
    // li.innerHTML = `<span class="username" style="color:${getRandomHexColor()}">${msg.username}</span>: ${msg.message}`
    theChat.append(li)
})