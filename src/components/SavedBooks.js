import { useContext } from "react"
import {DataListContext} from "../dataListContext"

function SavedBooks() {
    const {bookListData} = useContext(DataListContext)
    // console.log(bookListData, "test list")
    const displaySavedBooks = bookListData.map(function (book) {
        return (
            <div key={book._version_} className="saved-book">
                <p>{book.title}</p>
                <p>{book.author_name}</p>
            </div>
        )  
    })

    return  (
        <div className="saved-books-container">
            <p className="title">My Saved Books</p>
            <div className="saved-books-grid">
            {displaySavedBooks}
            </div>
        </div>
    )
}

export default SavedBooks