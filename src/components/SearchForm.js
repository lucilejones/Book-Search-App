import {useContext} from "react"
import {DataListContext} from "../dataListContext"

function SearchForm() {
    const {handleChange, formData, handleSubmit} = useContext(DataListContext)

    return (
        <form onSubmit={handleSubmit}>
            <input 
                className="search-box"
                type="text"
                placeholder="Search by title, author, or subject"
                onChange={handleChange}
                name="search"
            />
            <fieldset>
            <input 
                className="radio"
                type="radio"
                id="title"
                name="radio"
                value="title"
                checked={formData.radio === "title"}
                onChange={handleChange}
            />
            <label htmlFor="title">title</label>
            <br />
            <input 
                className="radio"
                type="radio"
                id="author"
                name="radio"
                value="author"
                checked={formData.radio === "author"}
                onChange={handleChange}
            />
            <label htmlFor="author">author</label>
            <br />
            <input 
                className="radio"
                type="radio"
                id="subject"
                name="radio"
                value="subject"
                checked={formData.radio === "subject"}
                onChange={handleChange}
            />
            <label htmlFor="subject">subject</label>
            <br />
            </fieldset>
            <button>Search</button>
        </form>
    )
}

export default SearchForm