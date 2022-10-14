import { useContext } from "react"
import { DataListContext } from "../dataListContext"
import Book from "./Book"

function DataList() {
    const { listData } = useContext(DataListContext)

    const displayList = listData.map(function (book) {
        return (

            <Book
                key={book._version_}
                id={book.key}
                book={book}
            />
        )
    })

    return (
        <div className="book-list-container">
            <h1 className="title">Search Results</h1>
            {displayList}
        </div>
    )
}

export default DataList