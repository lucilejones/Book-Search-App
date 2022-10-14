import React from "react";
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import DataList from "./components/DataList"
import BookDetails from "./components/BookDetails";
import SavedBooks from "./components/SavedBooks"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="site">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<DataList />} />
        <Route path="books/:bookId" element={<BookDetails />} />
        <Route path="/saved-books" element={<SavedBooks />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
