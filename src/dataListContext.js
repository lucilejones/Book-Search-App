import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const DataListContext = React.createContext()

function DataListContextProvider(props) {
    const navigate = useNavigate()
    const [listData, setListData] = useState([])
    // console.log(listData)
    const [oneBook, setOneBook] = useState({})
    const [formData, setFormData] = useState({
        search: "",
        radio: "title"
    })
    const [bookListData, setBookListData] = useState([])
    
    function handleChange(event) {
        // console.log(formData)
        const { name, value } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    // useEffect(() => {
    //     axios.get("https://openlibrary.org/search.json?title=dog man")
    //         .then(response => setListData(response.data.docs))
    //         .catch(error => console.log(error))
    // }, [])

    function getSearchResults() {
        axios.get(`https://openlibrary.org/search.json?${formData.radio}=${formData.search}`)
            .then(response => setListData(response.data.docs))
            .catch(error => console.log(error))
    }

    function handleSubmit(event) {
        event.preventDefault()
        getSearchResults()
        navigate("/books")
    }

    function getBookDetails(id) {
        console.log(id)
        axios.get(`https://openlibrary.org${id}.json`)
            .then(response => setOneBook(response.data))
            .catch(err => console.log(err))
    }

    function saveBookToList(savedBook) {
        setBookListData([...bookListData, savedBook])
        console.log(savedBook)
        console.log(bookListData)
    }

    return (
        <DataListContext.Provider value={{
            formData,
            handleChange,
            handleSubmit,
            listData,
            oneBook,
            getBookDetails,
            saveBookToList,
            bookListData
        }}>
            {props.children}
        </DataListContext.Provider>
    )
}

export { DataListContext, DataListContextProvider }