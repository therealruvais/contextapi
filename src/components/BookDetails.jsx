import React, { useContext } from "react";

import { BookContext } from "../context/BookContext";

const BookDetails = ({ book }) => {
  const { removeBooks } = useContext(BookContext);
  return (
    <div id="bookD">
      <h3>{book.title} - </h3>
      <h4>
        Authour: <span>{book.author}</span>
      </h4>
      <button onClick={() => removeBooks(book.id)}>X</button>
    </div>
  );
};

export default BookDetails;
