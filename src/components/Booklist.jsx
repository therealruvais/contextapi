import React, { useContext } from "react";
import { DarkContext } from "../context/DarkContext";
import { BookContext } from "../context/BookContext";

const Booklist = () => {
  const { isLightTheme, light, dark } = useContext(DarkContext);
  const { books } = useContext(BookContext);


  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{ background: theme.syntax, color: theme.ui }}
    >
      <ul>
        {books.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Booklist;
