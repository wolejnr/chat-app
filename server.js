const express = require('express')
const http = require('http')
const {Server} = require('socket.io')

const PORT = 3000
const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.use(express.static('public'))

io.on('connection', (socket) => {
    console.log("New user connected")

    socket.on("message", (msg) => {
        io.emit("message", msg)
    })

    socket.on("disconnect", () => {
        console.log("User disconnected")
    })
})

server.listen(PORT, '10.0.0.85', () => console.log(`Server running on http://localhost:${PORT}`))
