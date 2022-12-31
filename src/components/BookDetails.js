import { useContext } from "react"
import { DataListContext } from "../dataListContext"

function BookDetails() {
    const { oneBook } = useContext(DataListContext)

    return (
        <>
        { typeof oneBook.description === "object"
        ?
        <div className="book-details-container">
            <h3 className="book-details-title">{oneBook.title}</h3>
            <p className="book-details-description">{oneBook.description.value}</p>
        </div>
        :
        <div className="book-details-container">
            <h3 className="book-details-title">{oneBook.title}</h3>
            <p className="book-details-description">{oneBook.description}</p>
        </div>
        }
        </>
        
    )
}

export default BookDetails