import React, { useContext, useState } from 'react'
import { BookContext } from '../context/BookContext';
 
const BookForm = () => {

  const {addBooks} = useContext(BookContext)
  
const [bookForm, setBookForm] = useState({
  title: "",
  author: "",
});

const handleChange = (e) => {
  setBookForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const { title, author } = bookForm
    addBooks(title, author);
    setBookForm({ title:"", author:""})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={bookForm.title}
          type="text"
          name="title"
          placeholder="Enter the Title"
          required
        />
        <input
          onChange={handleChange}
          value={bookForm.author}
          type="text"
          name="author"
          placeholder="Enter the Author"
          required
        />
        <center>
          <input
            type="submit"
            value="Add"
          />
        </center>
      </form>
    </div>
  );
}

export default BookForm