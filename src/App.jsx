import React, { Component } from "react";
import Navigation from "./components/Navigation";
import Booklist from "./components/Booklist";
import Toggle from "./components/Toggle";
import AuthContextProvider from "./context/AuthContext";
import BookContextProvider from "./context/BookContext";

export class App extends Component {
  render() {
    return (
      <>
        <AuthContextProvider>
          <Navigation />
          <BookContextProvider>
            <Booklist />
          </BookContextProvider>
          <Toggle />
        </AuthContextProvider>
      </>
    );
  }
}

export default App;
