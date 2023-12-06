import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([
    {
      title: "gameOfthrones",
      id: 1,
    },
    {
      title: "gameOfthrones",
      id: 2,
    },
    {
      title: "gameOfthrones",
      id: 3,
    },
    {
      title: "gameOfthrones",
      id: 4,
    },
  ]);
  return (
    <BookContext.Provider value={{ books }}>{children}</BookContext.Provider>
  );
};

export default BookContextProvider;
