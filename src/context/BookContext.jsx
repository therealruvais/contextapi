import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
    const [books, setBooks] = useState([
      {
        title: "Shoe Dog",
        author: "Phil Knight",
        id: 1,
      },
      {
        title: "Atomic Habits",
        author: "James clear",
        id: 2,
      },
      {
        title: "Can't Hiurt Me",
        author: "David Goggins",
        id: 3,
      },
      {
        title: "The Play Book",
        author: "Barney Stinson",
        id: 4,
      },
    ]);
    const addBooks = (title,author) => {
        setBooks([...books,{title:title,author:author,id:uuidv4()}])
    }
    const removeBooks = (id) => {
        setBooks(books.filter((book) => book.id !==id))
    }
  return <BookContext.Provider value={{books,addBooks,removeBooks}}>{children}</BookContext.Provider>;
};

export default BookContextProvider