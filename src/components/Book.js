import { useContext, useState } from "react"
import { DataListContext } from "../dataListContext"
import { Link } from "react-router-dom"

function Book(props) {
    const { getBookDetails, saveBookToList } = useContext(DataListContext)
    const [savedBook, setSavedBook] = useState({
        ...props.book
    })
    
    return (
        <div className="book-info-container">
            <div className="book-info">
                <Link to={`/books/${props.book._version_}`} onClick={() => getBookDetails(props.book.key)}>Title: {props.book.title}</Link>
                <p>Author: {props.book.author_name}</p>
                <p>First published: {props.book.first_publish_year}</p>
            </div>
            <button className="save" onClick={() => saveBookToList(savedBook)}>Save to My List</button>
        </div>
    )
}

export default Book
