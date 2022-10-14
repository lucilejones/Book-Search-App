import SearchForm from "./SearchForm"

function Home() {

    return (
        <div className="home-container">
            <div className="image-wrapper">
                <span className="image-credit">Photo by <a href="https://unsplash.com/@henry_be?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Henry Be</a> on <a href="https://unsplash.com/s/photos/books?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </span>
                <img className="home-image" src="https://source.unsplash.com/lc7xcWebECc" alt="wall of books on shelves"/>
            </div>
            <div className="form-container">
                <p className="title">Search for a book</p>
                <SearchForm />
            </div>
        </div>
    )
}

export default Home