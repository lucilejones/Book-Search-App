import { useContext } from "react"
import { DataListContext } from "../dataListContext"

function BookDetails() {
    const { oneBook } = useContext(DataListContext)

    return (
        <div className="book-details-container">
            <h3 className="book-details-title">{oneBook.title}</h3>
            <p className="book-details-description">{oneBook.description}</p>
        </div>
    )
}

export default BookDetails