const express = require('express')

const app = express()

const PORT = 5555

const robotCtrl = require('./robotController')

app.get('/api/robots', robotCtrl.getRobots)
app.delete('/api/robots/:id', robotCtrl.deleteRobot)

app.listen(PORT, () => console.log(`Hippity Hoppity your server is poppening on port: ${PORT}`))