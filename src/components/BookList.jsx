import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'
import BookDetails from './BookDetails'

const Booklist = () => {
  const {books} = useContext(BookContext)
  return (
    <div className="book-list">
      <ul>
        {books.map((book) => (
          <li key={book.id}> 
            <BookDetails
              book={book}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Booklist