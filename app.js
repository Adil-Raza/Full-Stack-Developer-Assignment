const express = require('express')
const {PORT} = require('./appConfig/config.js')
const userRoute = require('./routes/user')

const app = express()

app.use(express.json())

app.use('/users', userRoute)

app.all('*', (req, res) => {
    res.status(400).send('Unknown URL')
})

app.listen(PORT, () => {
    console.log(`Server is listning on port ${PORT}`)
})