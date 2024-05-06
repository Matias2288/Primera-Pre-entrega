import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDXQZqj09FBrTJqu8X2KYFNx0Drf9jdGok",
  authDomain: "proyecto-react-a5348.firebaseapp.com",
  projectId: "proyecto-react-a5348",
  storageBucket: "proyecto-react-a5348.appspot.com",
  messagingSenderId: "821417008859",
  appId: "1:821417008859:web:54dadaf8517dba1bfbb6fe"
};

// Initialize Firebase
 initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
