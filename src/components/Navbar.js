import {Link} from "react-router-dom"

function Navbar() {
    return (
        <nav className="nav-container">
          <Link to="/">Home</Link>
          <Link to="/books">Returned book list</Link>
          <Link to="/saved-books">My List of Books</Link>

        </nav>
    )
}

export default Navbar