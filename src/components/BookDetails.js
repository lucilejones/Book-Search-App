import { useContext } from "react"
import { DataListContext } from "../dataListContext"

function BookDetails() {
    const { oneBook } = useContext(DataListContext)

    return (
        <div>
            <h3>{oneBook.title}</h3>
            <p>{oneBook.description}</p>
        </div>
    )
}

export default BookDetails