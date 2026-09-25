import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

    const [books, setBooks] = useState([])

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [price, setPrice] = useState('')


    // GET BOOKS

    const getBooks = async () => {

        try {

            const response = await axios.get(
                'https://bookapp-production-3659.up.railway.app/books'
            )

            setBooks(response.data)

        }
        catch (error) {

            console.log(error)

        }

    }


    // ADD BOOK

    const addBook = async () => {

        try {

            await axios.post(
                'https://bookapp-production-3659.up.railway.app/books',
                {
                    title: title,
                    author: author,
                    price: price
                }
            )

            setTitle('')
            setAuthor('')
            setPrice('')

            getBooks()

        }
        catch (error) {

            console.log(error)

        }

    }


    // DELETE BOOK

    const deleteBook = async (id) => {

        try {

            await axios.delete(
                await axios.delete(
    `https://bookapp-production-3659.up.railway.app/books/${id}`
)
            )

            getBooks()

        }
        catch (error) {

            console.log(error)

        }

    }


    // RUN WHEN PAGE LOADS

    useEffect(() => {

        getBooks()

    }, [])


    return (

        <div className="container">

            <h1>📚 Book Manager</h1>


            <div className="form">

                <input
                    type="text"
                    placeholder="Book title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <button onClick={addBook}>
                    Add Book
                </button>

            </div>


            <h2>All Books</h2>


            {books.map((book) => (

                <div className="book" key={book.id}>

                    <h3>{book.title}</h3>

                    <p>
                        Author: {book.author}
                    </p>

                    <p>
                        Price: ₹{book.price}
                    </p>

                    <button
                        onClick={() => deleteBook(book.id)}
                    >
                        Delete
                    </button>

                </div>

            ))}

        </div>

    )
}

export default App