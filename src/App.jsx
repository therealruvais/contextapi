import React from 'react'
import BookContextProvider from './context/BookContext'
import Navbar from './components/Navbar'
import './app.css'
import Booklist from './components/Booklist'
import BookForm from './components/BookForm'

const App = () => {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookForm />
        <Booklist />
      </BookContextProvider>
    </div>
  );
}

export default App