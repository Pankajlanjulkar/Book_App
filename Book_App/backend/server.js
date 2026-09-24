const express = require('express')
const cors = require('cors')

const book = require('./routes/book')

const app = express()


// MIDDLEWARE

app.use(cors())

app.use(express.json())


// ROUTES

app.use('/books', book)


// SERVER

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})