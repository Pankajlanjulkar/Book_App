const express = require('express')
const pool = require('../db/pool')

const router = express.Router()



router.get('/', async (req, res) => {

    const sql = `SELECT * FROM books`

    try {

        const data = await pool.query(sql)

        res.send(data[0])

    }
    catch (error) {

        res.status(500).send(error.message)

    }

})

router.post('/', async (req, res) => {

    const { title, author, price } = req.body

    const sql = `
        INSERT INTO books(title, author, price)
        VALUES (?, ?, ?)
    `

    try {

        const data = await pool.query(
            sql,
            [title, author, price]
        )

        res.send(data[0])

    }
    catch (error) {

        res.status(500).send(error.message)

    }

})

router.delete('/:id', async (req, res) => {

    const id = req.params.id

    const sql = `DELETE FROM books WHERE id = ?`

    try {

        const data = await pool.query(sql, [id])

        res.send({
            message: 'Book deleted successfully'
        })

    }
    catch (error) {

        res.status(500).send(error.message)

    }

})

router.put('/:id', async (req, res) => {

    const id = req.params.id

    const { title, author, price } = req.body

    const sql = `
        UPDATE books
        SET title = ?, author = ?, price = ?
        WHERE id = ?
    `

    try {

        const data = await pool.query(
            sql,
            [title, author, price, id]
        )

        res.send({
            message: 'Book updated successfully'
        })

    }
    catch (error) {

        res.status(500).send(error.message)

    }

})

module.exports = router