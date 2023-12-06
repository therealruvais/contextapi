import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DarkContextProvider from './context/DarkContext.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkContextProvider>
      <App />
    </DarkContextProvider>
  </React.StrictMode>
);
